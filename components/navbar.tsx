"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isCommerceSpacesOpen, setIsCommerceSpacesOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMobileMenuOpen])

  // Navigation items
  const menuItems = [
    { href: "/limpiador", label: "Limpiador" },
    { href: "/waste-management", label: "Waste Management" },
    { href: "/about", label: "About Us" },
    { href: "/social-impact", label: "Social Impact" },
    { href: "https://blog.limpiar.online/", label: "Blog", external: true },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-md ${
        scrolling ? "bg-white/70 shadow-md" : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Limpiar Logo" width={140} height={40} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Commerce Spaces Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCommerceSpacesOpen(true)}
              onMouseLeave={() => setIsCommerceSpacesOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <Link
                  href="/commerce-spaces"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Commerce Spaces
                </Link>
                <motion.svg
                  className="w-4 h-4 transition-transform"
                  animate={{ rotate: isCommerceSpacesOpen ? 180 : 0 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>

              <AnimatePresence>
                {isCommerceSpacesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    <Link
                      href="/start-here"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Start Here
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Menu Items */}
            {menuItems.map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : ""}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Get Started
          </a>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: 0, scale: 1 }}
              animate={isMobileMenuOpen ? { rotate: 180, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 md:hidden bg-white/80 backdrop-blur-md flex flex-col w-full h-full px-6 pt-6"
            >
              {/* Close Button & Logo */}
              <div className="flex items-center justify-between w-full">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/logo.png" alt="Limpiar Logo" width={140} height={40} />
                </Link>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                  ✕
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6 text-center w-full mt-10">
                {[{ href: "/commerce-spaces", label: "Commerce Spaces" }, ...menuItems].map(({ href, label, external }) => (
                  <motion.div key={href} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={href}
                      target={external ? "_blank" : "_self"}
                      rel={external ? "noopener noreferrer" : ""}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-xl font-medium text-gray-700 hover:bg-gray-100 py-3 transition rounded-lg"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Get Started Button */}
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }} className="flex justify-center mt-4">
                <a href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
