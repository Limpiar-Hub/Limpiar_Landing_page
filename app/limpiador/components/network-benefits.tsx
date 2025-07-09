"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Gift, CreditCard, Users, BookOpen, BarChart3 } from "lucide-react"

const benefits = [
  { icon: Gift, title: "Perks and Discounts" },
  { icon: CreditCard, title: "Fast Payments" },
  { icon: Users, title: "Provider Portal" },
  { icon: BookOpen, title: "10k Providers and counting" },
  { icon: BarChart3, title: "Sales and Marketing" },
]

export function NetworkBenefits() {
  return (
    <section className="py-20 bg-[#4834D4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The network that helps you flourish</h2>
          <p className="text-xl text-white/80">Providers in our network report an average 35% increase in revenue</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-8 h-8 mx-auto mb-2 text-[#4834D4]" />
              <h3 className="text-sm font-medium text-gray-800">{benefit.title}</h3>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-white rounded-lg p-4 flex items-center justify-center"
          >
            <Image src="/limp23.png" alt="Limpiar Logo" width={100} height={40} className="h-30 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

