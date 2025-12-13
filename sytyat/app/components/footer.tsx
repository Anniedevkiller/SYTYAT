import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-background/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-background" />
              </div>
              <span className="text-lg font-bold">SYTYAT</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              So You Think You Are a Techie? Bivy Space{"'"}s Tech Education & Talent Development Program.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/programs#bootcamp" className="hover:text-background transition-colors">
                  3-Month Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs#shortcourses" className="hover:text-background transition-colors">
                  Short Courses
                </Link>
              </li>
              <li>
                <Link href="/programs#kids" className="hover:text-background transition-colors">
                  Kids & Teens Tech
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-background transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/about#scholarship" className="hover:text-background transition-colors">
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>bivylightspace@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 707 409 4990</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} SYTYAT by Bivy Space. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
