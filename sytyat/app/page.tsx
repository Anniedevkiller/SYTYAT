import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Rocket,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Calendar,
  Briefcase,
  Star,
  Heart,
} from "lucide-react"

const keyPoints = [
  { icon: Users, text: "Beginner-Friendly" },
  { icon: Star, text: "Affordable Programs" },
  { icon: GraduationCap, text: "Scholarships Available" },
  { icon: BookOpen, text: "Practical + Hands-on" },
  { icon: Heart, text: "Mentorship & Support" },
  { icon: Briefcase, text: "Career Pipeline" },
]

const yearlyCalendar = [
  { month: "January", activity: "Admissions open", color: "bg-primary" },
  { month: "Feb - Apr", activity: "Bootcamp (Cohort 2)", color: "bg-accent" },
  { month: "May", activity: "Short courses", color: "bg-secondary" },
  { month: "Jun - Jul", activity: "Kids & Teens", color: "bg-chart-4" },
  { month: "Aug - Oct", activity: "Bootcamp (Cohort 3)", color: "bg-accent" },
  { month: "November", activity: "Short courses", color: "bg-secondary" },
  { month: "December", activity: "Graduation & events", color: "bg-primary" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium">
                Bivy Tech Education Program
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fadeInUp text-balance leading-tight">
              Start Your Tech Career With <span className="text-primary">SYTYAT</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 animate-fadeInUp max-w-3xl mx-auto leading-relaxed">
              Affordable, beginner-friendly tech programs designed to help you learn real skills and join the global
              tech ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 py-6 group animate-pulse-glow"
              >
                <Link href="/apply" className="flex items-center">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About SYTYAT Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About SYTYAT</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SYTYAT ({'"'}So You Think You Are a Techie?{'"'}) is the education and talent development arm of Bivy
              Space. We train beginners, students, graduates, and young professionals in digital and creative skills —
              and connect them to internships, jobs, and real opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive programs designed to launch your tech career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Bootcamp Card */}
            <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">3-Month Tech Bootcamp</CardTitle>
                <CardDescription>February – April 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">₦20,000</span>
                  <Badge variant="secondary">₦15,000 scholarship</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  11 specialization tracks for beginners and career switchers
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                  <Link href="/programs#bootcamp" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Short Courses Card */}
            <Card className="border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Short Courses</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Coming Soon</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-accent">₦10,000</span>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Flat price</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fast, practical programs to build a single skill quickly
                </p>
                <Button
                  disabled
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent opacity-50 cursor-not-allowed"
                >
                  <span className="flex items-center">
                    Coming Soon
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* Kids & Teens Card */}
            <Card className="border-secondary/30 hover:border-secondary/50 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="p-3 bg-secondary/20 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Kids & Teens Tech</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">Coming Soon</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-foreground">₦20,000</span>
                </div>
                <p className="text-sm text-muted-foreground">Ages 10-18: Creative, fun tech learning for young minds</p>
                <Button disabled className="w-full bg-muted text-muted-foreground opacity-50 cursor-not-allowed">
                  <span className="flex items-center">
                    Coming Soon
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Notice */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Bootcamp Scholarships</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To get the scholarship price (₦15,000) for our intensive bootcamp, applicants must apply and pass
                    the SYTYAT scholarship exam. The exam is taken online. Only successful students receive the
                    discounted enrollment fee.
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                  <Link href="/apply">Apply for Scholarship</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Yearly Calendar */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Yearly Calendar</h2>
            </div>
            <p className="text-muted-foreground">Plan your tech journey with our program schedule</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {yearlyCalendar.map((item, index) => (
              <div
                key={index}
                className="relative p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${item.color}`} />
                <p className="font-bold text-lg mb-1">{item.month}</p>
                <p className="text-sm text-muted-foreground">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to start your tech journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Learning tech has never been this affordable, accessible, or practical. Choose a program and begin today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

