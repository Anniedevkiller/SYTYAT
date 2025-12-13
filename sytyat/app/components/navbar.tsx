"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, GraduationCap } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-background/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <GraduationCap className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">SYTYAT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <GraduationCap className="w-7 h-7 text-primary" />
                    <span className="font-bold text-lg">SYTYAT</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto p-6 border-t border-border space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-center bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/about">About</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-center bg-primary hover:bg-primary/90"
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
