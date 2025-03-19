"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GetOnboard() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Onboard</h2>
            <p className="text-lg text-blaxk-600 mb-8">
              At Limpiar, we are on a mission to transform the commercial cleaning space. Our approach is simple yet
              profound: provide sustainable cleaning services that benefit both people and the planet. Founded by
              industry experts who recognized the need for a change from traditional methods, Limpiar is dedicated to
              eco-friendly solutions that ensure clean, safe, and healthy environments for all. ​ We combine
              state-of-the-art technology with best-in-class cleaning practices to offer services that not only meet but
              exceed our clients’ expectations. From reducing chemical use to implementing advanced recycling
              techniques, every aspect of our operation is designed with sustainability at its core.
            </p>
            <a
  href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
    Join Our Team
  </Button>
</a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image src="/save-the-planet.png" alt="Save the Planet" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

