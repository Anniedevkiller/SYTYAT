"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    GraduationCap,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Laptop,
    User,
    Mail,
    Phone,
    Brain,
    Trophy,
    Sparkles,
    Loader2
} from "lucide-react"
import axios from "axios"

const tracks = [
    "Frontend Development",
    "Backend Development",
    "DevOps",
    "UI/UX & Graphic Design",
    "Virtual Assistant & Customer Support",
    "Data Analyst",
    "Product Management",
    "Sales & Digital Marketing",
    "Mobile Development",
    "QA (Quality Assurance)",
    "Content & Video Editing"
]

const trackQuestions: Record<string, { q: string, options: string[], a: string }[]> = {
    "Frontend Development": [
        { q: "Frontend development focuses on:", options: ["Databases", "Servers", "What users see and interact with", "Networking"], a: "What users see and interact with" },
        { q: "Which language is used to structure web pages?", options: ["Python", "HTML", "SQL", "Bash"], a: "HTML" },
        { q: "CSS is mainly used for:", options: ["Logic", "Styling and layout", "Databases", "Servers"], a: "Styling and layout" },
        { q: "JavaScript is used to:", options: ["Design logos", "Add interactivity", "Store files", "Manage servers"], a: "Add interactivity" },
        { q: "A button click on a website is handled by:", options: ["HTML only", "CSS only", "JavaScript", "Excel"], a: "JavaScript" },
        { q: "Which is a frontend tool?", options: ["Figma", "Docker", "Kubernetes", "AWS"], a: "Figma" },
        { q: "Why is frontend important?", options: ["Users never see it", "It improves user experience", "It runs databases", "It manages servers"], a: "It improves user experience" },
        { q: "Which skill is important for frontend devs?", options: ["Patience", "Practice", "Problem-solving", "All of the above"], a: "All of the above" },
        { q: "What device can display frontend work?", options: ["Phone", "Tablet", "Laptop", "All of the above"], a: "All of the above" },
        { q: "Learning frontend requires:", options: ["Memorizing everything", "Expensive laptop only", "Consistent practice", "No effort"], a: "Consistent practice" }
    ],
    "Backend Development": [
        { q: "Backend development focuses on:", options: ["User interface", "Server logic and databases", "Design colors", "Video editing"], a: "Server logic and databases" },
        { q: "Which is a backend language?", options: ["HTML", "CSS", "JavaScript (Node.js)", "Canva"], a: "JavaScript (Node.js)" },
        { q: "What does a backend server do?", options: ["Shows buttons", "Handles requests and data", "Designs UI", "Edits images"], a: "Handles requests and data" },
        { q: "Databases are used to:", options: ["Store data", "Design pages", "Create videos", "Send emails only"], a: "Store data" },
        { q: "Which is a database?", options: ["MySQL", "Figma", "CapCut", "Photoshop"], a: "MySQL" },
        { q: "Backend works closely with:", options: ["Frontend", "Marketing", "Design only", "HR"], a: "Frontend" },
        { q: "APIs are used to:", options: ["Connect systems", "Draw designs", "Write stories", "Create videos"], a: "Connect systems" },
        { q: "Backend developers must care about:", options: ["Security", "Performance", "Data accuracy", "All of the above"], a: "All of the above" },
        { q: "Backend work is mostly:", options: ["Visual", "Logic-based", "Drawing", "Social media"], a: "Logic-based" },
        { q: "Backend skills are useful for:", options: ["Web apps", "Mobile apps", "Systems", "All of the above"], a: "All of the above" }
    ],
    "DevOps": [
        { q: "DevOps focuses on:", options: ["Design only", "Coding only", "Building and running software smoothly", "Content creation"], a: "Building and running software smoothly" },
        { q: "DevOps connects:", options: ["Designers and marketers", "Developers and operations", "Sales and HR", "Students and teachers"], a: "Developers and operations" },
        { q: "Deployment means:", options: ["Writing code", "Releasing software", "Designing UI", "Testing only"], a: "Releasing software" },
        { q: "Why is automation important?", options: ["Saves time", "Reduces errors", "Improves speed", "All of the above"], a: "All of the above" },
        { q: "Which tool is used in DevOps?", options: ["Docker", "Canva", "Excel", "CapCut"], a: "Docker" },
        { q: "Cloud platforms help to:", options: ["Host applications", "Draw designs", "Edit videos", "Write notes"], a: "Host applications" },
        { q: "DevOps requires:", options: ["Consistency", "Problem-solving", "Willingness to learn", "All of the above"], a: "All of the above" },
        { q: "Monitoring is used to:", options: ["Watch videos", "Track system health", "Design layouts", "Market products"], a: "Track system health" },
        { q: "DevOps is best learned:", options: ["Instantly", "Gradually", "Without practice", "Without tools"], a: "Gradually" },
        { q: "DevOps is important because systems must:", options: ["Look good", "Be reliable", "Be colorful", "Be viral"], a: "Be reliable" }
    ],
    "UI/UX & Graphic Design": [
        { q: "Design focuses on:", options: ["How things work internally", "How things look and feel", "Databases", "Servers"], a: "How things look and feel" },
        { q: "UI means:", options: ["User Interface", "User Intelligence", "Universal Input", "Unique Interaction"], a: "User Interface" },
        { q: "UX focuses on:", options: ["Colors only", "User experience", "Coding logic", "Servers"], a: "User experience" },
        { q: "Good design helps users to:", options: ["Get confused", "Achieve goals easily", "Waste time", "Quit apps"], a: "Achieve goals easily" },
        { q: "Which is a design tool?", options: ["Figma", "Docker", "Git", "AWS"], a: "Figma" },
        { q: "Design decisions should be based on:", options: ["Guessing", "User needs", "Random ideas", "Trends only"], a: "User needs" },
        { q: "Colors and spacing are important because they:", options: ["Increase file size", "Improve clarity", "Slow apps", "Confuse users"], a: "Improve clarity" },
        { q: "Designers work closely with:", options: ["Developers", "Product managers", "Users", "All of the above"], a: "All of the above" },
        { q: "Design skills are useful for:", options: ["Websites", "Mobile apps", "Branding", "All of the above"], a: "All of the above" },
        { q: "To improve design skills, you need:", options: ["Practice", "Feedback", "Iteration", "All of the above"], a: "All of the above" }
    ],
    "Virtual Assistant & Customer Support": [
        { q: "A virtual assistant helps with:", options: ["Coding", "Admin and support tasks", "Design only", "Servers"], a: "Admin and support tasks" },
        { q: "Customer support focuses on:", options: ["Selling products", "Helping customers", "Writing code", "Design"], a: "Helping customers" },
        { q: "Communication is important because:", options: ["Customers need clarity", "It reduces issues", "It builds trust", "All of the above"], a: "All of the above" },
        { q: "Which tool is commonly used?", options: ["Email", "WhatsApp", "CRM tools", "All of the above"], a: "All of the above" },
        { q: "A good VA should be:", options: ["Organized", "Reliable", "Responsive", "All of the above"], a: "All of the above" },
        { q: "When a customer is angry, you should:", options: ["Ignore them", "Listen and respond calmly", "Argue", "Block them"], a: "Listen and respond calmly" },
        { q: "Time management is important because:", options: ["Tasks have deadlines", "Clients expect speed", "Work is remote", "All of the above"], a: "All of the above" },
        { q: "Customer support helps businesses by:", options: ["Increasing satisfaction", "Retaining customers", "Improving reputation", "All of the above"], a: "All of the above" },
        { q: "Virtual assistants often work:", options: ["On-site only", "Remotely", "Offline", "Without tools"], a: "Remotely" },
        { q: "This role requires:", options: ["Patience", "Communication", "Organization", "All of the above"], a: "All of the above" }
    ],
    "Data Analyst": [
        { q: "Data analysis is about:", options: ["Guessing", "Understanding information", "Design", "Marketing"], a: "Understanding information" },
        { q: "Data helps businesses to:", options: ["Make decisions", "Reduce risks", "Improve performance", "All of the above"], a: "All of the above" },
        { q: "Which tool is commonly used?", options: ["Excel", "Google Sheets", "SQL", "All of the above"], a: "All of the above" },
        { q: "Data must be:", options: ["Accurate", "Clean", "Organized", "All of the above"], a: "All of the above" },
        { q: "Charts and graphs help to:", options: ["Confuse people", "Visualize data", "Hide information", "Slow decisions"], a: "Visualize data" },
        { q: "A data analyst works with:", options: ["Numbers", "Trends", "Patterns", "All of the above"], a: "All of the above" },
        { q: "If data looks wrong, you should:", options: ["Ignore it", "Check and clean it", "Guess", "Delete it"], a: "Check and clean it" },
        { q: "Data analysis requires:", options: ["Attention to detail", "Logical thinking", "Patience", "All of the above"], a: "All of the above" },
        { q: "Data insights help to:", options: ["Improve products", "Improve marketing", "Improve operations", "All of the above"], a: "All of the above" },
        { q: "Data analysis is useful in:", options: ["Tech", "Business", "Finance", "All industries"], a: "All industries" }
    ],
    "Product Management": [
        { q: "A product manager focuses on:", options: ["Coding", "Solving user problems", "Designing logos", "Servers"], a: "Solving user problems" },
        { q: "Product decisions should be based on:", options: ["Guessing", "User needs and data", "Trends only", "Personal feelings"], a: "User needs and data" },
        { q: "Roadmaps are used to:", options: ["Plan product direction", "Design UI", "Write code", "Test servers"], a: "Plan product direction" },
        { q: "Product managers work with:", options: ["Designers", "Developers", "Stakeholders", "All of the above"], a: "All of the above" },
        { q: "A good product balances:", options: ["Business goals", "User needs", "Technical limits", "All of the above"], a: "All of the above" },
        { q: "Feedback is important because it:", options: ["Improves products", "Shows issues", "Guides decisions", "All of the above"], a: "All of the above" },
        { q: "Prioritization means:", options: ["Doing everything at once", "Choosing what matters most", "Ignoring tasks", "Guessing"], a: "Choosing what matters most" },
        { q: "Product success is measured by:", options: ["User satisfaction", "Adoption", "Impact", "All of the above"], a: "All of the above" },
        { q: "Documentation helps to:", options: ["Communication clearly", "Align teams", "Avoid confusion", "All of the above"], a: "All of the above" },
        { q: "Product management requires:", options: ["Communication", "Organization", "Critical thinking", "All of the above"], a: "All of the above" }
    ],
    "Sales & Digital Marketing": [
        { q: "Sales focuses on:", options: ["Closing deals", "Building relationships", "Generating revenue", "All of the above"], a: "All of the above" },
        { q: "Digital marketing uses:", options: ["Online platforms", "Social media", "Ads", "All of the above"], a: "All of the above" },
        { q: "Marketing helps businesses to:", options: ["Reach customers", "Build awareness", "Increase sales", "All of the above"], a: "All of the above" },
        { q: "Content is important because it:", options: ["Engages audiences", "Educates users", "Builds trust", "All of the above"], a: "All of the above" },
        { q: "Analytics help to:", options: ["Measure performance", "Improve strategy", "Optimize campaigns", "All of the above"], a: "All of the above" },
        { q: "A sales funnel shows:", options: ["Customer journey", "Buying stages", "Conversion process", "All of the above"], a: "All of the above" },
        { q: "Digital marketing requires:", options: ["Creativity", "Consistency", "Testing", "All of the above"], a: "All of the above" },
        { q: "Customer trust helps to:", options: ["Increase sales", "Retain customers", "Build loyalty", "All of the above"], a: "All of the above" },
        { q: "Marketing decisions should be:", options: ["Random", "Data-driven", "Emotional only", "Ignored"], a: "Data-driven" },
        { q: "Sales & marketing skills are useful in:", options: ["Startups", "Corporations", "Freelancing", "All of the above"], a: "All of the above" }
    ],
    "Mobile Development": [
        { q: "Mobile development focuses on:", options: ["Websites", "Mobile apps", "Servers", "Databases only"], a: "Mobile apps" },
        { q: "Mobile apps run on:", options: ["Phones", "Tablets", "Both", "Servers only"], a: "Both" },
        { q: "Which is a mobile platform?", options: ["Android", "iOS", "Both", "Linux"], a: "Both" },
        { q: "Mobile apps should be:", options: ["Slow", "User-friendly", "Confusing", "Heavy"], a: "User-friendly" },
        { q: "Mobile developers care about:", options: ["Performance", "Battery usage", "User experience", "All of the above"], a: "All of the above" },
        { q: "Mobile apps can be built for:", options: ["Business", "Entertainment", "Education", "All of the above"], a: "All of the above" },
        { q: "Mobile development requires:", options: ["Logic", "Problem-solving", "Practice", "All of the above"], a: "All of the above" },
        { q: "Testing is important to:", options: ["Find bugs", "Improve quality", "Ensure usability", "All of the above"], a: "All of the above" },
        { q: "Mobile apps are distributed through:", options: ["App stores", "Email", "USB only", "Servers"], a: "App stores" },
        { q: "Mobile development is a:", options: ["Useless skill", "Growing field", "Declining field", "Temporary trend"], a: "Growing field" }
    ],
    "QA (Quality Assurance)": [
        { q: "QA focuses on:", options: ["Writing code", "Testing software quality", "Designing UI", "Marketing"], a: "Testing software quality" },
        { q: "QA ensures software is:", options: ["Bug-free", "Reliable", "User-friendly", "All of the above"], a: "All of the above" },
        { q: "Testing helps to:", options: ["Find issues early", "Improve product quality", "Reduce risks", "All of the above"], a: "All of the above" },
        { q: "QA works closely with:", options: ["Developers", "Product managers", "Designers", "All of the above"], a: "All of the above" },
        { q: "Manual testing involves:", options: ["Automated scripts", "Human testing", "Servers", "Design tools"], a: "Human testing" },
        { q: "Bug reports should be:", options: ["Clear", "Detailed", "Reproducible", "All of the above"], a: "All of the above" },
        { q: "QA requires:", options: ["Attention to detail", "Curiosity", "Patience", "All of the above"], a: "All of the above" },
        { q: "Testing should be done:", options: ["Once", "At the end only", "Continuously", "Never"], a: "Continuously" },
        { q: "QA helps users by:", options: ["Improving experience", "Reducing errors", "Increasing trust", "All of the above"], a: "All of the above" },
        { q: "QA is important because quality matters to:", options: ["Users", "Businesses", "Teams", "Everyone"], a: "Everyone" }
    ],
    "Content & Video Editing": [
        { q: "Content creation focuses on:", options: ["Communication", "Storytelling", "Engagement", "All of the above"], a: "All of the above" },
        { q: "Video editing is used to:", options: ["Improve visuals", "Add effects", "Enhance storytelling", "All of the above"], a: "All of the above" },
        { q: "Which is a video editing tool?", options: ["CapCut", "Premiere Pro", "InShot", "All of the above"], a: "All of the above" },
        { q: "Good content should be:", options: ["Clear", "Engaging", "Valuable", "All of the above"], a: "All of the above" },
        { q: "Editing helps to:", options: ["Remove mistakes", "Improve flow", "Keep attention", "All of the above"], a: "All of the above" },
        { q: "Content creators should understand:", options: ["Audience", "Platform", "Trends", "All of the above"], a: "All of the above" },
        { q: "Consistency helps to:", options: ["Grow audience", "Build brand", "Improve reach", "All of the above"], a: "All of the above" },
        { q: "Video content is popular because it:", options: ["Is engaging", "Is easy to consume", "Works on social media", "All of the above"], a: "All of the above" },
        { q: "Content editing can be done on:", options: ["Laptop", "Phone", "Tablet", "All of the above"], a: "All of the above" },
        { q: "Content & video skills are useful for:", options: ["Marketing", "Branding", "Education", "All of the above"], a: "All of the above" }
    ]
}

export default function ScholarshipExamPage() {
    const router = useRouter()
    const [step, setStep] = useState(0) // 0: Intro, 1: Personal Info, 2: Questions, 3: Success
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        hasLaptop: "",
        tracks: [] as string[],
        whyJoin: ""
    })
    const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({})
    const [results, setResults] = useState<{ track: string, score: number, total: number, passRate: string }[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const toggleTrack = (track: string) => {
        setFormData(prev => ({
            ...prev,
            tracks: prev.tracks.includes(track)
                ? prev.tracks.filter(t => t !== track)
                : [...prev.tracks, track]
        }))
    }

    const handleAnswerChange = (track: string, questionIndex: number, answer: string) => {
        setAnswers(prev => ({
            ...prev,
            [track]: {
                ...(prev[track] || {}),
                [questionIndex]: answer
            }
        }))
    }

    const currentTrack = formData.tracks[currentTrackIndex]
    const currentQuestions = currentTrack ? trackQuestions[currentTrack] : []

    const calculateAllScores = () => {
        return formData.tracks.map(track => {
            const trackAnswers = answers[track] || {}
            const questions = trackQuestions[track]
            let score = 0
            questions.forEach((q, idx) => {
                if (trackAnswers[idx] === q.a) score++
            })
            return {
                track,
                score,
                total: questions.length,
                passRate: `${((score / questions.length) * 100).toFixed(1)}%`
            }
        })
    }

    const nextStep = () => {
        if (step === 1) {
            if (!formData.fullName || !formData.email || !formData.phone || !formData.hasLaptop || formData.tracks.length === 0) {
                alert("Please fill all required fields and select at least one track.")
                return
            }
        }

        if (step === 2) {
            const trackAnswers = answers[currentTrack] || {}
            if (Object.keys(trackAnswers).length < currentQuestions.length) {
                alert(`Please answer all questions for the ${currentTrack} assessment.`)
                return
            }

            if (currentTrackIndex < formData.tracks.length - 1) {
                setCurrentTrackIndex(currentTrackIndex + 1)
                window.scrollTo(0, 0)
                return
            }
        }

        setStep(step + 1)
        window.scrollTo(0, 0)
    }

    const prevStep = () => {
        if (step === 2 && currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1)
            window.scrollTo(0, 0)
            return
        }
        setStep(step - 1)
        window.scrollTo(0, 0)
    }

    const handleSubmit = async () => {
        const allResults = calculateAllScores()
        setResults(allResults)
        setIsLoading(true)

        try {
            await axios.post("/api/scholarship/submit", {
                ...formData,
                track: formData.tracks.join(", "),
                results: allResults,
                // These are for backward compatibility if API expects single score
                score: allResults[0].score,
                totalQuestions: allResults[0].total,
                program: "3-Month Tech Bootcamp",
                flowType: "Scholarship Exam",
                education: "N/A",
                location: "Online",
                gender: "N/A"
            })
            setStep(3)
        } catch (error: any) {
            console.error("Submission error:", error)
            alert(error.response?.data?.message || "Failed to submit. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-3xl w-full mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-wider">SYTYAT Scholarship Exam</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Unlock Your <span className="text-primary">Opportunity.</span>
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Brain className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Logic Based</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <div className="flex items-center gap-1">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">Merit Scholarship</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar (Visible during Form and Questions) */}
                {(step === 1 || step === 2) && (
                    <div className="mb-8 relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500 ease-out"
                                style={{ width: `${step === 1 ? '50%' : '100%'}` }}
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            <span>Step 1: Information</span>
                            <span>Step 2: Assessment</span>
                        </div>
                    </div>
                )}

                {/* Step 0: Intro */}
                {step === 0 && (
                    <Card className="border-2 border-primary/10 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer" />
                        <CardHeader className="text-center pt-10">
                            <CardTitle className="text-3xl font-bold">Ready to Start?</CardTitle>
                            <CardDescription className="text-lg">
                                This assessment will test your basic knowledge in your chosen field.
                                High performers qualify for a subsidized tuition of ₦15,000.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">10 Questions</h4>
                                        <p className="text-sm text-muted-foreground">Track-specific questions to test your foundation.</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                        <Laptop className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Online Only</h4>
                                        <p className="text-sm text-muted-foreground">Can be taken on any device with internet access.</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={nextStep}
                                size="lg"
                                className="w-full h-16 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all group"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {/* Step 1: Personal Info */}
                {step === 1 && (
                    <Card className="border-2 border-primary/10 shadow-2xl bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-right-8 duration-700">
                        <CardHeader>
                            <CardTitle className="text-2xl">Tell us about yourself</CardTitle>
                            <CardDescription>Fill in your basic details to proceed to the exam.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="grid gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary" /> Full Name
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary" /> Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-primary" /> Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="0801 234 5678"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="h-12"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="flex items-center gap-2">
                                        <Laptop className="w-4 h-4 text-primary" /> Do you have a laptop?
                                    </Label>
                                    <div className="flex gap-4">
                                        <label className={`flex items-center space-x-2 p-3 border rounded-xl hover:bg-muted/50 transition-colors flex-1 cursor-pointer ${formData.hasLaptop === "Yes" ? "border-primary bg-primary/5" : ""}`}>
                                            <input
                                                type="radio"
                                                name="hasLaptop"
                                                value="Yes"
                                                checked={formData.hasLaptop === "Yes"}
                                                onChange={(e) => setFormData({ ...formData, hasLaptop: e.target.value })}
                                                className="w-4 h-4 text-primary focus:ring-primary border-border"
                                            />
                                            <span className="flex-1 cursor-pointer">Yes</span>
                                        </label>
                                        <label className={`flex items-center space-x-2 p-3 border rounded-xl hover:bg-muted/50 transition-colors flex-1 cursor-pointer ${formData.hasLaptop === "No" ? "border-primary bg-primary/5" : ""}`}>
                                            <input
                                                type="radio"
                                                name="hasLaptop"
                                                value="No"
                                                checked={formData.hasLaptop === "No"}
                                                onChange={(e) => setFormData({ ...formData, hasLaptop: e.target.value })}
                                                className="w-4 h-4 text-primary focus:ring-primary border-border"
                                            />
                                            <span className="flex-1 cursor-pointer">No</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-primary" /> Which track are you applying for?
                                    </Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {tracks.map((track) => (
                                            <label
                                                key={track}
                                                className={`flex items-center p-3 rounded-xl border-2 transition-all cursor-pointer hover:bg-primary/5 ${formData.tracks.includes(track) ? 'border-primary bg-primary/5' : 'border-border'}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="track"
                                                    value={track}
                                                    className="w-4 h-4 mr-3 accent-primary"
                                                    checked={formData.tracks.includes(track)}
                                                    onChange={() => toggleTrack(track)}
                                                />
                                                <span className={`text-sm ${formData.tracks.includes(track) ? 'font-bold text-primary' : ''}`}>{track}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="whyJoin">Why do you want to join SYTYAT? (Optional)</Label>
                                    <Textarea
                                        id="whyJoin"
                                        name="whyJoin"
                                        placeholder="Tell us about your motivation..."
                                        value={formData.whyJoin}
                                        onChange={handleInputChange}
                                        className="min-h-[100px]"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl">
                                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                                </Button>
                                <Button onClick={nextStep} className="flex-1 h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 group">
                                    Start Assessment
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Step 2: Questions */}
                {step === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
                        <div className="p-6 rounded-3xl bg-card border-2 border-primary/10 shadow-xl mb-8 sticky top-10 z-20 backdrop-blur-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant="outline" className="text-xs uppercase tracking-widest text-primary border-primary/20">
                                            Assessment {currentTrackIndex + 1} of {formData.tracks.length}
                                        </Badge>
                                    </div>
                                    <h3 className="font-bold text-xl">{currentTrack}</h3>
                                    <p className="text-sm text-muted-foreground">Answer all 10 questions to proceed.</p>
                                </div>
                                <Badge variant="secondary" className="px-3 py-1 text-lg font-mono">
                                    {Object.keys(answers[currentTrack] || {}).length}/10
                                </Badge>
                            </div>
                            <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-500"
                                    style={{ width: `${((currentTrackIndex) / formData.tracks.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        {currentQuestions.map((q, idx) => (
                            <Card key={`${currentTrack}-${idx}`} className={`border-2 transition-all duration-300 ${answers[currentTrack]?.[idx] ? 'border-primary/20 bg-primary/5' : 'border-border'}`}>
                                <CardHeader>
                                    <CardTitle className="text-xl flex gap-4">
                                        <span className="text-primary font-mono shrink-0">Q{idx + 1}.</span>
                                        <span>{q.q}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {q.options.map((opt, optIdx) => (
                                            <label
                                                key={optIdx}
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-2xl cursor-pointer transition-all ${(answers[currentTrack]?.[idx]) === opt ? 'border-primary bg-primary/10 shadow-sm' : 'border-border hover:bg-muted/50'}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`q${currentTrackIndex}-${idx}`}
                                                    value={opt}
                                                    checked={(answers[currentTrack]?.[idx]) === opt}
                                                    onChange={(e) => handleAnswerChange(currentTrack, idx, e.target.value)}
                                                    className="w-4 h-4 text-primary focus:ring-primary border-border"
                                                />
                                                <span className="flex-1 cursor-pointer text-base font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <div className="flex gap-4 pt-8">
                            <Button variant="outline" onClick={prevStep} className="h-16 px-8 rounded-2xl border-2">
                                <ArrowLeft className="mr-2 w-5 h-5" /> Back
                            </Button>
                            {currentTrackIndex < formData.tracks.length - 1 ? (
                                <Button
                                    onClick={nextStep}
                                    className="flex-1 h-16 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 group"
                                >
                                    Next Assessment
                                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={Object.keys(answers[currentTrack] || {}).length < 10 || isLoading}
                                    className="flex-1 h-16 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/20 relative overflow-hidden group"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            Submit All Assessments
                                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                    <Card className="border-2 border-green-500/20 shadow-2xl bg-card/50 backdrop-blur-sm text-center p-8 sm:p-12 animate-in zoom-in duration-700">
                        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 className="w-14 h-14" />
                        </div>
                        <h2 className="text-4xl font-black mb-4">Exam Completed!</h2>
                        <CardDescription className="text-xl mb-10 max-w-sm mx-auto">
                            Thank you, {formData.fullName}. Your applications and exam answers have been submitted successfully for review.
                        </CardDescription>

                        <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 mb-10 inline-block w-full text-left">
                            <div className="text-sm text-muted-foreground uppercase font-bold tracking-widest mb-2 text-center">Next Steps</div>
                            <p className="text-lg leading-relaxed text-center">
                                Our admissions team will review your application and assessment results.
                                You will receive an official feedback email within 48 hours.
                            </p>
                        </div>

                        <Button asChild size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl">
                            <Link href="/">Return to Home</Link>
                        </Button>
                    </Card>
                )}
            </div>
        </div>
    )
}
