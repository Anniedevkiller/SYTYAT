import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Calendar,
  Code2,
  CheckCircle2,
  Trophy,
  Users,
  Zap,
  Globe,
  Briefcase as BriefcaseBig,
  Database,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Lock,
  PenTool,
  Palette,
  Headphones,
  Video,
  Smartphone,
  Cpu,
  Cloud,
  Link as LinkIcon,
  Gamepad2,
  CodeXml,
  Layout,
  Megaphone,
  Server
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 border border-primary/20 backdrop-blur-md animate-pulse-glow hover:scale-105 transition-transform cursor-default">
                <Sparkles className="w-4 h-4 fill-primary-foreground/20 animate-vibrate" />
                <span className="text-sm font-bold tracking-wide uppercase">Cohort 2 Admissions Open</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Master Digital & <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Creative Skills.
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join SYTYAT's immersive bootcamp to learn in-demand tech skills.
                From development to design and marketing, we turn beginners into job-ready
                professionals through practical, hands-on mentorship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300"
                >
                  <Link href="/apply">
                    Start Your Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full hover:bg-muted transition-all duration-300"
                >
                  <Link href="/programs">View Curriculum</Link>
                </Button>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Beginner Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Job-Ready Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Certified</span>
                </div>
              </div>
            </div>

            {/* Visual Element / Code Mockup */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative z-10 bg-[#0f1117] rounded-2xl shadow-2xl border border-white/10 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-white/40 font-mono">student_success.tsx</span>
                </div>
                <div className="font-mono text-sm space-y-2 text-blue-300">
                  <div><span className="text-purple-400">const</span> <span className="text-yellow-300">futureExpert</span> = &#123;</div>
                  <div className="pl-4"><span className="text-white">name:</span> <span className="text-green-300">"Your Name"</span>,</div>
                  <div className="pl-4"><span className="text-white">skills:</span> [</div>
                  <div className="pl-8 text-orange-300">"Development", "Design", "Marketing"</div>
                  <div className="pl-4">],</div>
                  <div className="pl-4"><span className="text-white">jobReady:</span> <span className="text-purple-400">true</span></div>
                  <div>&#125;;</div>
                  <br />
                  <div><span className="text-white/50">// Apply now to compile your future...</span></div>
                </div>
              </div>
              {/* Floating Constellation - Expanded and spread out */}
              <div className="absolute -top-16 right-[-20%] bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-float hidden xl:block z-20">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-[10%] right-[-15%] bg-card p-3 rounded-xl shadow-lg border border-border/40 animate-pulse delay-300 hidden lg:block z-20">
                <Video className="w-6 h-6 text-orange-500" />
              </div>
              <div className="absolute top-[40%] right-[-18%] bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-float delay-700 hidden lg:block z-20">
                <Palette className="w-7 h-7 text-pink-500" />
              </div>
              <div className="absolute top-[65%] right-[-12%] bg-card p-3 rounded-xl shadow-lg border border-border/40 animate-bounce delay-1000 hidden lg:block z-20">
                <Cpu className="w-6 h-6 text-cyan-500" />
              </div>
              <div className="absolute -bottom-12 right-[5%] bg-card p-3 rounded-xl shadow-lg border border-border/40 animate-float delay-200 hidden md:block z-20">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>

              <div className="absolute -top-14 left-[-15%] bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-pulse delay-500 hidden lg:block z-20">
                <ShieldCheck className="w-7 h-7 text-blue-500" />
              </div>
              <div className="absolute top-[15%] left-[-18%] bg-card p-3 rounded-xl shadow-lg border border-border/40 animate-float delay-100 hidden lg:block z-20">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute top-[40%] left-[-14%] bg-card p-3 rounded-xl shadow-lg border border-border/40 animate-bounce hidden md:block z-20">
                <Smartphone className="w-6 h-6 text-purple-500" />
              </div>
              <div className="absolute top-[80%] left-[-12%] bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-float hidden md:block z-20">
                <Database className="w-7 h-7 text-orange-500" />
              </div>

              <div className="absolute -bottom-20 left-[-5%] bg-card px-6 py-3 rounded-full shadow-xl border border-border/50 flex items-center gap-3 animate-float delay-700 z-30">
                <Globe className="w-5 h-5 text-accent" />
                <span className="font-semibold text-sm">Remote Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Students Trained", value: "500+", icon: Users },
              { label: "Success Rate", value: "95%", icon: Trophy },
              { label: "Active Mentors", value: "20+", icon: GraduationCap },
              { label: "Hiring Partners", value: "15+", icon: BriefcaseBig },
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Choose Your Track</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Our 3-month intensive bootcamp offers 14 specialized tracks designed to help you become a professional in your chosen field.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm sm:text-base rounded-full bg-primary/20 text-primary border-primary/30 font-semibold">
                  Standard: ₦20,000
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm sm:text-base rounded-full bg-yellow-400/20 text-yellow-600 border-yellow-400/30 font-semibold shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                  Scholarship: ₦15,000
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Frontend Development", icon: Code2 },
              { name: "Backend Development", icon: Database },
              { name: "UI/UX Design", icon: Palette },
              { name: "Product Management", icon: BriefcaseBig },
              { name: "Data Analysis", icon: BarChart3 },
              { name: "DevOps", icon: ShieldCheck },
              { name: "Virtual Assistance", icon: Headphones },
              { name: "Digital Marketing", icon: TrendingUp },
              { name: "Content / Video Editing", icon: Video },
              { name: "Quality Assurance (QA)", icon: CheckCircle2 },
              { name: "Mobile Development", icon: Smartphone },
              { name: "Cybersecurity", icon: Lock },
              { name: "No-Code Development", icon: Zap },
              { name: "Technical Writing", icon: PenTool },
              { name: "Artificial Intelligence", icon: Cpu },
              { name: "Cloud Computing", icon: Cloud },
              { name: "Blockchain Development", icon: LinkIcon },
              { name: "Game Development", icon: Gamepad2 },
              { name: "Data Science", icon: CodeXml },
              { name: "Graphics Design", icon: Layout },
              { name: "Social Media Management", icon: Megaphone },
              { name: "Database Administration", icon: Server },
            ].map((track, i) => (
              <Card key={i} className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <track.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base leading-tight">
                    {track.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg">
              <Link href="/programs#bootcamp">
                Explore Full Curriculum
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Your Journey to Career Excellence</h2>
            <p className="text-lg text-muted-foreground">
              A clear roadmap from complete beginner to world-class professional.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply & Screen",
                desc: "Choose your track and complete our basic logic assessment for scholarships.",
                icon: PenTool
              },
              {
                step: "02",
                title: "Enroll & Board",
                desc: "Secure your spot, get your tools ready, and join the community discord.",
                icon: Zap
              },
              {
                step: "03",
                title: "Learn & Build",
                desc: "3 months of intensive, project-based learning with dedicated mentorship.",
                icon: Code2
              },
              {
                step: "04",
                title: "Graduate & Hire",
                desc: "Get certified, build your portfolio, and access our job placement pipeline.",
                icon: Trophy
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                <div className="text-5xl font-black text-primary/10 absolute top-4 right-8 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-24 bg-[#0f1117] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold">Merit Scholarship</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Don't Let Funding Stop Your <span className="text-yellow-400">Ambition.</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                We believe talent is universal, but opportunity is not.
                Pass our logic assessment to qualify for a subsidized tuition fee of
                <span className="text-white font-bold"> ₦15,000</span> instead of the standard ₦20,000.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 font-bold">1</div>
                  <span className="text-gray-300">Apply for the program</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 font-bold">2</div>
                  <span className="text-gray-300">Take the online aptitude test</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 font-bold">3</div>
                  <span className="text-gray-300">Get verified and save on tuition</span>
                </li>
              </ul>

              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold h-14 px-8 rounded-full">
                <Link href="/scholarship">
                  Learn About Scholarships
                </Link>
              </Button>
            </div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-primary/20 blur-2xl rounded-full" />
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Scholarship Success</h4>
                      <p className="text-sm text-gray-400">Join 100+ scholars</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-yellow-400 w-[75%]" />
                    </div>
                    <p className="text-xs text-right text-gray-500">75% of applicants pass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Upcoming Academic Schedule</h2>
            <p className="text-muted-foreground text-lg">Mark your calendars for our upcoming learning milestones.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  date: "Feb 10, 2025",
                  event: "Cohort 2 Kickoff",
                  status: "Admissions Open",
                  desc: "Start of our immersive 3-month intensive digital bootcamp. Applications close Feb 24.",
                  type: "Active",
                  color: "primary"
                },
                {
                  date: "May 2025",
                  event: "Short Courses Launch",
                  status: "Coming Soon",
                  desc: "Intensive 4-week weekend programs for specific technical skill upgrades.",
                  type: "Future",
                  color: "accent"
                },
                {
                  date: "Jun 2025",
                  event: "Kids & Teens Summer Bootcamp",
                  status: "Planning Stage",
                  desc: "Fun and educational tech modules for aged 10-18 during summer break.",
                  type: "Future",
                  color: "secondary"
                },
                {
                  date: "Aug 2025",
                  event: "Cohort 3 Enrollment",
                  status: "Waiting List",
                  desc: "Application opens for our penultimate cohort of the year.",
                  type: "Future",
                  color: "primary"
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-card border border-border/50 hover:bg-card/80 transition-all items-center">
                  <div className="flex-none w-full md:w-40 text-center md:text-left">
                    <div className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{item.date}</div>
                    <Badge
                      variant={item.type === "Active" ? "default" : "outline"}
                      className={`rounded-full ${item.type === "Active" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : ""}`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="flex-none">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Remind Me <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our programs.</p>
          </div>

          <div className="grid gap-4">
            {[
              { q: "Is coding experience required?", a: "No! Most of our tracks are designed for absolute beginners. We start from the basics and guide you through to advanced concepts." },
              { q: "Can I pay in installments?", a: "Yes, we offer flexible payment plans for the standard fee. However, the scholarship fee is usually paid in full to secure the discount." },
              { q: "What do I need to start?", a: "A functional laptop, a stable internet connection, and a passion for learning. We'll provide the curriculum, mentors, and community." },
              { q: "Is the certificate recognized?", a: "Yes, candidates who complete all projects and pass the final exam receive a SYTYAT & Bivy Tech certified certificate recognized by our hiring partners." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                  <span className="text-primary font-mono">Q.</span> {faq.q}
                </h3>
                <p className="text-muted-foreground pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Your Career Starts <span className="text-primary">Now.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join a community of builders, dreamers, and doers.
            </p>
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

