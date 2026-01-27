import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="SYTYAT Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              So You Think You Are a Techie? Bivy Tech Education & Talent Development Program.
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
                  Short Courses (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/programs#kids" className="hover:text-background transition-colors">
                  Kids & Teens Tech (Coming Soon)
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
                <Link href="/scholarship" className="hover:text-background transition-colors">
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
                <span>admissions@sytyat.bivytech.space</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 810 468 0342</span>
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
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
