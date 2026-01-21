"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/programs",
    label: "Programs",
    dropdown: [
      { href: "/programs#bootcamp", label: "Tech Bootcamp" },
      { href: "/programs#shortcourses", label: "Short Courses", comingSoon: true },
      { href: "/programs#kids", label: "Kids & Teens", comingSoon: true },
    ],
  },
  { href: "/scholarship", label: "Scholarships" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-background/90 backdrop-blur-sm border-b border-border/50"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/logo.png"
              alt="SYTYAT Logo"
              width={200}
              height={60}
              className="h-14 w-auto object-contain transform translate-y-1"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              link.dropdown ? (
                isMounted ? (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group outline-none cursor-pointer">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48 bg-background border-border">
                      {link.dropdown.map((sublink) => (
                        <DropdownMenuItem key={sublink.href} asChild>
                          <Link
                            href={sublink.href}
                            className="w-full cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-between gap-2"
                          >
                            <span>{sublink.label}</span>
                            {sublink.comingSoon && (
                              <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4 bg-muted text-muted-foreground font-normal">
                                Soon
                              </Badge>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <div className="border-t border-border mt-1 pt-1">
                        <DropdownMenuItem asChild>
                          <Link href="/programs" className="w-full font-semibold cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors">
                            View All Programs
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button key={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground flex items-center gap-1">
                    {link.label} <ChevronDown className="w-4 h-4" />
                  </button>
                )
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="text-sm font-medium bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95">
              <Link href="/apply">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-secondary transition-colors">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 !bg-white !opacity-100">
                <div className="flex flex-col h-full bg-white opacity-100">
                  <div className="flex items-center justify-between px-6 py-6 border-b border-border bg-white opacity-100">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/logo.png"
                        alt="SYTYAT Logo"
                        width={140}
                        height={45}
                        className="h-9 w-auto object-contain transform translate-y-1"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 p-6 overflow-y-auto">
                    <div className="text-xs font-bold text-primary/50 uppercase tracking-wider mb-2 px-4">Menu</div>
                    {navLinks.map((link) => (
                      <div key={link.href} className="flex flex-col">
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-3 text-lg font-semibold text-foreground hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-200 flex items-center justify-between group"
                        >
                          {link.label}
                          {link.dropdown && <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />}
                        </Link>
                        {link.dropdown && (
                          <div className="ml-6 border-l-2 border-primary/10 pl-4 flex flex-col gap-1 mt-1 mb-2">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="px-3 py-2 text-base text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5 flex items-center justify-between"
                              >
                                <span>{subItem.label}</span>
                                {subItem.comingSoon && (
                                  <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4 bg-muted text-muted-foreground font-normal">
                                    Soon
                                  </Badge>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto p-6 border-t border-border bg-muted/30 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-center bg-white border-border hover:bg-white hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/about">About Us</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full justify-center bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/apply">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
