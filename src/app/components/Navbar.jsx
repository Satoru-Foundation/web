"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href:"/"},
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/ourwork" },
  { name: "Projects", href: "/projects" },
  { name: "MeeNestham", href: "/meenestham" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Media Centre", href: "/mediacentre" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Satoru Foundation Logo"
            width={6000}
            height={6000}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-[#5e6f46] font-semibold text-lg transition-colors duration-300 group-hover:text-[#ecc54f]"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ecc54f] group-hover:w-full transition-all duration-300"></span>
            </motion.div>
          ))}
          <Link
            href="https://rzp.io/rzp/rAIotl7h"
            className="ml-4 bg-[#ecc54f] text-[#5e6f46] px-6 py-2 font-bold rounded-lg border-2 border-[#ecc54f] hover:bg-[#5e6f46] hover:text-[#ecc54f] transition duration-300"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#5e6f46] hover:text-[#ecc54f]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner px-4 pb-6"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className="border-b border-gray-200 pb-2"
                >
                  <Link
                    href={item.href}
                    className="text-[#5e6f46] text-lg font-semibold hover:text-[#ecc54f] transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <li>
                <Link
                  href="https://rzp.io/rzp/rAIotl7h"
                  className="inline-block bg-[#ecc54f] text-[#5e6f46] w-full text-center px-4 py-2 mt-2 font-bold rounded-md border-2 border-[#ecc54f] hover:bg-[#5e6f46] hover:text-[#ecc54f] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
