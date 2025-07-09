"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LayoutGrid, Leaf, Users, Clock, Settings, Building2, Zap, BarChart } from "lucide-react"

const advantages = [
  {
    title: "Centralized Operations",
    description: "Streamline your property management with our unified dashboard",
    icon: LayoutGrid,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Enhanced Tenant Retention",
    description: "Keep your tenants happy with superior service quality",
    icon: Users,
    color: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Eco-Friendly Services",
    description: "Sustainable cleaning solutions for a better tomorrow",
    icon: Leaf,
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    title: "On-Demand Solutions",
    description: "Flexible services available when you need them",
    icon: Clock,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge tools for optimal service delivery",
    icon: Settings,
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
  {
    title: "Property Management",
    description: "Comprehensive solutions for property maintenance",
    icon: Building2,
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  {
    title: "Rapid Response",
    description: "Quick and efficient service deployment",
    icon: Zap,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
  {
    title: "Performance Metrics",
    description: "Data-driven insights for better decision making",
    icon: BarChart,
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
]

export function LimpiarAdvantage() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            The Limpiar Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Experience the difference with our comprehensive suite of professional services designed to elevate your
            property management
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 ${advantage.color} opacity-20`} />
              </div>

              <div className="relative p-6 space-y-4">
                <div className={`${advantage.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                  <advantage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <div className="relative w-32 h-32 rounded-full bg-white shadow-lg p-4 flex items-center justify-center">
            <Image src="/limp23.png" alt="Limpiar Logo" width={80} height={80} className="object-contain h-25 w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}