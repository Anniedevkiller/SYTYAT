import { NextResponse } from "next/server"
import crypto from "crypto"
import { appendToSheet } from "@/lib/googleSheets"
import { sendPaymentConfirmationEmail } from "@/lib/email"

export async function POST(req: Request) {
    try {
        const rawBody = await req.text()
        const signature = req.headers.get("x-paystack-signature")

        if (!signature) {
            return NextResponse.json({ message: "No signature" }, { status: 401 })
        }

        // Verify signature
        const hash = crypto
            .createHmac("sha512", process.env.PAYSTACK_WEBHOOK_SECRET || "")
            .update(rawBody)
            .digest("hex")

        if (hash !== signature) {
            return NextResponse.json({ message: "Invalid signature" }, { status: 401 })
        }

        const event = JSON.parse(rawBody)

        // Process successful payment
        if (event.event === "charge.success") {
            const { metadata, customer, amount, reference } = event.data

            console.log("Payment successful for:", customer.email)

            // The metadata contains our form data
            const formData = metadata?.custom_fields?.reduce((acc: any, field: any) => {
                acc[field.display_name] = field.value
                return acc
            }, {}) || {}

            // Prepare data for Google Sheets
            const sheetData = {
                Email: customer.email,
                Amount: amount / 100, // Convert back from Kobo
                Reference: reference,
                ...formData
            }

            await appendToSheet(sheetData, process.env.GOOGLE_SHEET_ID_PAYMENTS)

            // Send payment confirmation email
            await sendPaymentConfirmationEmail(
                customer.email,
                formData["Full Name"] || customer.email,
                formData["Program"] || "Technical Program",
                amount / 100,
                reference
            )

            console.log("Data appended to Google Sheets and email sent successfully")
        }

        return NextResponse.json({ message: "Webhook processed" }, { status: 200 })
    } catch (error: any) {
        console.error("Webhook Error:", error.message)
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        )
    }
}
