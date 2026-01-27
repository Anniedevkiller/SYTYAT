"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    GraduationCap,
    Award,
    BookOpen,
    CheckCircle2,
    Trophy,
    Brain,
    Rocket,
    ArrowRight,
    Target,
    Users,
    Calendar,
    Sparkles
} from "lucide-react"

const examRequirements = [
    "Logic & Critical Thinking",
    "Basic Tech Knowledge",
    "Problem Solving Skills",
    "English Proficiency",
    "Time Management"
]

const scholarshipBenefits = [
    {
        icon: Trophy,
        title: "Reduced Tuition",
        description: "Pay ₦15,000 instead of ₦20,000 for the 3-month bootcamp."
    },
    {
        icon: Award,
        title: "Certificate of Merit",
        description: "Receive special recognition as a scholarship scholar."
    },
    {
        icon: Users,
        title: "Priority Mentorship",
        description: "Get direct access to senior mentors and industry experts."
    },
    {
        icon: Target,
        title: "Internship Access",
        description: "Priority consideration for internships at Bivy Tech partners."
    }
]

export default function ScholarshipPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-sm font-semibold text-accent">SYTYAT Merit Scholarship • Deadline Feb 24</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            Prove Your Skills, <br />
                            <span className="text-primary">Earn Your Future.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            The SYTYAT Scholarship Program is designed to reward talent and determination.
                            Pass our logic assessment to unlock reduced tuition fees and exclusive program benefits.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                            <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                <Link href="/scholarship-exam">
                                    Take the Challenge
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors">
                                <Link href="#details">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section id="details" className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Apply for Scholarship?</h2>
                        <p className="text-muted-foreground">More than just a discount — it's a badge of honor.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {scholarshipBenefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <Card key={index} className="border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Decorative background for steps */}
                            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/30 to-transparent lg:left-8 z-0" />

                            <div className="space-y-12 relative z-10">
                                <div className="mb-10">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
                                    <p className="text-muted-foreground text-lg">Your journey to a full scholarship in 3 simple steps.</p>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex-none w-16 h-16 rounded-2xl bg-background text-primary border border-primary/20 flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                        <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
                                        <span className="relative z-10">1</span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Apply Online</h3>
                                        <p className="text-muted-foreground leading-relaxed">Select "Apply for Scholarship" on the application page. Fill in your personal details to create your candidate profile.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex-none w-16 h-16 rounded-2xl bg-background text-accent border border-accent/20 flex items-center justify-center font-bold text-2xl shadow-lg shadow-accent/5 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                        <div className="absolute inset-0 bg-accent/10 rounded-2xl" />
                                        <span className="relative z-10">2</span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Take the Assessment</h3>
                                        <p className="text-muted-foreground leading-relaxed">Receive a link to our 30-minute online logic & aptitude test. You can take this from anywhere, on any device.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex-none w-16 h-16 rounded-2xl bg-background text-secondary-foreground border border-secondary/20 flex items-center justify-center font-bold text-2xl shadow-lg shadow-secondary/5 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                        <div className="absolute inset-0 bg-secondary/10 rounded-2xl" />
                                        <span className="relative z-10">3</span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-foreground transition-colors">Get Verified</h3>
                                        <p className="text-muted-foreground leading-relaxed">Top performers receive a scholarship offer letter within 48 hours, unlocking the reduced ₦15,000 tuition fee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl aspect-square lg:aspect-auto h-[500px]">
                                <Image
                                    src="/about-community.png"
                                    alt="Students learning"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assessment Details Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-full blur-3xl opacity-40" />
                            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 aspect-square lg:aspect-auto h-[500px]">
                                <Image
                                    src="/programs-hero.png"
                                    alt="Logical assessment"
                                    fill
                                    className="object-cover"
                                />
                                {/* Floating Badge */}
                                <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="font-bold text-sm">Pass Mark: 70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    <Brain className="w-4 h-4" /> Assessment Format
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-6">More Than Just Code</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The SYTYAT Scholarship Assessment isn't about knowing how to code — yet.
                                    It measures your <span className="text-foreground font-semibold">potential, logical reasoning, and problem-solving abilities</span>.
                                    We're looking for thinkers who are ready to become builders.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4 text-lg">What to Expect</h3>
                                <div className="flex flex-wrap gap-3">
                                    {examRequirements.map((req, index) => (
                                        <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                                            {req}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-4">
                                    <div className="p-2 bg-yellow-500/20 rounded-lg shrink-0 text-yellow-700 dark:text-yellow-500">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-yellow-700 dark:text-yellow-500 mb-1 text-lg">Scholarship Deadline</h4>
                                        <p className="text-muted-foreground leading-snug">
                                            Applications close 1 week before the cohort start date. Early application is highly recommended as slots are limited.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-foreground text-background">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-8">Do You Have What It Takes?</h2>
                        <p className="text-xl text-background/80 mb-10 leading-relaxed">
                            Join the ranks of successful Bivy Tech scholars. Prove your merit and start your journey for just ₦15,000.
                        </p>
                        <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all">
                            <Link href="/scholarship-exam">
                                Start Application Logic Test
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
