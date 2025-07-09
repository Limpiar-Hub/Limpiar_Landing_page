"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tab } from "@headlessui/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  "Office Spaces",
  "Healthcare Facilities",
  "Educational Institutions",
  "Retail Spaces",
  "Industrial Facilities",
]

export function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {services.map((service) => (
              <Tab
                key={service}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                   ${
                     selected ? "bg-white text-blue-700 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                   }`
                }
              >
                {service}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/limpiar-logo2.png"
                    alt="Office cleaning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Reliable Office Care</h3>
                  <p className="text-gray-600 mb-6">
                    Customize office cleaning with flexible options using our reliable office care services. Locally
                    managed teams deliver high-quality cleaning that meets your standards.
                  </p>
                  <Button size="lg">Learn More</Button>
                </div>
              </motion.div>
            </Tab.Panel>
            {/* Add similar panels for other services */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

