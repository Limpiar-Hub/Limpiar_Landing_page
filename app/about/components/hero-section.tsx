"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Redefining Clean. <br /> Transforming Spaces.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Limpiar —where innovation meets sustainability.  
              We’re not just cleaning spaces; we’re creating healthier environments with  
              eco-conscious solutions that benefit both people and the planet.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built by industry pioneers, our vision is clear:  
              a cleaner, safer, and greener tomorrow.
              Join us in revolutionizing the cleaning industry—one space at a time.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { href: "https://www.facebook.com/limpiar.official?mibextid=LQQJ4d", icon: Facebook },
                { href: "https://twitter.com/LimpiarOnline", icon: Twitter },
                { href: "https://www.instagram.com/limpiaronline/", icon: Instagram },
                { href: "https://www.linkedin.com/company/limpiaronline/", icon: Linkedin },
              ].map(({ href, icon: Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-blue-600 transition-transform"
                >
                  <Icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition">
              Learn More
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full min-h-[700px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image src="/about-us.png" alt="Limpiar team at work" fill className="object-cover" priority />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
