import type { Metadata } from "next"
import { Shield, Lock, Eye, FileText, Share2, Server, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Privacy Policy | SYTYAT",
    description: "Privacy Policy for SYTYAT (So You Think You Are a Techie) program.",
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
            <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We value your trust and are committed to protecting your personal information.
                        </p>
                        <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground">
                            Last updated: January 21, 2026
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12 shadow-xl shadow-primary/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">

                            <div className="space-y-12">
                                {/* Section 1 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">1. Introduction</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Welcome to SYTYAT ("So You Think You Are a Techie?"), a program by Bivy Space. We are committed to
                                        protecting your personal information and your right to privacy. If you have any questions or concerns
                                        about our policy, or our practices with regards to your personal information, please contact us at{" "}
                                        <a href="mailto:admissions@sytyat.bivytech.space" className="text-primary font-medium hover:underline">
                                            admissions@sytyat.bivytech.space
                                        </a>
                                        .
                                    </p>
                                </section>

                                {/* Section 2 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Eye className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">2. Information We Collect</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We collect personal information that you voluntarily provide to us when you apply for our programs,
                                        express an interest in obtaining information about us or our products and services, or otherwise contact
                                        us.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-4 not-prose">
                                        <div className="p-4 rounded-xl bg-background border border-border/50">
                                            <h3 className="font-semibold mb-2 text-foreground">Personal Data</h3>
                                            <p className="text-sm text-muted-foreground">Name, email address, phone number, location (country/state), education level, and gender.</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-background border border-border/50">
                                            <h3 className="font-semibold mb-2 text-foreground">Payment Data</h3>
                                            <p className="text-sm text-muted-foreground">Processed securely by Paystack. We do not store credit card details on our servers.</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-background border border-border/50 sm:col-span-2">
                                            <h3 className="font-semibold mb-2 text-foreground">Application Data</h3>
                                            <p className="text-sm text-muted-foreground">Responses to scholarship assessments, program track preferences, and other application-related information.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 3 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Server className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">3. How We Use Your Information</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We use personal information collected via our website for a variety of business purposes described below.
                                        We process your personal information for these purposes in reliance on our legitimate business interests,
                                        in order to enter into or perform a contract with you, with your consent, and/or for compliance with our
                                        legal obligations.
                                    </p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground marker:text-primary">
                                        <li>To facilitate account creation and logon processes.</li>
                                        <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
                                        <li>To fulfill and manage your orders and enrollment involved in our programs.</li>
                                        <li>To improve our services, marketing, and your experience.</li>
                                    </ul>
                                </section>

                                {/* Section 4 */}
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Share2 className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-bold m-0 text-foreground">4. Sharing Your Information</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We only share information with your consent, to comply with laws, to provide you with services, to
                                        protect your rights, or to fulfill business obligations.
                                    </p>
                                    <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                                        <p className="text-sm text-muted-foreground m-0">
                                            <strong className="text-foreground">Third-Party Providers:</strong> We
                                            may share your data with third-party vendors, service providers, contractors, or agents who perform
                                            services for us or on our behalf and require access to such information to do that work (e.g., payment
                                            processing, data analysis, email delivery, hosting services).
                                        </p>
                                    </div>
                                </section>

                                {/* Section 5 & 6 */}
                                <section className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <Lock className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-xl font-bold m-0 text-foreground">Data Retention & Security</h2>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            We will only keep your personal information for as long as it is necessary for the purposes set out in
                                            this privacy policy. We use administrative, technical, and physical security measures to help protect your personal
                                            information.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-xl font-bold m-0 text-foreground">Contact Us</h2>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            If you have questions or comments about this policy, you may email us at{" "}
                                            <a href="mailto:admissions@sytyat.bivytech.space" className="text-primary font-medium hover:underline">
                                                admissions@sytyat.bivytech.space
                                            </a>.
                                        </p>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
