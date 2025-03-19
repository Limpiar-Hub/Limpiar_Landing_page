"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"


const services = [
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Hygiene Solutions for Healthcare",
    description:
      "Essential cleaning for healthcare facilities, ensuring hygienic spaces, infection control, and compliance with the highest safety standards",
    image: "/healthcare.jpg",
  },
  {
    id: "retail",
    label: "Retail",
    title: "Spotless Retail Spaces for Enhanced Shopper Experience",
    description:
      "Keep your retail spaces spotless to elevate the shopper experience and boost retention. Ensure consistent standards across multiple locations with streamlined operations, maintaining high-traffic areas and preserving your store's visual appeal.",
    image: "/retail.jpg",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Hospitality Cleaning Services That Impress Your Guests",
    description:
      "Our cleaning services ensure your hospitality venue shines from lobby to lounge, leaving a lasting impression on your guests. We use environmentally safe products to prioritize guest health and safety while maintaining the highest standards of cleanliness.",
    image: "/hospitality.jpg",
  },
  {
    id: "government",
    label: "Government",
    title: "Reliable Cleaning Services for Government Facilities",
    description:
      "Ensure compliance with health and safety regulations through regular audits. Our disciplined veteran workforce delivers secure, high-standard cleaning for government facilities",
    image: "/government.jpg",
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Industrial Cleaning Services for Safety and Productivity",
    description:
      "Ensure worker safety with rigorous cleaning that reduces hazards, minimizes downtime, and maintains productivity. Our consistent upkeep of high-traffic areas preserves the functionality and appearance of industrial spaces.",
    image: "/industrial.jpg",
  },
  {
    id: "hoa",
    label: "HOA",
    title: "Professional Cleaning Services for HOA Communities",
    description:
      "Transforming community living with professional cleaning solutions designed specifically for HOAs. From common areas to shared amenities, we ensure every space is spotless, promoting resident satisfaction, maintaining property values, and creating a welcoming environment",
    image: "/hoa.jpg",
  },
  {
    id: "education",
    label: "Education",
    title: "Expert Cleaning Solutions for Community Living",
    description:
      "Providing clean, safe, and healthy environments where students and educators can thrive. Our tailored cleaning solutions ensure that classrooms, libraries, and common areas are spotless, fostering a positive atmosphere for learning and growth.",
    image: "/educational.jpg",
  },
]

export function ServicesNavigation() {
  const [activeService, setActiveService] = useState("retail")

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex justify-center min-w-max py-4">
              {services.map((service) => (
                <Button
                  key={service.id}
                  variant={activeService === service.id ? "secondary" : "ghost"}
                  className={`
                    px-8 py-2 text-center whitespace-nowrap
                    ${activeService === service.id ? "text-blue-600" : "text-white hover:text-white hover:bg-white/10"}
                  `}
                  onClick={() => setActiveService(service.id)}
                >
                  {service.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          {services.map((service) => {
            if (service.id !== activeService) return null

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold tracking-tight"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                  <a
  href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
    Learn More
  </Button>
</a>

                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

