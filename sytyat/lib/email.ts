import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendScholarshipConfirmationEmail(email: string, fullName: string, program: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'SYTYAT <onboarding@resend.dev>',
            to: [email],
            subject: 'Application Received - SYTYAT Scholarship',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded-xl; shadow-sm;">
          <h2 style="color: #2563eb; margin-bottom: 16px;">Application Received!</h2>
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Thank you for applying for the <strong>${program}</strong> scholarship at SYTYAT.</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #374151;">Next Steps:</p>
            <ol style="margin-top: 8px; color: #4b5563;">
              <li>Take your online scholarship exam here: <a href="https://sytyat.com/exam" style="color: #2563eb; text-decoration: underline;">SYTYAT Aptitude Exam</a></li>
              <li>Wait for your results (usually within 48 hours).</li>
              <li>Once you pass, you will receive a payment link for the scholarship fee.</li>
            </ol>
          </div>
          <p style="color: #6b7280; font-size: 14px;">If you have any questions, feel free to reply to this email.</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px; text-align: center;">&copy; 2025 SYTYAT. All rights reserved.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Email caught error:', err);
        return { success: false, error: err };
    }
}

export async function sendPaymentConfirmationEmail(email: string, fullName: string, program: string, amount: number, reference: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'SYTYAT <onboarding@resend.dev>',
            to: [email],
            subject: 'Enrollment Confirmed - SYTYAT',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded-xl; shadow-sm;">
          <h2 style="color: #10b981; margin-bottom: 16px;">Payment Successful!</h2>
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Your enrollment for the <strong>${program}</strong> has been confirmed.</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #374151;">Transaction Details:</p>
            <ul style="margin-top: 8px; color: #4b5563;">
              <li><strong>Program:</strong> ${program}</li>
              <li><strong>Amount Paid:</strong> ₦${amount.toLocaleString()}</li>
              <li><strong>Reference:</strong> ${reference}</li>
            </ul>
          </div>
          <p>Our team will reach out via WhatsApp/Email within 48 hours to start your onboarding process.</p>
          <p style="color: #6b7280; font-size: 14px;">Keep this email as your official receipt.</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px; text-align: center;">&copy; 2025 SYTYAT. All rights reserved.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Email caught error:', err);
        return { success: false, error: err };
    }
}
