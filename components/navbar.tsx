"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isCommerceSpacesOpen, setIsCommerceSpacesOpen] = useState(false)
  const [isLimpiadorOpen, setIsLimpiadorOpen] = useState(false)
  const [isMobileLimpiadorOpen, setIsMobileLimpiadorOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const closeSheet = () => setIsSheetOpen(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const pdfs = [
    { name: "Onboarding Documentation", path: "/Onboarding.pdf" },
    { name: "Limpiar Checklist", path: "/Checklist.pdf" },
    { name: "Limpiador FAQs", path: "/FAQs.pdf" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-opacity-90" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
          <Image
  src="/limp23.png"
  alt="Limpiar Logo"
  width={200}
  height={60}
  className="h-20 w-auto object-contain"
/>

          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {/* Commerce Spaces */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCommerceSpacesOpen(true)}
              onMouseLeave={() => setIsCommerceSpacesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link href="/commerce-spaces" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Commerce Spaces
                </Link>
                <svg
                  className={`w-4 h-4 transition-transform ${isCommerceSpacesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Start Here
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Limpiador with PDF Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLimpiadorOpen(true)}
              onMouseLeave={() => setIsLimpiadorOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link href="/limpiador" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Limpiador
                </Link>
                <svg
                  className={`w-4 h-4 transition-transform ${isLimpiadorOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <AnimatePresence>
                {isLimpiadorOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    {pdfs.map((pdf, index) => (
                      <a
                        key={index}
                        href={pdf.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {pdf.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/waste-management" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Waste Management
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/social-impact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Social Impact
            </Link>
            <Link href="https://blog.limpiar.online/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Blog
            </Link>
          </nav>

          {/* Get Started Button */}
          <a
            href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            Get Started
          </a>

          {/* Mobile Sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/commerce-spaces" onClick={closeSheet} className="text-lg text-gray-700 hover:text-blue-600">
                  Commerce Spaces
                </Link>
                <a
                  href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeSheet}
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  Get Started
                </a>

                {/* Mobile Limpiador with PDF dropdown */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsMobileLimpiadorOpen(!isMobileLimpiadorOpen)}
                    className="flex items-center justify-between text-lg font-medium text-gray-700 hover:text-blue-600"
                  >
                    Limpiador
                    <svg
                      className={`w-4 h-4 transition-transform ${isMobileLimpiadorOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isMobileLimpiadorOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 flex flex-col space-y-2"
                      >
                        <Link href="/limpiador" onClick={closeSheet} className="text-base text-gray-600 hover:text-blue-600">
                          Go to Limpiador
                        </Link>
                        {pdfs.map((pdf, index) => (
                          <a
                            key={index}
                            href={pdf.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeSheet}
                            className="text-base text-gray-600 hover:text-blue-600"
                          >
                            {pdf.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/waste-management" onClick={closeSheet} className="text-lg text-gray-700 hover:text-blue-600">
                  Waste Management
                </Link>
                <Link href="/about" onClick={closeSheet} className="text-lg text-gray-700 hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/social-impact" onClick={closeSheet} className="text-lg text-gray-700 hover:text-blue-600">
                  Social Impact
                </Link>
                <Link
                  href="https://blog.limpiar.online/"
                  onClick={closeSheet}
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
