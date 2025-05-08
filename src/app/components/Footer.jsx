import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#5e6f47] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Left Section - Logo and Mission */}
          <div>
            <div className="mb-4 mt-17">
              <Image src="/footer.png" alt="Satoru Foundation Logo" width={225} height={225} />
              {/* <h2 className="mt-2 text-4xl font-bold tracking-wide text-white">SATORU</h2>
              <h2 className="mt-2 text-xl font-bold tracking-wide text-[#ecc750]">FOUNDATION</h2> */}
            </div>
            {/* <p className="text-white mb-6">
              “The main mission of the Satoru Foundation is to improve quality of life, overall health, and well-being among the marginalised communities in India”.
            </p> */}
            <Link href="https://rzp.io/rzp/rAIotl7h" className="inline-block bg-[#ecc750] text-[#1e2b26] font-semibold px-5 py-2 rounded-md hover:bg-yellow-400 transition-colors">
            DONATE NOW
            </Link>
          </div>

          {/* Links */}
          <div >
            <h3 className="text-lg font-bold mb-1">Links</h3>
            <div className="w-15 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <ul className="space-y-3 text-white">
              <li><Link href="/" className="hover:text-[#ecc750]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#ecc750]">About us</Link></li>
              <li><Link href="/ourwork" className="hover:text-[#ecc750]">Our Work</Link></li>
              <li><Link href="/meenestham" className="hover:text-[#ecc750]">MeeNestham</Link></li>
              <li><Link href="/getinvolved" className="hover:text-[#ecc750]">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-[#ecc750]">Contact</Link></li>
              <li><Link href="/termsandpolicy" className="hover:text-[#ecc750]">Terms and Policy</Link></li>
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-lg font-bold mb-1">Our Projects</h3>
            <div className="w-28 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <ul className="space-y-3 text-white">
              <li><Link href="/projects/madavi" className="hover:text-[#ecc750]">Madavi</Link></li>
              <li><Link href="/projects/gaman" className="hover:text-[#ecc750]">Gaman</Link></li>
              <li><Link href="/projects/active-india" className="hover:text-[#ecc750]">Active India</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-1">Contact</h3>
            <div className="w-18 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <p className="text-white mb-2">Model House building, Saibaba Temple Rd, Dwarakapuri,</p>
            <p className="text-white mb-2">Panjagutta, Hyderabad, Telangana, 500082</p>
            <div className="flex items-center text-white mb-2">
              <Mail className="h-4 w-4 mr-2 text-[#ecc750]" />
              <a href="mailto:info@satorufoundation.org" className="hover:text-[#ecc750]">info@satorufoundation.org</a>
            </div>
            <div className="flex items-center text-white mb-2">
            <Mail className="h-4 w-4 mr-2 text-[#ecc750]" />
            <a href="mailto:satorufoundation@gmail.com" className="hover:text-[#ecc750]">satorufoundation@gmail.com</a>
            </div>
            <div className="flex items-center text-white mb-6">
              <Phone className="h-4 w-4 mr-2 text-[#ecc750]" />
              <a href="tel:+916303637871" className="hover:text-[#ecc750]">+91 6303637871</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 hover:text-[#ecc750]" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5 hover:text-[#ecc750]" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="h-5 w-5 hover:text-[#ecc750]" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 hover:text-[#ecc750]" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-500/20 pt-6">
          <p className="text-center text-sm text-gray-400">
            © All Copyright {new Date().getFullYear()} Satoru Foundation | Designed By Samuel
          </p>
        </div>
      </div>
    </footer>
  )
}
