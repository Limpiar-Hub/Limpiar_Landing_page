"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const partnerships = [
  {
    title: "Job Training Programs",
    description: "Providing professional development and skills training to community members.",
    image: "/limpiar-logo2.png",
  },
  {
    title: "Environmental Initiatives",
    description: "Supporting local environmental conservation and sustainability projects.",
    image: "/limpiar-logo2.png",
  },
  {
    title: "Community Outreach",
    description: "Engaging with local organizations to create positive social impact.",
    image: "/limpiar-logo2.png",
  },
]

export function PartnershipsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Partnership Programs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={partnership.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={partnership.image || "/placeholder.svg"}
                  alt={partnership.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{partnership.title}</h3>
                <p className="text-gray-600 mb-4">{partnership.description}</p>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

