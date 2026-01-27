import { NextResponse } from "next/server"
import { appendToSheet, checkEmailExists } from "@/lib/googleSheets"
import { sendScholarshipConfirmationEmail } from "@/lib/email"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("Scholarship Submission Request Payload:", body)

        const { email, fullName, phone, gender, location, education, program, track, flowType, score, totalQuestions, hasLaptop, whyJoin, results } = body

        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets details in .env")
            return NextResponse.json(
                { message: "Server configuration error: Missing Google Credentials" },
                { status: 500 }
            )
        }

        if (!email || !fullName) {
            const missing = []
            if (!email) missing.push("email")
            if (!fullName) missing.push("fullName")
            return NextResponse.json(
                { message: `Missing required fields: ${missing.join(", ")}` },
                { status: 400 }
            )
        }

        // Check if user already applied
        const alreadyApplied = await checkEmailExists(email)
        if (alreadyApplied) {
            return NextResponse.json(
                { message: "You have already applied with this email address. Please wait for our feedback." },
                { status: 409 } // Conflict
            )
        }

        // If there are multiple results, append a row for each track
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
                    Reference: "SCHOLARSHIP-APPLICATION",
                }
                await appendToSheet(sheetData)
            }
        } else {
            // Single track submission (fallback/legacy)
            const sheetData = {
                Email: email,
                "Full Name": fullName,
                Phone: phone,
                Gender: gender || "N/A",
                Location: location || "N/A",
                Education: education || "N/A",
                Program: program,
                Track: track,
                "Flow Type": flowType,
                "Exam Score": score !== undefined ? `${score}/${totalQuestions}` : "N/A",
                "Pass Rate": score !== undefined ? `${((score / totalQuestions) * 100).toFixed(1)}%` : "N/A",
                "Has Laptop": hasLaptop || "N/A",
                "Why Join SYTYAT": whyJoin || "N/A",
                Amount: 0,
                Reference: "SCHOLARSHIP-APPLICATION",
            }
            await appendToSheet(sheetData)
        }

        // Send a single confirmation email
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
