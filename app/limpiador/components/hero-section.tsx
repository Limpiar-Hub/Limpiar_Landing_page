"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    title: "GET READY TO UNLOCK NEW OPPORTUNITIES",
    image: "/hero-image.png",
    alt: "Cleaning professionals in Limpiar uniforms",
  },
  {
    title: "JOIN OUR NETWORK OF CLEANING EXPERTS",
    image: "/join-limpiar.png",
    alt: "Professional cleaning equipment",
  },
  {
    title: "GROW YOUR BUSINESS WITH LIMPIAR",
    image: "/grow-your-business.png",
    alt: "Happy cleaning professionals",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Image Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentSlide].image || "/placeholder.svg"}
                alt={heroSlides[currentSlide].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
            <a
              href="https://cleaning-business.limpiar.online/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#4834D4] hover:bg-[#3A2BBF] text-lg px-8">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}