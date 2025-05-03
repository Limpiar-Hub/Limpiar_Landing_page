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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Modern Commercial Spaces</h1>
            <p className="text-lg md:text-xl">
              Discover premium skyscraper offices, shared workspaces, and dynamic business hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Spaces?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <Building2 className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Architecture</h3>
            <p>Skyscrapers built with modern design, smart access, and eco-conscious materials.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <MapPin className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Central Locations</h3>
            <p>Offices located in key business districts with great transit options.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white shadow rounded-xl"
          >
            <Sparkle className="mx-auto w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
            <p>Wi-Fi, green spaces, lounges, and 24/7 access to meet modern business needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Buildings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img src={img} alt={`Building ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
