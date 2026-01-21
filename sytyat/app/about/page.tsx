import Link from "next/link"
import Image from "next/image"
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
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react"

const coreValues = [
  {
    icon: Target,
    title: "Result Oriented",
    description: "We focus on practical outcomes that lead directly to career growth and technical proficiency.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Zap,
    title: "Fast-Paced Excellence",
    description: "Our intensive curriculum is designed to transform you from beginner to proficient in record time.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Bivy Verified",
    description: "Backed by the Bivy Tech ecosystem, ensuring your education meets global industry standards.",
    color: "bg-green-500/10 text-green-500",
  },
]

const whatMakesDifferent = [
  { icon: Star, text: "Affordable pricing for everyone", desc: "Premium education without the premium price tag." },
  { icon: Award, text: "Scholarship opportunities", desc: "Merit-based financial support for high achievers." },
  { icon: BookOpen, text: "Project-based learning", desc: "Build real-world portfolios while you learn." },
  { icon: Users, text: "Community + alumni network", desc: "Connect with thousands of peers across Africa." },
  { icon: Briefcase, text: "Talent placement pipeline", desc: "Direct path to job opportunities post-bootcamp." },
  { icon: Globe, text: "Bivy Tech Ecosystem", desc: "Access to internship pathways into Bivy subsidiaries." },
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
  { icon: MessageCircle, text: "Discord Community", desc: "24/7 access to peers and mentors." },
  { icon: Heart, text: "Dedicated Mentorship", desc: "1-on-1 guidance from industry experts." },
  { icon: Users, text: "Alumni Network", desc: "Exclusive access to hiring events and referrals." },
  { icon: BookOpen, text: "Peer Learning", desc: "Collaborate on projects and share knowledge." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Our Vision for Africa
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              Empowering Africa Through <span className="text-primary italic">Digital Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
              {"\""}So You Think You Are a Techie?{"\""} — We are building the talent development pipeline that fuels Africa{"'"}s next generation of innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/about-mission.png"
                  alt="Students collaborating"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block p-4 bg-primary/10 rounded-2xl">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                {"\""}To empower Africa{"'"}s next generation with digital skills, confidence, and opportunities to thrive in a global tech economy.{"\""}
              </p>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SYTYAT (So You Think You Are a Techie?) is more than just a training program. It is a movement under Bivy Tech designed to bridge the gap between education and employability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm font-medium">
                    <Rocket className="w-4 h-4 text-primary" /> Founded in 2024
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm font-medium">
                    <Globe className="w-4 h-4 text-primary" /> Pan-African Focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Pillars of SYTYAT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our approach is built on three core pillars that ensure every student graduates with industry-ready skills.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="relative overflow-hidden group hover:border-primary/50 transition-colors border border-border">
                <CardContent className="p-8 pt-10">
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Us Different?</h2>
            <p className="text-muted-foreground text-lg italic">
              Experience a training program built for the modern tech professional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatMakesDifferent.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-[2.5rem] bg-background border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group"
              >
                <div className="p-4 rounded-3xl bg-primary/10 inline-block mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.text}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section id="scholarship" className="py-24 px-4 scroll-mt-24">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[3rem] overflow-hidden text-primary-foreground relative p-8 sm:p-20 group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <GraduationCap className="w-64 h-64" />
            </div>

            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl sm:text-6xl font-bold mb-8">Ready to Prove<br /> Your Potential?</h2>
              <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-12">
                We believe financial barriers shouldn{"'"}t stop extraordinary talent. Pass the SYTYAT Scholarship Exam and unlock your tech future for just ₦15,000.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                  <Brain className="w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="font-bold">Logic & IQ</h4>
                    <p className="text-sm text-primary-foreground/60">Digital literacy focused</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                  <Clock className="w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="font-bold">30–45 Mins</h4>
                    <p className="text-sm text-primary-foreground/60">Standard online exam</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-16 px-10 rounded-2xl text-lg font-bold">
                <Link href="/apply">
                  Take Scholarship Exam <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-4xl font-bold">Join Africa{"'"}s Most Vibrant Tech Community</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learning is better together. At SYTYAT, you aren{"'"}t just a student; you are a member of a growing family of over 5,000 tech enthusiasts.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {communityFeatures.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg">{item.text}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/about-community.png"
                    alt="Community learning"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 relative overflow-hidden text-center">
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl sm:text-7xl font-bold mb-8">Your Journey Starts Here</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of students building their dream tech careers with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold">
              <Link href="/apply">Apply for Next Cohort</Link>
            </Button>
            <Link href="/programs" className="text-foreground font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Explore Tracks <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
