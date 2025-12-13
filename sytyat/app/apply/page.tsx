"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  BookOpen,
  Users,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  CreditCard,
  FileText,
  CheckCircle2,
} from "lucide-react"

const programs = [
  {
    id: "bootcamp",
    title: "3-Month Tech Bootcamp",
    subtitle: "Cohort 2 — February 2025",
    icon: Rocket,
    color: "primary",
    regularPrice: "₦20,000",
    scholarshipPrice: "₦15,000",
    hasScholarship: true,
    description: "11 specialization tracks for beginners and career switchers",
    applyLink: "https://applylink/bootcamp",
    payLink: "https://paylink/bootcamp",
  },
  {
    id: "shortcourse",
    title: "Short Courses",
    subtitle: "1 Month Duration",
    icon: BookOpen,
    color: "accent",
    regularPrice: "₦10,000",
    scholarshipPrice: null,
    hasScholarship: false,
    description: "Fast, practical programs to build a single skill quickly",
    applyLink: "https://applylink/shortcourses",
    payLink: "https://paylink/shortcourses",
  },
  {
    id: "kids",
    title: "Kids & Teens Tech",
    subtitle: "Ages 10–18 | June – July",
    icon: Users,
    color: "secondary",
    regularPrice: "₦20,000",
    scholarshipPrice: "₦15,000",
    hasScholarship: true,
    description: "Creative, fun tech learning for young minds",
    applyLink: "https://applylink/kids",
    payLink: "https://paylink/kids",
  },
]

export default function ApplyPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      {/* Hero */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Apply & Payment</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your program below. Apply first to access scholarship exams, or proceed directly to payment.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Application vs Payment</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Apply First</p>
                        <p className="text-sm text-muted-foreground">
                          To take the scholarship exam and potentially pay ₦15,000 instead of ₦20,000
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CreditCard className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-semibold">Pay Directly</p>
                        <p className="text-sm text-muted-foreground">
                          If you want to pay the regular price immediately and skip the exam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Choose Your Program</h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => {
              const Icon = program.icon
              const isSelected = selectedProgram === program.id

              return (
                <Card
                  key={program.id}
                  className={`transition-all cursor-pointer ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/20 shadow-lg"
                      : "border-border hover:border-primary/30 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3 rounded-xl ${
                          program.color === "primary"
                            ? "bg-primary/10"
                            : program.color === "accent"
                              ? "bg-accent/10"
                              : "bg-secondary/20"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 ${
                            program.color === "primary"
                              ? "text-primary"
                              : program.color === "accent"
                                ? "text-accent"
                                : "text-secondary-foreground"
                          }`}
                        />
                      </div>
                      {isSelected && <CheckCircle2 className="w-6 h-6 text-primary" />}
                    </div>
                    <CardTitle className="text-xl mt-4">{program.title}</CardTitle>
                    <CardDescription>{program.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{program.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Regular Price:</span>
                        <span className="font-bold text-lg">{program.regularPrice}</span>
                      </div>
                      {program.hasScholarship && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Scholarship:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg text-accent">{program.scholarshipPrice}</span>
                            <Badge variant="secondary" className="text-xs">
                              Exam required
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 pt-4 border-t border-border">
                      <Button
                        asChild
                        className={`w-full group ${
                          program.color === "primary"
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : program.color === "accent"
                              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                              : "bg-foreground hover:bg-foreground/90 text-background"
                        }`}
                      >
                        <a href={program.applyLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Apply Now
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <a href={program.payLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Make Payment
                          <CreditCard className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Scholarship Exam Info */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="border-accent/20">
              <CardHeader className="text-center">
                <div className="inline-flex mx-auto p-3 bg-accent/10 rounded-xl mb-4">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">About the Scholarship Exam</CardTitle>
                <CardDescription>Pass the exam to unlock discounted pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">Who can take it?</p>
                    <p className="text-sm text-muted-foreground">Applicants for Bootcamp and Kids & Teens programs</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">What{"'"}s covered?</p>
                    <p className="text-sm text-muted-foreground">Logic, digital literacy, and basic tech questions</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">How long?</p>
                    <p className="text-sm text-muted-foreground">30–45 minutes, completely online</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">What do I get?</p>
                    <p className="text-sm text-muted-foreground">Pass to unlock ₦15,000 scholarship pricing</p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground pt-4">
                  Note: Short courses (₦10,000) do not require a scholarship exam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Need Help Deciding?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out our programs page for detailed information about each track, or visit the about page to learn more
            about SYTYAT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/programs" className="flex items-center">
                View All Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about" className="flex items-center">
                Learn About SYTYAT
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
