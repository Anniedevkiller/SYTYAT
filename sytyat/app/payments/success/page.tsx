"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Download, Mail, BookOpen } from "lucide-react"

function PaymentSuccessContent() {
    const searchParams = useSearchParams()
    const isScholarship = searchParams.get("type") === "scholarship"

    return (
        <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4 bg-gradient-to-b from-primary/5 to-background">
            <div className="container max-w-2xl mx-auto">
                <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                    <CardHeader className="text-center pt-12 pb-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                            {isScholarship ? (
                                <BookOpen className="w-10 h-10 text-primary" />
                            ) : (
                                <CheckCircle2 className="w-10 h-10 text-primary" />
                            )}
                        </div>
                        <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight">
                            {isScholarship ? "Application Received!" : "Payment Successful!"}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2 text-lg">
                            {isScholarship
                                ? "Your scholarship application has been submitted."
                                : "Your enrollment has been secured."}
                        </p>
                    </CardHeader>
                    <CardContent className="px-6 pb-12 sm:px-12 space-y-8">
                        <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-4">
                            <h3 className="font-bold text-xl flex items-center gap-2">
                                <ArrowRight className="w-5 h-5 text-primary" /> Next Steps
                            </h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                                    <p>Check your email for a confirmation of your {isScholarship ? "application" : "enrollment"}.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                                    <p>
                                        {isScholarship
                                            ? "The link to take your online scholarship exam has been sent to your email."
                                            : "An automated receipt has been sent to your registered email address."}
                                    </p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                                    <p>Our team will reach out via WhatsApp/Email within 48 hours for onboarding instructions.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                <Link href="/">Back to Homepage</Link>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 h-12 rounded-xl group hover:border-primary hover:text-primary bg-transparent">
                                <Link href="/programs">
                                    View Other Programs
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        <div className="pt-8 border-t border-border flex flex-col items-center gap-4 text-center">
                            <p className="text-sm text-muted-foreground italic">
                                Need help? Contact us immediately at <span className="text-primary font-bold">support@sytyat.com</span>
                            </p>
                            <div className="flex gap-6">
                                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                                <Download className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <PaymentSuccessContent />
        </Suspense>
    )
}
