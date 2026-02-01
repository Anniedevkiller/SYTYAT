import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

export async function appendToSheet(data: any, spreadsheetId?: string) {
    try {
        // 1. Prepare and clean the Private Key
        const rawKey = process.env.GOOGLE_PRIVATE_KEY || ""
        const privateKey = rawKey
            .replace(/\\n/g, "\n")
            .replace(/^"(.*)"$/, "$1") // Remove literal quotes if present in .env
            .trim()

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        // 2. Initialize the document
        const targetId = spreadsheetId || process.env.GOOGLE_SHEET_ID || ""
        const doc = new GoogleSpreadsheet(targetId, serviceAccountAuth)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[0]

        // 3. Prepare data with a timestamp
        const rowData = {
            Timestamp: new Date().toLocaleString(),
            ...data,
        }

        // 4. Ensure headers exist (Required by google-spreadsheet v4+)
        try {
            await sheet.loadHeaderRow()
        } catch (e) {
            // If headers can't be loaded (e.g., empty sheet), set them from keys
            const headers = Object.keys(rowData)
            await sheet.setHeaderRow(headers)
        }

        // 5. Append the data
        await sheet.addRow(rowData)
        return true
    } catch (error: any) {
        console.error("Google Sheets Error Details:", {
            message: error.message,
            stack: error.stack,
            response: error.response?.data,
        })
        throw error
    }
}

export async function checkEmailExists(email: string, spreadsheetId?: string) {
    try {
        const rawKey = process.env.GOOGLE_PRIVATE_KEY || ""
        const privateKey = rawKey.replace(/\\n/g, "\n").replace(/^"(.*)"$/, "$1").trim()

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        const targetId = spreadsheetId || process.env.GOOGLE_SHEET_ID || ""
        const doc = new GoogleSpreadsheet(targetId, serviceAccountAuth)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()

        // Headers might be case-sensitive or slightly different, check 'Email' column
        return rows.some(row => row.get("Email")?.toString().toLowerCase() === email.toLowerCase())
    } catch (error) {
        console.error("Error checking email existence:", error)
        return false // Fallback to allow if check fails (safest for UX)
    }
}
export async function getScholarshipRecipients(spreadsheetId?: string) {
    try {
        const rawKey = process.env.GOOGLE_PRIVATE_KEY || ""
        const privateKey = rawKey.replace(/\\n/g, "\n").replace(/^"(.*)"$/, "$1").trim()

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        const targetId = spreadsheetId || process.env.GOOGLE_SHEET_ID || ""
        const doc = new GoogleSpreadsheet(targetId, serviceAccountAuth)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()

        return rows.map(row => ({
            email: row.get("Email"),
            fullName: row.get("Full Name"),
            program: row.get("Program"),
            track: row.get("Track"),
            reference: row.get("Reference"),
        })).filter(r => r.reference === "SCHOLARSHIP-PASS")
    } catch (error) {
        console.error("Error getting scholarship recipients:", error)
        return []
    }
}
