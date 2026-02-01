import 'dotenv/config';
import { getScholarshipRecipients } from '../lib/googleSheets';
import { sendScholarshipPassEmail } from '../lib/email';
import axios from 'axios';

/**
 * Helper to handle retries for API calls, specifically for rate limits (429)
 */
async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
    const RETRY_DELAYS = [60000, 300000]; // 1 minute, then 5 minutes
    let attempt = 0;

    while (true) {
        try {
            return await fn();
        } catch (error: any) {
            const isRateLimit = error.response?.status === 429 ||
                error.message?.toLowerCase().includes('rate limit');

            if (isRateLimit && attempt < RETRY_DELAYS.length) {
                const waitTime = RETRY_DELAYS[attempt];
                console.log(`\n⚠️ Rate limit hit during ${label}.`);
                console.log(`⏱️ Waiting ${waitTime / 60000} minute(s) before retry attempt ${attempt + 1}...`);

                await new Promise(resolve => setTimeout(resolve, waitTime));
                attempt++;
                continue;
            }

            // If not a rate limit or we've exhausted retries, throw the error
            throw error;
        }
    }
}

async function main() {
    console.log('Fetching scholarship recipients from Google Sheets...');

    try {
        const recipients = await getScholarshipRecipients();
        console.log(`Found ${recipients.length} scholarship recipients.`);

        if (recipients.length === 0) {
            console.log('No recipients found to notify.');
            return;
        }

        const scholarshipAmount = 15000;
        const baseUrl = 'https://sytyat.bivytech.space';

        for (const recipient of recipients) {
            try {
                console.log(`\n--- Processing: ${recipient.fullName} (${recipient.email}) ---`);

                // 1. Initialize Paystack Transaction (with retry logic)
                const paymentLink = await withRetry(async () => {
                    const metadata = {
                        custom_fields: [
                            { display_name: "Full Name", variable_name: "full_name", value: recipient.fullName },
                            { display_name: "Program", variable_name: "program", value: recipient.program },
                            { display_name: "Track", variable_name: "track", value: recipient.track },
                            { display_name: "Flow Type", variable_name: "flow_type", value: "Scholarship Extension Notification" },
                        ],
                    };

                    const response = await axios.post(
                        "https://api.paystack.co/transaction/initialize",
                        {
                            email: recipient.email,
                            amount: scholarshipAmount * 100,
                            metadata,
                            callback_url: `${baseUrl}/payments/success`,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    return response.data.data.authorization_url;
                }, `Paystack initialization for ${recipient.email}`);

                // 2. Send Email (with retry logic)
                await withRetry(async () => {
                    const emailResult = await sendScholarshipPassEmail(
                        recipient.email,
                        recipient.fullName,
                        recipient.program,
                        paymentLink
                    );

                    if (!emailResult.success) {
                        throw new Error(JSON.stringify(emailResult.error || 'Unknown email error'));
                    }
                    console.log(`✅ Successfully sent extension email to ${recipient.email}`);
                    return emailResult;
                }, `Email sending for ${recipient.email}`);

                // Add a slightly larger delay between successful recipients to be safe
                await new Promise(resolve => setTimeout(resolve, 1000));

            } catch (error: any) {
                console.error(`❌ Error processing ${recipient.email}:`, error.response?.data || error.message);
                console.log('Skipping to next recipient...');
            }
        }

        console.log('\n--- Notification Process Complete ---');
    } catch (error: any) {
        console.error('Fatal error in script:', error.message);
    }
}

main();

