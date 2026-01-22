import { NextResponse } from "next/server"
import { appendToSheet, checkEmailExists } from "@/lib/googleSheets"
import { sendScholarshipConfirmationEmail } from "@/lib/email"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, fullName, phone, gender, location, education, program, track, flowType } = body

        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets details in .env")
            return NextResponse.json(
                { message: "Server configuration error: Missing Google Credentials" },
                { status: 500 }
            )
        }

        if (!email || !fullName) {
            return NextResponse.json(
                { message: "Email and Full Name are required" },
                { status: 400 }
            )
        }

        // Check if user already applied
        const alreadyApplied = await checkEmailExists(email)
        if (alreadyApplied) {
            return NextResponse.json(
                { message: "You have already applied with this email address." },
                { status: 400 }
            )
        }

        // Prepare data for Google Sheets
        const sheetData = {
            Email: email,
            "Full Name": fullName,
            Phone: phone,
            Gender: gender,
            Location: location,
            Education: education,
            Program: program,
            Track: track,
            "Flow Type": flowType,
            Amount: 0, // No payment for scholarship application
            Reference: "SCHOLARSHIP-APPLICATION",
        }

        await appendToSheet(sheetData)

        // Send confirmation email
        await sendScholarshipConfirmationEmail(email, fullName, program);

        return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 })
    } catch (error: any) {
        console.error("Scholarship Submission Error:", error)
        return NextResponse.json(
            { message: "Failed to submit application", error: error.message || "Internal Server Error" },
            { status: 500 }
        )
    }
}
