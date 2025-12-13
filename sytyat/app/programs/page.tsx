import Link from "next/link"
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
  Globe,
  Lock,
  PenTool,
  Zap,
  Heart,
  Building,
} from "lucide-react"

const bootcampTracks = [
  { icon: Code, name: "Frontend Development", color: "text-blue-600" },
  { icon: Code, name: "Backend Development", color: "text-emerald-600" },
  { icon: Palette, name: "UI/UX Design", color: "text-pink-600" },
  { icon: Briefcase, name: "Product Management", color: "text-violet-600" },
  { icon: BarChart, name: "Data Analysis", color: "text-amber-600" },
  { icon: Shield, name: "DevOps", color: "text-red-600" },
  { icon: Headphones, name: "Virtual Assistance & Tech Support", color: "text-cyan-600" },
  { icon: Video, name: "Content & Video Editing", color: "text-orange-600" },
  { icon: CheckCircle2, name: "Quality Assurance (QA)", color: "text-teal-600" },
  { icon: Smartphone, name: "Mobile Development", color: "text-indigo-600" },
  { icon: TrendingUp, name: "Sales & Digital Marketing", color: "text-lime-600" },
]

const shortCourses = [
  { name: "Build Your First Website", icon: Globe },
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
    <div className="min-h-screen pt-24 sm:pt-28">
      {/* Hero */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive tech education programs. From intensive bootcamps to quick skill courses, we
            have something for everyone.
          </p>
        </div>
      </section>

      {/* 3-Month Bootcamp */}
      <section id="bootcamp" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto">
          <Card className="border-primary/20 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">3-Month Intensive Tech Bootcamp</h2>
                    <Badge className="bg-primary text-primary-foreground">Cohort 2 — February 2025</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Perfect for beginners, career switchers, and anyone looking for hands-on, job-ready tech skills.
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Pricing */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <Star className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Regular Price</p>
                    <p className="text-2xl font-bold text-primary">₦20,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Scholarship Price</p>
                    <p className="text-2xl font-bold text-accent">₦15,000</p>
                    <p className="text-xs text-muted-foreground">Requires passing exam</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-lg font-bold">Feb – Apr 2025</p>
                    <p className="text-xs text-muted-foreground">3 months</p>
                  </div>
                </div>
              </div>

              {/* Tracks */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  11 Specialization Tracks
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {bootcampTracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    >
                      <track.icon className={`w-5 h-5 ${track.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium">{track.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  What You Get
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {bootcampBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  <Link href="https://forms.gle/9uMgmjMoqqz5nvtu7" className="flex items-center">
                    Apply for Bootcamp
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="https://paystack.com/buy/bootcamp-regular-fee-rfnmrk">Make Payment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Short Courses */}
      <section id="shortcourses" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto">
          <Card className="border-accent/20 overflow-hidden">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="p-4 bg-accent/10 rounded-2xl w-fit">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Short Courses</h2>
                    <Badge className="bg-accent text-accent-foreground">1 Month Duration</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Fast, practical programs to build a single skill quickly. Perfect for busy professionals and focused
                    learners.
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Pricing */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 w-fit">
                <Star className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Flat Price</p>
                  <p className="text-3xl font-bold text-accent">₦10,000</p>
                </div>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-xl font-bold mb-4">Available Short Courses</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {shortCourses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-accent/5 transition-all group"
                    >
                      <course.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Button asChild size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground group">
                  <Link href="/apply?program=shortcourse" className="flex items-center">
                    Register for Short Course
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Link href="/apply?program=shortcourse&action=pay">Make Payment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kids & Teens */}
      <section id="kids" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto">
          <Card className="border-secondary/30 overflow-hidden">
            <div className="bg-gradient-to-r from-secondary/20 to-accent/10 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="p-4 bg-secondary/20 rounded-2xl w-fit">
                  <Users className="w-10 h-10 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Kids & Teens Tech Program</h2>
                    <Badge variant="secondary">Ages 10–18</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Creative, fun, beginner-friendly tech learning designed for young minds. Summer program: June –
                    July.
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Pricing */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <Star className="w-6 h-6 text-secondary-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Regular Price</p>
                    <p className="text-2xl font-bold">₦20,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Scholarship Price</p>
                    <p className="text-2xl font-bold text-secondary-foreground">₦15,000</p>
                    <p className="text-xs text-muted-foreground">Requires passing exam</p>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h3 className="text-xl font-bold mb-4">Programs Include</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {kidsPrograms.map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-secondary/40 hover:bg-secondary/5 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship Note */}
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Scholarship only applies to kids who pass an online tech-aptitude exam. Apply
                  first to take the exam.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Button asChild size="lg" className="flex-1 bg-foreground hover:bg-foreground/90 text-background group">
                  <Link href="/apply?program=kids" className="flex items-center">
                    Apply for Kids Program
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                  <Link href="/apply?program=kids&action=pay">Make Payment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
