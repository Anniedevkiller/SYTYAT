import type { Metadata } from "next"
import { Scale, FileSignature, AlertCircle, Gavel, BookOpen, AlertTriangle, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
    title: "Terms & Conditions | SYTYAT",
    description: "Terms and Conditions for SYTYAT (So You Think You Are a Techie) program.",
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-accent/5 via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
            <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                            <Scale className="w-8 h-8 text-accent" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Please read these terms carefully before enrolling in our programs.
                        </p>
                        <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground">
                            Last updated: January 21, 2026
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12 shadow-xl shadow-accent/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">

                            <div className="space-y-12">
                                {/* Section 1 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                            <FileSignature className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">1. Agreement to Terms</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms and Conditions constitute a legally binding agreement made between you ("you") and Bivy Space ("we," "us," or "our").
                                        By enrolling in or accessing our services, you agree to be bound by all of these Terms and Conditions.
                                    </p>
                                </section>

                                {/* Section 2 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">2. Program Services</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        SYTYAT provides technical education, bootcamps, and mentorship. We reserve the right to modify curriculum and schedules
                                        to ensure education quality. Enrollment does not guarantee employment, though we provide strong career support.
                                    </p>
                                </section>

                                {/* Section 3 - Critical styling for payments */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                            <AlertCircle className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">3. Payments & Refunds</h2>
                                    </div>

                                    <div className="grid gap-4 not-prose">
                                        <div className="flex gap-4 p-5 rounded-xl bg-background border border-border/60">
                                            <div className="shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                                <span className="font-bold text-lg">₦</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">Tuition Fees</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    All fees must be paid in full before the program commences or according to an agreed plan.
                                                    Scholarship fees apply only to verified successful applicants.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 p-5 rounded-xl bg-background border border-border/60">
                                            <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-600">
                                                <AlertTriangle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">Refund Policy</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Refunds are only available within the <strong>first 7 days</strong> of the program start date.
                                                    Withdrawals after this period are not eligible for refunds. Administrative fees may apply.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 4 & 5 */}
                                <section className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                                <ShieldCheck className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-xl font-bold m-0 text-foreground">Student Conduct</h2>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            We maintain a respectful environment. Harassment or disruptive behavior may result in dismissal without refund.
                                            Active participation is required for graduation.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                                <Gavel className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-xl font-bold m-0 text-foreground">Intellectual Property</h2>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Course materials are owned by Bivy Space. You may not distribute, sell, or reproduce these materials without written consent.
                                        </p>
                                    </div>
                                </section>

                                {/* Section 6 */}
                                <section className="pt-8 border-t border-border/50">
                                    <h2 className="text-xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                                    <p className="text-muted-foreground text-sm italic">
                                        In no event will we be liable to you or any third party for any direct, indirect, consequential,
                                        exemplary, incidental, special, or punitive damages arising from your use of the site or our programs.
                                    </p>
                                </section>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
