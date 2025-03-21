"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoon() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setMessage("Please enter a valid email.")
      return
    }
  
    setLoading(true)
    setMessage("")
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
  
      const data = await response.json()
  
      if (response.ok) {
        setMessage("Thank you for subscribing! We'll notify you when we launch.")
        setEmail("")
      } else {
        setMessage(data.error || "An error occurred. Please try again.")
      }
    } catch (error) {
      console.error("Request failed:", error)
      setMessage("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re working on something amazing. Our sustainable waste management solutions will be available soon. Sign
            up to be notified when we launch.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md"
            />
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
              {loading ? "Submitting..." : "Get Notified"}
            </Button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </motion.div>
      </div>
    </section>
  )
}
