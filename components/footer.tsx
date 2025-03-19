"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      console.error("Email is required")
      return
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Subscriber",
          email,
          recipient: "helpdesk@uselimpiar.online", // Ensure email goes to this address
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      console.log("Email sent successfully!")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Limpiar Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-600">Professional services that care for your space and the environment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Email: helpdesk@uselimpiar.online</li>
              <li className="text-sm text-gray-600">Phone: (833) 546-7427</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Get Monthly Updates</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter-consent" />
                <label
                  htmlFor="newsletter-consent"
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive marketing emails
                </label>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Limpiar. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
