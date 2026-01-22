import { NextResponse } from "next/server"
import axios from "axios"
import { checkEmailExists } from "@/lib/googleSheets"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, amount, metadata } = body

        if (!email || !amount) {
            return NextResponse.json(
                { message: "Email and amount are required" },
                { status: 400 }
            )
        }

        // Check if user already paid
        const alreadyPaid = await checkEmailExists(email, process.env.GOOGLE_SHEET_ID_PAYMENTS)
        if (alreadyPaid) {
            return NextResponse.json(
                { message: "A payment/signup already exists for this email address." },
                { status: 400 }
            )
        }

        // Paystack expects amount in Kobo (Naira * 100)
        const paystackAmount = Math.round(parseFloat(amount) * 100)

        const origin = req.headers.get('origin') || new URL(req.url).origin;

        const response = await axios.post(
            "https://api.paystack.co/transaction/initialize",
            {
                email,
                amount: paystackAmount,
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

        return NextResponse.json(response.data)
    } catch (error: any) {
        console.error("Paystack Initialization Error Full:", error.response?.data || error)
        return NextResponse.json(
            { message: "Failed to initialize payment", error: error.response?.data || error.message },
            { status: 500 }
        )
    }
}
