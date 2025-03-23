"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const features = [
  {
    id: "transparency",
    title: "Empower Transparency with Our Accountability Dashboard",
    description:
      "Track progress, monitor performance, and ensure every job meets your standards. Our accountability dashboard gives you full transparency, so you always know who’s on-site and what’s getting done.",
    image: "/transparenc.png",
  },
  {
    id: "efficiency",
    title: "Smart Scheduling Assistant",
    description:
      "Effortlessly create, adjust, and manage requests with our intuitive scheduling assistant. Select dates, times, and services in just a few clicks, ensuring every request is timely and tailored to your needs.",
    image: "/efficiency.png",
  },
  {
    id: "cost",
    title: "Track and Control Costs with Ease",
    description:
      "Get complete visibility into your payments, invoices, and outstanding balances. Our cost management dashboard simplifies billing, helping you stay on budget and control your property expenses.",
    image: "/cost.png",
  },
  {
    id: "on-demand",
    title: "When You Need It, On Your Schedule",
    description:
      "Say goodbye to long waits for service requests. With on-demand scheduling, our providers are available same-day or last-minute to keep your business running smoothly.",
    image: "/on-demand.png",
  },
  {
    id: "aggregate",
    title: "Simplify Operations, Manage Multiple Properties with Ease",
    description:
      "Effortlessly manage all your properties under one platform. Our tools help you streamline operations, aggregate property data, and centralize scheduling, making it easier to oversee and optimize your portfolio.",
    image: "/aggregate.png",
  },
]

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("transparency")

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="flex overflow-x-auto scrollbar-hide justify-start space-x-4 px-4">
  {features.map((feature) => (
    <TabsTrigger
      key={feature.id}
      value={feature.id}
      className="flex-shrink-0 px-4 py-2 text-base capitalize whitespace-nowrap tabs-trigger"
    >
      {feature.id}
    </TabsTrigger>
  ))}
</TabsList>



          <AnimatePresence mode="wait">
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">{feature.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <a
                      href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Get Started
                      </Button>
                    </a>
                  </div>
                  <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
