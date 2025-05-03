"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Sparkle } from "lucide-react"

export default function CommercialPage() {
  const galleryImages = [
    "https://emeraldinc.biz/wp-content/uploads/2020/07/maximize-commercial-space-potential-scaled.jpg",
    "https://www.naiop.org/globalassets/research-and-publications/report/upcycling-reimagining-underutilized-commercial-space-as-public-space/researchreport29southside1440x400.jpg",
    "https://www.officelovin.com/wp-content/uploads/2017/05/chambers-of-commerce-1.jpg",
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <img
          src="https://nationaltoday.com/wp-content/uploads/2020/09/Skyscraper.jpg"
          alt="Skyscraper"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins tracking-tight">
              Modern Commercial Spaces
            </h1>
            <p className="text-lg md:text-xl font-light font-poppins">
              Professional, reliable, and spotless cleaning solutions for offices, buildings, and corporate spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins">Why Businesses Choose Limpiar</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <Sparkle className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Spotless Results</h3>
            <p>We ensure every workspace shines—impressing clients and supporting healthy teams.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <MapPin className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Local Expertise</h3>
            <p>Serving prime commercial hubs with responsive, on-time, and dedicated teams.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <Building2 className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Tailored Plans</h3>
            <p>From daily to deep cleans, we customize services for your building’s exact needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins">Our Commercial Workspaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Commercial cleaning ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
