"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return alert("Please enter your email")

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Subscriber",
          email,
          recipient: "helpdesk@uselimpiar.online",
        }),
      })

      if (!response.ok) throw new Error("Failed to send email")

      setSuccessMessage("Thanks for subscribing!")
      setEmail("")
      setTimeout(() => setSuccessMessage(""), 4000)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo.png" alt="Limpiar Logo" width={140} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-gray-400">
              Professional cleaning services that care for your space and the environment.
            </p>
            {/* Live Chat Button */}
            <Button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600">
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
              <span>Live Chat</span>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 md:flex md:flex-col md:items-center">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-blue-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-400">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" /> helpdesk@uselimpiar.online
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" /> (833) 546-7427
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" /> Texas, United States
              </li>
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
                className="bg-gray-800 text-white"
              />
              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter-consent" />
                <label htmlFor="newsletter-consent" className="text-sm text-gray-400">
                  I agree to receive marketing emails
                </label>
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Sign Up
              </Button>
              {successMessage && <p className="text-green-400 text-sm">{successMessage}</p>}
            </form>
          </div>
        </div>

        {/* Social Media & Dark Mode */}
        <div className="mt-12 flex justify-center space-x-6">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
            <Link key={index} href="#" className="text-gray-400 hover:text-blue-400 text-xl">
              <Icon />
            </Link>
          ))}
        </div>

        {/* Google Map Embed */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Limpiar Location"
            className="w-full h-48 md:h-64"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11587034.717351677!2d-103.59185177510525!3d31.968598678826054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1d42b3a5b3f%3A0x86c1eb45e3e125ef!2sTexas%2C%20USA!5e0!3m2!1sen!2sus!4v1711130000000!5m2!1sen!2sus"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Limpiar. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="flex items-center space-x-2 text-gray-400 hover:text-blue-400">
            {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
