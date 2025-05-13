"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about",
    subItems: [{ name: "Our Team", href: "/about/ourteam" }]},
  {
    name: "Our Work",
    href: "/ourwork",
    subItems: [{ name: "Projects", href: "/projects" }],
  },
  { name: "MeeNestham", href: "/meenestham" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Contact Us", 
    href: "/contact" ,
    subItems: [{ name: "Media Centre", href: "/mediacentre" }]
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null);

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
          {navItems.map((item, index) =>
            item.subItems ? (
              <div key={index} className="relative group inline-block">
                <motion.div
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#5e6f47] font-semibold text-lg transition-colors duration-300 group-hover:text-[#ecc750] relative z-10"
                  >
                    {item.name}
                  </Link>
                </motion.div>
            
                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[10rem] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <motion.div
                      key={subIndex}
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={subItem.href}
                        className="flex items-center justify-center h-12 w-full text-[#5e6f47] font-semibold text-lg transition-colors duration-300 hover:text-[#ecc750] text-center"
                      >
                        {subItem.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : (
              <motion.div
                key={index}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-[#5e6f47] font-semibold text-lg transition-colors duration-300 group-hover:text-[#ecc750]"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ecc750] group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            )
          )}
        
          <Link
            href="https://rzp.io/rzp/rAIotl7h"
            className="ml-4 bg-[#ecc750] text-[#5e6f47] px-6 py-2 font-bold rounded-lg border-2 border-[#ecc750] hover:bg-[#5e6f47] hover:text-[#ecc750] transition duration-300"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#5e6f47] hover:text-[#ecc750]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white shadow-inner px-4 pb-6"
    >
      <ul className="flex flex-col">
  {navItems.map((item, index) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isDropdownOpen = openDropdown === item.name;
    const toggleDropdown = () =>
      setOpenDropdown(isDropdownOpen ? null : item.name);

    return (
      <li key={index} className="border-b border-gray-200 py-2">
        <div className="flex justify-between items-center">
          <Link
            href={item.href}
            className="text-[#5e6f47] text-lg font-semibold hover:text-[#ecc750] transition"
            onClick={() => {
              if (!hasSubItems) setIsMenuOpen(false);
            }}
          >
            {item.name}
          </Link>
          {hasSubItems && (
            <button
              onClick={toggleDropdown}
              className="text-[#5e6f47] text-lg px-2 focus:outline-none"
            >
              {isDropdownOpen ? "−" : "+"}
            </button>
          )}
        </div>

        {hasSubItems && isDropdownOpen && (
          <ul className="mt-2 ml-4 space-y-2">
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link
                  href={subItem.href}
                  className="text-[#5e6f47] text-base hover:text-[#ecc750] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  })}

  <li className="mt-4">
    <Link
      href="https://rzp.io/rzp/rAIotl7h"
      className="inline-block bg-[#ecc750] text-[#5e6f47] w-full text-center px-4 py-2 font-bold rounded-md border-2 border-[#ecc750] hover:bg-[#5e6f47] hover:text-[#ecc750] transition"
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
