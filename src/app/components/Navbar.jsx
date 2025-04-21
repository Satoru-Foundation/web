"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Satoru Foundation Logo" width={6000} height={6000} className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-auto">
          <Link href="/about" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            About Us
          </Link>
          <Link href="/ourwork" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Our Work
          </Link>
          <Link href="/projects" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Projects
          </Link>
          <Link href="/activities" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Activities
          </Link>
          <Link href="/meenestham" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            MeeNestham
          </Link>
          <Link href="/getinvolved" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Get Involved
          </Link>
          <Link href="/mediacentre" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Media Centre
          </Link>
          <Link href="/contact" className="relative text-[#5e6f46] font-bold text-xl 
             hover:text-[#ecc54f]
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 hover:after:w-full after:h-[2px] 
             after:bg-[#5e6f46] after:transition-all after:duration-300">
            Contact Us
          </Link>
          <div>
    <Link
      href="https://rzp.io/rzp/rAIotl7h"
      className="text-[#5e6f46] bg-[#ecc54f] text-xl font-extrabold px-8 py-4 rounded-lg
             border-2 border-[#ecc54f]
             transition-all duration-300 ease-in-out
             hover:bg-[#5e6f46] hover:text-[#ecc54f]"
    >
      Donate
    </Link>
  </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/about"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/programs"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="https://rzp.io/rzp/rAIotl7h"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>
            <Link
              href="/contact"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Media Centre
            </Link>
            <Link
              href="/contact"
              className="text-[#5e6f46] hover:text-[#ecc54f] font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
