import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Star,
  Users,
  BookOpen,
  Briefcase,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Heart,
  Globe,
  MessageCircle,
  Clock,
  Brain,
} from "lucide-react"

const whatMakesDifferent = [
  { icon: Star, text: "Affordable pricing for everyone" },
  { icon: Award, text: "Scholarship opportunities" },
  { icon: BookOpen, text: "Project-based learning" },
  { icon: Users, text: "Community + alumni network" },
  { icon: Briefcase, text: "Talent placement pipeline" },
  { icon: Globe, text: "Pathway into Bivy Tech companies" },
]

const whoCanJoin = [
  "Beginners entering tech",
  "Students & recent graduates",
  "NYSC members",
  "Teenagers (10–18)",
  "Career switchers",
  "Professionals seeking new skills",
]

const communityFeatures = [
  { icon: MessageCircle, text: "Discord community group" },
  { icon: Heart, text: "Dedicated mentorship" },
  { icon: Users, text: "Alumni network access" },
  { icon: BookOpen, text: "Study groups & peer learning" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      {/* Hero */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About SYTYAT</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {'"'}So You Think You Are a Techie?{'"'} — Bivy Space{"'"}s Tech Education & Talent Development Program
            empowering Africa{"'"}s next generation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic">
                    {'"'}To empower Africa{"'"}s next generation with digital skills, confidence, and opportunities to
                    thrive in a global tech economy.{'"'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Makes SYTYAT Different */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Makes SYTYAT Different</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatMakesDifferent.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Who Can Join?</h2>
            <p className="text-muted-foreground text-center mb-12">
              SYTYAT is open to everyone ready to start or advance their tech journey
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoCanJoin.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Requirements */}
      <section
        id="scholarship"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5 scroll-mt-24"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Scholarship Requirements</h2>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-lg text-muted-foreground text-center">
                  To qualify for the scholarship price (₦15,000), you must apply and pass the SYTYAT Scholarship Exam.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Brain className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Exam Content</p>
                      <p className="text-sm text-muted-foreground">Logic, digital literacy, and basic tech questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">30–45 minutes, taken online</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Globe className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Format</p>
                      <p className="text-sm text-muted-foreground">Completely online, take from anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Award className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Result</p>
                      <p className="text-sm text-muted-foreground">Passing score grants access to ₦15,000 fee</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/apply" className="flex items-center">
                      Apply for Scholarship Exam
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Community</h2>
            <p className="text-muted-foreground mb-12">
              Join a vibrant community of learners, mentors, and tech professionals
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {communityFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-accent/10">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Ready to Join SYTYAT?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards your tech career today. Apply now or explore our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
