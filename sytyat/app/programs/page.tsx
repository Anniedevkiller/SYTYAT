"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Palette,
  BarChart,
  Smartphone,
  Video,
  Shield,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Rocket,
  BookOpen,
  Users,
  Star,
  Clock,
  Award,
  TrendingUp,
  Headphones,
  Zap,
  Lock,
  PenTool,
  Heart,
  Building,
  Target,
  Sparkles,
  Database,
  Cpu,
  Cloud,
  Link as LinkIcon,
  Gamepad2,
  CodeXml,
  Layout,
  Megaphone,
  Server,
} from "lucide-react"

const bootcampTracks = [
  { icon: Code, name: "Frontend Development", color: "bg-blue-500/10 text-blue-500" },
  { icon: Database, name: "Backend Development", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Palette, name: "UI/UX Design", color: "bg-pink-500/10 text-pink-500" },
  { icon: Briefcase, name: "Product Management", color: "bg-violet-500/10 text-violet-500" },
  { icon: BarChart, name: "Data Analysis", color: "bg-amber-500/10 text-amber-500" },
  { icon: Shield, name: "DevOps", color: "bg-red-500/10 text-red-500" },
  { icon: Headphones, name: "Virtual Assistance", color: "bg-cyan-500/10 text-cyan-500" },
  { icon: TrendingUp, name: "Digital Marketing", color: "bg-lime-500/10 text-lime-500" },
  { icon: Video, name: "Content / Video Editing", color: "bg-orange-500/10 text-orange-500" },
  { icon: CheckCircle2, name: "Quality Assurance (QA)", color: "bg-teal-500/10 text-teal-500" },
  { icon: Smartphone, name: "Mobile Development", color: "bg-indigo-500/10 text-indigo-500" },
  { icon: Lock, name: "Cybersecurity", color: "bg-slate-500/10 text-slate-500" },
  { icon: Zap, name: "No-Code Development", color: "bg-yellow-500/10 text-yellow-500" },
  { icon: PenTool, name: "Technical Writing", color: "bg-rose-500/10 text-rose-500" },
  { icon: Cpu, name: "Artificial Intelligence", color: "bg-purple-500/10 text-purple-500" },
  { icon: Cloud, name: "Cloud Computing", color: "bg-sky-500/10 text-sky-500" },
  { icon: LinkIcon, name: "Blockchain Development", color: "bg-indigo-500/10 text-indigo-500" },
  { icon: Gamepad2, name: "Game Development", color: "bg-green-500/10 text-green-500" },
  { icon: CodeXml, name: "Data Science", color: "bg-blue-500/10 text-blue-500" },
  { icon: Layout, name: "Graphics Design", color: "bg-pink-500/10 text-pink-500" },
  { icon: Megaphone, name: "Social Media Management", color: "bg-orange-500/10 text-orange-500" },
  { icon: Server, name: "Database Administration", color: "bg-slate-500/10 text-slate-500" },
]

const shortCourses = [
  { name: "Build Your First Website", icon: Sparkles },
  { name: "UI/UX for Beginners", icon: Palette },
  { name: "Python Basics", icon: Code },
  { name: "No-Code Website / App", icon: Zap },
  { name: "Digital Marketing", icon: TrendingUp },
  { name: "Cybersecurity Basics", icon: Lock },
  { name: "Canva & Visual Design", icon: PenTool },
  { name: "Soft Skills Development", icon: Heart },
  { name: "Corporate Upskilling", icon: Building },
]

const kidsPrograms = [
  "Coding for Kids",
  "Robotics",
  "3D & Game Creation",
  "Animation & Creativity",
  "Digital Skills for Teens",
]

const bootcampBenefits = [
  "Live classes + full recordings",
  "Assignments & hands-on projects",
  "Mentorship & peer groups",
  "Capstone project",
  "Certificate of completion",
  "CV, LinkedIn & portfolio support",
  "Internship/job pipeline access",
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="outline" className="border-primary/50 text-primary mb-6 py-1.5 px-4 bg-primary/5 backdrop-blur-sm">
                Explore Our Education Pipeline
              </Badge>
              <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                Future-Proof Your <span className="text-primary italic">Career</span>
              </h1>
              <p className="text-xl sm:text-2xl text-background/70 leading-relaxed font-medium mb-10">
                From intensive 3-month bootcamps to focused 1-month short courses, we provide the skills you need to dominate the digital landscape.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="#bootcamp">View Bootcamp</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="#shortcourses">Short Courses</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full" />
              <Image
                src="/programs-hero.png"
                alt="Tech Growth"
                width={600}
                height={600}
                className="relative z-10 drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs List */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
        <div className="grid gap-16">

          {/* 1. Intensive Bootcamp */}
          <section id="bootcamp" className="scroll-mt-24">
            <Card className="rounded-[3rem] border-none shadow-2xl shadow-primary/10 overflow-hidden bg-card">
              <div className="grid lg:grid-cols-[1fr,1.2fr]">
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-start gap-8 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <Rocket className="w-4 h-4" />
                    Bestseller
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">3-Month Tech Bootcamp</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our most comprehensive program. Go from absolute beginner to industry-ready professional in 12 intensive weeks of live learning and project builds.
                  </p>

                  <div className="space-y-4 w-full">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                      <Clock className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-bold text-lg">Next Cohort: Feb – Apr 2025</p>
                        <p className="text-sm text-muted-foreground">3 Months Intensive Training</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Standard Fee</p>
                        <p className="text-3xl font-black">₦20,000</p>
                        <p className="text-xs text-muted-foreground mt-1">One-time payment</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
                          <Award className="w-12 h-12" />
                        </div>
                        <p className="text-xs text-primary-foreground/70 uppercase font-bold tracking-wider mb-1">Scholarship Fee</p>
                        <p className="text-3xl font-black">₦15,000</p>
                        <p className="text-xs text-primary-foreground/70 mt-1 italic">Pass IQ exam to qualify</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <Link href="/apply">Apply for This Cohort <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>

                <div className="p-8 sm:p-12 lg:p-16 bg-muted/10 border-l border-border/50">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Specialization Tracks
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {bootcampTracks.map((track, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/40 transition-all group">
                        <div className={`p-2 rounded-lg ${track.color} group-hover:scale-110 transition-transform`}>
                          <track.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold">{track.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 space-y-4">
                    <h3 className="text-xl font-bold mb-6">Program Benefits</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {bootcampBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* 2. Short Courses */}
          <section id="shortcourses" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <Card className="rounded-[2.5rem] border-none shadow-xl shadow-accent/5 overflow-hidden bg-card flex flex-col">
                <div className="p-8 sm:p-12 flex flex-col flex-1 items-start gap-6 bg-gradient-to-br from-accent/5 to-transparent">
                  <Badge variant="outline" className="text-accent border-accent/20 bg-accent/5">Early Access Launch</Badge>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-2">
                    <BookOpen className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold">Short Courses</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    High-impact, 1-month programs designed for busy learners. Focus on a single skill and master it quickly.
                  </p>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border w-full">
                    <Star className="w-6 h-6 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Flat Fee</p>
                      <p className="text-3xl font-bold text-accent">₦10,000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full">
                    {shortCourses.map((course, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50">
                        <course.icon className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold">{course.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 w-full">
                    <Button disabled className="w-full h-14 rounded-2xl text-lg font-bold bg-muted text-muted-foreground cursor-not-allowed">
                      Coming Soon (April 2025)
                    </Button>
                  </div>
                </div>
              </Card>

              {/* 3. Kids & Teens */}
              <Card id="kids" className="rounded-[2.5rem] border-none shadow-xl shadow-secondary/5 overflow-hidden bg-card flex flex-col scroll-mt-24">
                <div className="p-8 sm:p-12 flex flex-col flex-1 items-start gap-6 bg-gradient-to-br from-secondary/10 to-transparent">
                  <Badge variant="outline" className="text-secondary-foreground border-secondary/20 bg-secondary/10">Summer Enrollment</Badge>
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-2">
                    <Users className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <h2 className="text-4xl font-bold">Kids & Teens</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The next generation of tech leaders starts here. Ages 10–18. Creative, fun, and deeply educational.
                  </p>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border w-full shadow-inner opacity-75">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider">Schedule</p>
                      <p className="text-xl font-bold">June – July</p>
                    </div>
                  </div>

                  <div className="space-y-4 w-full">
                    {kidsPrograms.map((program, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="font-semibold text-muted-foreground">{program}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 w-full">
                    <Button disabled className="w-full h-14 rounded-2xl text-lg font-bold bg-muted text-muted-foreground cursor-not-allowed">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>

      {/* Trust Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">5,000+</p>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Students Trained</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">11</p>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Skill Tracks</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">Bivy</p>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Verified Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">Stop Thinking. Start Building.</h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
            Your technical career is one click away. Choose your path and join the Bivy Tech ecosystem today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-16 px-12 rounded-2xl text-lg font-bold shadow-2xl">
              <Link href="/apply">Secure Your Seat</Link>
            </Button>
            <Link href="/about#scholarship" className="font-semibold underline decoration-white/30 decoration-2 underline-offset-8 hover:decoration-white transition-all text-white">
              View Scholarship Terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
