"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"


import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
        >
          Sustainable Solutions
          <br />
          <span className="text-blue-500">For the modern business</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-[600px] text-gray-500 md:text-xl"
        >
          Professional services that care for your space and the environment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <Input type="email" placeholder="Enter your business email" />
          <a
  href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
  target="_blank"
  rel="noopener noreferrer"
>
  <Search className="mr-2 h-4 w-4" />
  Search
</a>
        </motion.div>
      </div>
    </section>
  )
}