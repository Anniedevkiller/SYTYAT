import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export async function sendScholarshipConfirmationEmail(email: string, fullName: string, program: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'SYTYAT <admissions@sytyat.bivytech.space>',
      to: [email],
      subject: 'Application Received - SYTYAT Scholarship',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="https://sytyat.bivytech.space/logo.png" alt="SYTYAT Logo" style="width: 120px; height: auto;" />
          </div>
          
          <div style="border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #0f172a; margin-top: 0; font-size: 24px; font-weight: 800; text-align: center;">Application Received!</h2>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6; text-align: center;">
              Hello <strong>${fullName}</strong>, we've received your application for the <strong>${program}</strong>.
            </p>

            <div style="background-color: #f8fafc; border-radius: 16px; padding: 24px; margin: 32px 0; border: 1px solid #f1f5f9;">
              <p style="margin: 0 0 16px 0; font-weight: 700; color: #1e293b; font-size: 14px; text-transform: uppercase; tracking: 0.05em;">Your Next Steps:</p>
              <div style="color: #475569; font-size: 15px; line-height: 1.5;">
                <p style="margin: 8px 0;">• Your exam results are being reviewed.</p>
                <p style="margin: 8px 0;">• Successful candidates will be contacted within 48 hours.</p>
                <p style="margin: 8px 0;">• Keep an eye on your email for the official offer letter.</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 32px;">
              <a href="https://sytyat.bivytech.space" style="background-color: #2563eb; color: #ffffff; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; display: inline-block;">Visit Student Portal</a>
            </div>
          </div>

          <p style="color: #94a3b8; font-size: 13px; text-align: center; margin-top: 32px;">
            Questions? Reply to this email or visit our website.<br />
            &copy; 2025 SYTYAT. Educating the next generation of tech leaders.
          </p>
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

export async function sendScholarshipPassEmail(email: string, fullName: string, program: string, paymentLink: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'SYTYAT <admissions@sytyat.bivytech.space>',
      to: [email],
      subject: 'Congratulations! You Secured a Scholarship - SYTYAT',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="https://sytyat.bivytech.space/logo.png" alt="SYTYAT Logo" style="width: 120px; height: auto;" />
          </div>
          
          <div style="border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #10b981;">
            <h2 style="color: #0f172a; margin-top: 0; font-size: 24px; font-weight: 800; text-align: center;">Congratulations! 🎉</h2>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6; text-align: center;">
              Hello <strong>${fullName}</strong>, we are thrilled to inform you that you passed the scholarship assessment for the <strong>${program}</strong>!
            </p>

            <div style="background-color: #f0fdf4; border-radius: 16px; padding: 24px; margin: 32px 0; border: 1px solid #dcfce7;">
              <p style="margin: 0 0 16px 0; font-weight: 700; color: #166534; font-size: 14px; text-transform: uppercase;">Scholarship Offer:</p>
              <p style="color: #166534; font-size: 18px; font-weight: 800; margin: 8px 0;">Tuition: ₦15,000 (Subsidized)</p>
              <p style="color: #475569; font-size: 14px;">This offer is valid for the next 48 hours.</p>
            </div>

            <div style="text-align: center; margin-top: 32px;">
              <a href="${paymentLink}" style="background-color: #10b981; color: #ffffff; padding: 18px 36px; border-radius: 12px; text-decoration: none; font-weight: 700; display: inline-block; font-size: 16px;">Pay Scholarship Fee Now</a>
            </div>

            <p style="color: #64748b; font-size: 14px; text-align: center; margin-top: 24px;">
              Secure your spot before the deadline. We can't wait to see you in the cohort!
            </p>
          </div>

          <p style="color: #94a3b8; font-size: 13px; text-align: center; margin-top: 32px;">
            &copy; 2025 SYTYAT. Transforming futures through technology.
          </p>
        </div>
      `,
    });

    if (error) return { success: false, error };
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err };
  }
}

export async function sendPaymentConfirmationEmail(email: string, fullName: string, program: string, amount: number, reference: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'SYTYAT <admissions@sytyat.bivytech.space>',
      to: [email],
      subject: 'Enrollment Confirmed - SYTYAT',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="https://sytyat.bivytech.space/logo.png" alt="SYTYAT Logo" style="width: 120px; height: auto;" />
          </div>
          
          <div style="border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #10b981;">
            <h2 style="color: #0f172a; margin-top: 0; font-size: 24px; font-weight: 800; text-align: center;">Enrollment Confirmed!</h2>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6; text-align: center;">
              Congratulations <strong>${fullName}</strong>! Your seat in the <strong>${program}</strong> is secured.
            </p>

            <div style="background-color: #f0fdf4; border-radius: 16px; padding: 24px; margin: 32px 0; border: 1px solid #dcfce7;">
              <p style="margin: 0 0 16px 0; font-weight: 700; color: #166534; font-size: 14px; text-transform: uppercase; tracking: 0.05em;">Transaction Details:</p>
              <div style="color: #166534; font-size: 15px; line-height: 1.8;">
                <div style="display: flex; justify-content: space-between;">
                  <span>Program:</span> <span style="font-weight: 600;">${program}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Amount:</span> <span style="font-weight: 600;">₦${amount.toLocaleString()}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Reference:</span> <span style="font-weight: 600; font-family: monospace;">${reference}</span>
                </div>
              </div>
            </div>

            <p style="color: #64748b; font-size: 15px; line-height: 1.6; text-align: center; margin-bottom: 24px;">
              Our onboarding team will reach out to you via WhatsApp and Email within the next 48 hours to provide your learning credentials and schedule.
            </p>

            <div style="text-align: center;">
              <a href="https://sytyat.bivytech.space" style="background-color: #10b981; color: #ffffff; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; display: inline-block;">Enter Learning Dashboard</a>
            </div>
          </div>

          <p style="color: #94a3b8; font-size: 13px; text-align: center; margin-top: 32px;">
            Please keep this email as your official proof of payment.<br />
            &copy; 2025 SYTYAT. Transforming futures through technology.
          </p>
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
