import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#5e6f46] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Left Section - Logo and Mission */}
          <div>
            <div className="mb-4">
              <Image src="/footer.png" alt="Satoru Foundation Logo" width={225} height={225} />
              {/* <h2 className="mt-2 text-4xl font-bold tracking-wide text-white">SATORU</h2>
              <h2 className="mt-2 text-xl font-bold tracking-wide text-[#ecc54f]">FOUNDATION</h2> */}
            </div>
            <p className="text-white mb-6">
              “The main mission of the Satoru Foundation is to improve quality of life, overall health, and well-being among the marginalised communities in India”.
            </p>
            <Link href="/donate" className="inline-block bg-[#ecc54f] text-[#1e2b26] font-semibold px-5 py-2 rounded-md hover:bg-yellow-400 transition-colors">
            DONATE NOW
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-1">Links</h3>
            <div className="w-55 h-1 bg-[#ecc54f] mb-4 rounded"></div>
            <div className="flex gap-12">
              <ul className="space-y-3 text-white text-center">
                <li><Link href="/" className="hover:text-[#ecc54f]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#ecc54f]">About us</Link></li>
                <li><Link href="/ourwork" className="hover:text-[#ecc54f]">Our Work</Link></li>
                <li><Link href="/projects" className="hover:text-[#ecc54f]">Projects</Link></li>
                <li><Link href="/activities" className="hover:text-[#ecc54f]">Activities</Link></li>
              </ul>
              <ul className="space-y-3 text-white text-center">
                <li><Link href="/meenestham" className="hover:text-[#ecc54f]">MeeNestham</Link></li>
                <li><Link href="/getinvolved" className="hover:text-[#ecc54f]">Get Involved</Link></li>
                <li><Link href="/mediacentre" className="hover:text-[#ecc54f]">Media</Link></li>
                <li><Link href="/contact" className="hover:text-[#ecc54f]">Contact</Link></li>
              </ul>
            </div>
          </div>



          {/* Our Projects */}
          <div>
            <h3 className="text-lg font-bold mb-1">Our Projects</h3>
            <div className="w-28 h-1 bg-[#ecc54f] mb-4 rounded"></div>
            <ul className="space-y-3 text-white">
              <li><Link href="/projects/madavi" className="hover:text-[#ecc54f]">Madavi</Link></li>
              <li><Link href="/projects/gaman" className="hover:text-[#ecc54f]">Gaman</Link></li>
              <li><Link href="/projects/active-india" className="hover:text-[#ecc54f]">Active India</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-1">Contact</h3>
            <div className="w-18 h-1 bg-[#ecc54f] mb-4 rounded"></div>
            <p className="text-white mb-2">Model House building, Saibaba Temple Rd, Dwarakapuri,</p>
            <p className="text-white mb-2">Panjagutta, Hyderabad, Telangana, 500082</p>
            <div className="flex items-center text-white mb-2">
              <Mail className="h-4 w-4 mr-2 text-[#ecc54f]" />
              <a href="mailto:info@satorufoundation.org" className="hover:text-[#ecc54f]">info@satorufoundation.org</a>
            </div>
            <div className="flex items-center text-white mb-6">
              <Phone className="h-4 w-4 mr-2 text-[#ecc54f]" />
              <a href="tel:+916303637871" className="hover:text-[#ecc54f]">+91 6303637871</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 hover:text-[#ecc54f]" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5 hover:text-[#ecc54f]" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="h-5 w-5 hover:text-[#ecc54f]" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5 hover:text-[#ecc54f]" /></a>
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
