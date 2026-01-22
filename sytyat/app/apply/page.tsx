"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import {
  Globe,
  Rocket,
  BookOpen,
  Users,
  ArrowRight,
  GraduationCap,
  CreditCard,
  FileText,
  CheckCircle2,
  Loader2,
  ChevronRight,
  MapPin,
  User,
  Phone,
  Mail,
  School,
} from "lucide-react"
import axios from "axios"

const programs = [
  {
    id: "bootcamp",
    title: "3-Month Tech Bootcamp",
    subtitle: "Cohort 2 — February 2025",
    icon: Rocket,
    color: "primary",
    regularPrice: 20000,
    scholarshipPrice: 15000,
    hasScholarship: true,
    description: "22 specialization tracks for beginners and career switchers",
    tracks: [
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "Product Management",
      "Data Analysis",
      "DevOps",
      "Virtual Assistance",
      "Digital Marketing",
      "Content / Video Editing",
      "Quality Assurance (QA)",
      "Mobile Development",
      "Cybersecurity",
      "No-Code Development",
      "Technical Writing",
      "Artificial Intelligence",
      "Cloud Computing",
      "Blockchain Development",
      "Game Development",
      "Data Science",
      "Graphics Design",
      "Social Media Management",
      "Database Administration",
    ],
  },
  {
    id: "shortcourse",
    title: "Short Courses",
    subtitle: "1 Month Duration",
    icon: BookOpen,
    color: "accent",
    regularPrice: 10000,
    scholarshipPrice: null,
    hasScholarship: false,
    description: "Fast, practical programs to build a single skill quickly",
    comingSoon: true,
    tracks: [
      "Build Your First Website",
      "UI/UX for Beginners",
      "Python Basics",
      "No-Code Website / App",
      "Digital Marketing",
      "Cybersecurity Basics",
      "Canva & Visual Design",
      "Soft Skills Development",
      "Corporate Upskilling",
    ],
  },
  {
    id: "kids",
    title: "Kids & Teens Tech",
    subtitle: "Ages 10–18 | June – July",
    icon: Users,
    color: "secondary",
    regularPrice: 20000,
    scholarshipPrice: null,
    hasScholarship: false,
    description: "Creative, fun tech learning for young minds",
    comingSoon: true,
    tracks: [
      "Coding for Kids",
      "Robotics",
      "3D & Game Creation",
      "Animation & Creativity",
      "Digital Skills for Teens",
    ],
  },
]

export default function ApplyPage() {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null)
  const [flowType, setFlowType] = useState<"apply" | "pay" | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const [countriesList, setCountriesList] = useState<{ name: string; iso2: string }[]>([])
  const [statesList, setStatesList] = useState<string[]>([])
  const [isStatesLoading, setIsStatesLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    location: "",
    education: "",
    track: "",
  })

  const selectedProgram = programs.find((p) => p.id === selectedProgramId)

  useEffect(() => {
    if (selectedProgramId && flowType && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedProgramId, flowType])

  useEffect(() => {
    // Fetch Countries
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries/iso")
        const formattedCountries = response.data.data.map((c: any) => ({
          name: c.name,
          iso2: c.Iso2
        })).sort((a: any, b: any) => a.name.localeCompare(b.name))
        setCountriesList(formattedCountries)
      } catch (error) {
        console.error("Error fetching countries:", error)
      }
    }
    fetchCountries()
  }, [])

  useEffect(() => {
    if (!formData.country) {
      setStatesList([])
      return
    }

    const fetchStates = async () => {
      setIsStatesLoading(true)
      try {
        const response = await axios.post("https://countriesnow.space/api/v0.1/countries/states", {
          country: formData.country
        })
        const states = response.data.data.states.map((s: any) => s.name).sort()
        setStatesList(states)
      } catch (error) {
        console.error("Error fetching states:", error)
        setStatesList([])
      } finally {
        setIsStatesLoading(false)
      }
    }
    fetchStates()
  }, [formData.country])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Validation for phone number to only allow numbers and + 
    if (name === "phone") {
      const filteredValue = value.replace(/[^\d+]/g, "")
      setFormData((prev) => ({ ...prev, [name]: filteredValue }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProgram || !flowType) return

    // Phone number validation (International format)
    // Basic international check: + plus optional digits, or just digits. Minimum 7 digits.
    const phoneRegex = /^(\+?\d{1,4})?\s?-?\d{6,14}$/
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      alert("Please enter a valid phone number with your country code.")
      return
    }

    setIsLoading(true)

    try {
      if (flowType === "apply") {
        // SCHOLARSHIP FLOW: Submit directly to Google Sheets
        await axios.post("/api/scholarship/submit", {
          ...formData,
          program: selectedProgram.title,
          flowType: "Scholarship Application"
        })
        // Redirect to a specific success page or handle success
        window.location.href = "/payments/success?type=scholarship"
      } else {
        // DIRECT PAYMENT FLOW: Initialize Paystack
        const amount = selectedProgram.regularPrice

        const metadata = {
          custom_fields: [
            { display_name: "Full Name", variable_name: "full_name", value: formData.fullName },
            { display_name: "Phone Number", variable_name: "phone", value: formData.phone },
            { display_name: "Gender", variable_name: "gender", value: formData.gender },
            { display_name: "Country", variable_name: "country", value: formData.country },
            { display_name: "Location", variable_name: "location", value: formData.location },
            { display_name: "Education", variable_name: "education", value: formData.education },
            { display_name: "Program", variable_name: "program", value: selectedProgram.title },
            { display_name: "Track", variable_name: "track", value: formData.track },
            { display_name: "Flow Type", variable_name: "flow_type", value: "Direct Payment" },
          ],
        }

        const response = await axios.post("/api/paystack/initialize", {
          email: formData.email,
          amount: amount,
          metadata: metadata,
        })

        if (response.data?.data?.authorization_url) {
          window.location.href = response.data.data.authorization_url
        } else {
          throw new Error("Failed to get payment URL")
        }
      }
    } catch (error: any) {
      console.error("Submission Error:", error)
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again."
      alert(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/20 text-primary">Secure Enrollment</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">Apply & Payment</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your program below. Apply first to access scholarship exams, or proceed directly to payment.
          </p>
        </div>
      </section>

      {/* Step 1: Choose Program */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
            <h2 className="text-2xl sm:text-3xl font-bold">Select Your Program</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => {
              const Icon = program.icon
              const isSelected = selectedProgramId === program.id

              return (
                <Card
                  key={program.id}
                  className={`transition-all duration-300 relative overflow-hidden group border-2 flex flex-col h-full ${isSelected
                    ? "border-primary shadow-2xl shadow-primary/10"
                    : "border-border hover:border-primary/30"
                    }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 p-3 bg-primary text-white rounded-bl-xl z-20">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${program.color === "primary" ? "bg-primary/10 text-primary" :
                      program.color === "accent" ? "bg-accent/10 text-accent" : "bg-secondary/20 text-secondary-foreground"
                      }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.id === "bootcamp" ? program.subtitle : <Badge className="bg-muted text-muted-foreground">Coming Soon</Badge>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground min-h-[40px]">{program.description}</p>

                    <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-muted-foreground">Standard Fee</span>
                        <span className="text-xl font-bold">₦{program.regularPrice.toLocaleString()}</span>
                      </div>
                      {program.hasScholarship && (
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-accent">Scholarship Fee</span>
                            <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-accent/20">PASS EXAM</Badge>
                          </div>
                          <span className="text-xl font-bold text-accent">₦{program.scholarshipPrice?.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-3 mt-auto">
                      {program.id === "bootcamp" ? (
                        <>
                          {program.hasScholarship && (
                            <Button
                              onClick={() => {
                                setSelectedProgramId(program.id)
                                setFlowType("apply")
                              }}
                              className={`w-full h-12 rounded-xl transition-all duration-300 ${isSelected && flowType === "apply"
                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                : "bg-white border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary"
                                }`}
                              variant={isSelected && flowType === "apply" ? "default" : "outline"}
                            >
                              <FileText className="mr-2 w-4 h-4" />
                              Apply for Scholarship
                            </Button>
                          )}
                          <Button
                            onClick={() => {
                              setSelectedProgramId(program.id)
                              setFlowType("pay")
                            }}
                            className={`w-full h-12 rounded-xl transition-all duration-300 ${isSelected && flowType === "pay"
                              ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                              : "bg-white border-2 border-border text-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            variant={isSelected && flowType === "pay" ? "default" : "outline"}
                          >
                            <CreditCard className="mr-2 w-4 h-4" />
                            Pay Standard Fee
                          </Button>
                        </>
                      ) : (
                        <Button
                          disabled
                          className="w-full h-12 rounded-xl bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
                        >
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Step 2: Form */}
      {selectedProgram && flowType && (
        <section ref={formRef} className="py-12 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl sm:text-3xl font-bold">Complete Your Details</h2>
            </div>

            <Card className="border-2 border-primary/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  You are {flowType === "apply" ? "applying for the scholarship" : "making direct payment"} for the
                  <span className="font-bold text-foreground"> {selectedProgram.title}</span>.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Full Name
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
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
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0801 234 5678"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Gender
                      </Label>
                      <Select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country" className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" /> Country
                      </Label>
                      <Select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        {countriesList.map((c) => (
                          <option key={c.iso2} value={c.name}>{c.name}</option>
                        ))}
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" /> State / Province
                      </Label>
                      {isStatesLoading ? (
                        <div className="flex items-center gap-2 h-10 px-3 rounded-md border border-input bg-background text-sm text-muted-foreground">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Loading states...
                        </div>
                      ) : statesList.length > 0 ? (
                        <Select
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                        >
                          <option value="">Select State / Province</option>
                          {statesList.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </Select>
                      ) : (
                        <Input
                          id="location"
                          name="location"
                          placeholder={formData.country ? "Enter State/City" : "Select a country first"}
                          required
                          disabled={!formData.country}
                          value={formData.location}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="education" className="flex items-center gap-2">
                        <School className="w-4 h-4 text-primary" /> Educational Level
                      </Label>
                      <Select
                        id="education"
                        name="education"
                        required
                        value={formData.education}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Level</option>
                        <option value="High School">High School (SSCE)</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Other">Other</option>
                      </Select>
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <Label htmlFor="track" className="text-lg font-bold flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      Choose Your {selectedProgramId === "bootcamp" ? "Learning Track" : "Specific Interest"}
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProgram.tracks.map((track) => (
                        <label
                          key={track}
                          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:bg-primary/5 ${formData.track === track
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                            : "border-border"
                            }`}
                        >
                          <input
                            type="radio"
                            name="track"
                            value={track}
                            className="mr-3 w-4 h-4 text-primary focus:ring-primary border-border"
                            required
                            checked={formData.track === track}
                            onChange={handleInputChange}
                          />
                          <span className={`${formData.track === track ? "font-bold text-primary" : "text-foreground"} text-sm`}>
                            {track}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-6 h-6 animate-spin mr-2" />
                      ) : (
                        <>
                          {flowType === "apply" ? "Submit Application" : "Proceed to Secure Payment"}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                      {flowType === "pay" && <CreditCard className="w-3 h-3" />}
                      {flowType === "pay" ? "All payments are securely processed by Paystack." : "Your application will be reviewed within 48 hours."}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Add any partner logos or trust symbols here if needed */}
        </div>
      </section>
    </div>
  )
}
