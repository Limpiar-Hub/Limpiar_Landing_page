"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GetOnboard() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Join the Movement. <br /> Clean Smarter. Live Better.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Limpiar</span>, we’re not just cleaning spaces—we’re redefining them.  
              Our mission is to revolutionize the cleaning industry with cutting-edge, eco-friendly solutions  
              that create healthier environments while reducing our carbon footprint.  
              <br /><br />
              Imagine a world where sustainability meets efficiency, technology, and care—where every clean space  
              contributes to a cleaner planet. That’s the world we’re building at Limpiar.
            </p>
            
            <a
              href="https://api.leadconnectorhq.com/widget/booking/N59Uzph3F1P9QB1CfZLS?backgroundColor=%23ffffff&primaryColor=%23178af6ff&buttonText=Schedule+Meeting&showCalendarTitle=true&showCalendarDescription=true&showCalendarDetails=true&default=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition">
                Become a Changemaker 🚀
              </Button>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image src="/save-the-planet.png" alt="Save the Planet" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
