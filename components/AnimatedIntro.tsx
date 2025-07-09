"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function AnimatedIntro() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500) // Adjust delay as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed z-[9999] inset-0 flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Image
              src="/limpiar-logo2.png"
              alt="Limpiar Logo"
              width={120}
              height={120}
              className="w-28 h-28 object-contain"
            />
            <p className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
              Welcome to Limpiar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
