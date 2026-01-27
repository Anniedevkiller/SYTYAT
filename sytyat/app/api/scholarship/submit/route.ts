import { NextResponse } from "next/server"
import { appendToSheet, checkEmailExists } from "@/lib/googleSheets"
import { sendScholarshipPassEmail } from "@/lib/email"
import axios from "axios"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("Scholarship Submission Request Payload:", body)

        const { email, fullName, phone, gender, location, education, program, track, flowType, hasLaptop, whyJoin, results } = body

        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets details in .env")
            return NextResponse.json(
                { message: "Server configuration error" },
                { status: 500 }
            )
        }

        if (!email || !fullName) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
        }

        // Logic Check: Did they pass? (70% or more)
        const passMark = 7; // 7 out of 10
        const allPassed = results && Array.isArray(results) && results.every((res: any) => res.score >= passMark);

        // If it's a "Scholarship Exam" flow and they failed, do NOT save to sheet or send email
        if (flowType === "Scholarship Exam" && !allPassed) {
            return NextResponse.json({
                message: "Assessment completed.",
                passed: false,
                feedback: "Unfortunately, you did not meet the required score for the scholarship. You can still enroll via the standard payment route."
            }, { status: 200 })
        }

        // Check if user already applied
        const alreadyApplied = await checkEmailExists(email)
        if (alreadyApplied) {
            return NextResponse.json(
                { message: "You have already applied/taken the assessment with this email address." },
                { status: 409 }
            )
        }

        // Save to Google Sheets
        if (results && Array.isArray(results) && results.length > 0) {
            for (const res of results) {
                const sheetData = {
                    Email: email,
                    "Full Name": fullName,
                    Phone: phone,
                    Gender: gender || "N/A",
                    Location: location || "N/A",
                    Education: education || "N/A",
                    Program: program,
                    Track: res.track,
                    "Flow Type": flowType,
                    "Exam Score": `${res.score}/${res.total}`,
                    "Pass Rate": res.passRate,
                    "Has Laptop": hasLaptop || "N/A",
                    "Why Join SYTYAT": whyJoin || "N/A",
                    Amount: 0,
                    Reference: "SCHOLARSHIP-PASS",
                }
                await appendToSheet(sheetData)
            }
        }

        // Initialize Paystack for Scholarship Fee (₦15,000)
        const scholarshipAmount = 15000;
        const metadata = {
            custom_fields: [
                { display_name: "Full Name", variable_name: "full_name", value: fullName },
                { display_name: "Phone Number", variable_name: "phone", value: phone },
                { display_name: "Program", variable_name: "program", value: program },
                { display_name: "Track", variable_name: "track", value: results?.map((r: any) => r.track).join(", ") },
                { display_name: "Flow Type", variable_name: "flow_type", value: "Scholarship Payment" },
            ],
        };

        const origin = req.headers.get('origin') || new URL(req.url).origin;
        const paystackResponse = await axios.post(
            "https://api.paystack.co/transaction/initialize",
            {
                email,
                amount: scholarshipAmount * 100,
                metadata,
                callback_url: `${origin}/payments/success`,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        )

        const paymentLink = paystackResponse.data.data.authorization_url;

        // Send Success Email with Payment Link
        await sendScholarshipPassEmail(email, fullName, program, paymentLink);

        return NextResponse.json({
            message: "Congratulations! You passed the assessment.",
            passed: true,
            paymentLink: paymentLink
        }, { status: 200 })

    } catch (error: any) {
        console.error("Scholarship Submission Error:", error)
        return NextResponse.json(
            { message: "Failed to process application", error: error.message },
            { status: 500 }
        )
    }
}
