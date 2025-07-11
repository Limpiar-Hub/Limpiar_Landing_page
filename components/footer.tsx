"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, MoonIcon, SunIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isLightMode, setIsLightMode] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ sender: string, text: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatMessages])

  const toggleTheme = () => setIsLightMode(!isLightMode)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return alert("Please enter your email")

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Subscriber", email, recipient: "helpdesk@uselimpiar.online" }),
      })

      if (!response.ok) throw new Error("Failed to send email")

      setSuccessMessage("Thanks for subscribing!")
      setEmail("")
      setTimeout(() => setSuccessMessage(""), 4000)
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to subscribe. Please try again later.")
    }
  }

  const handleChatSubmit = async () => {
    if (!chatMessage) return

    setChatMessages((prev) => [...prev, { sender: "user", text: chatMessage }])
    setIsTyping(true)
    setTimeout(() => {
      fetchAssistantReply(chatMessage)
    }, 1000)
    setChatMessage("")
  }

  const fetchAssistantReply = async (message: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) throw new Error("Failed to fetch assistant reply")

      const data = await response.json()
      setChatMessages((prev) => [...prev, { sender: "assistant", text: data.reply }])
      setIsTyping(false)
    } catch (error) {
      console.error("Chat error:", error)
      setChatMessages((prev) => [...prev, { sender: "assistant", text: "Something went wrong. Please try again later." }])
      setIsTyping(false)
    }
  }

  const initialFAQs = [
    { question: "How do I book a cleaner?", answer: "You can book a cleaner directly through our website by selecting your preferred date and time." },
    { question: "What areas do you serve?", answer: "We currently serve Dallas, Texas, and surrounding areas. Contact us for specific locations!" },
    { question: "Can I cancel a booking?", answer: "Yes, you can cancel a booking up to 24 hours in advance through your account or by contacting support." },
  ]

  return (
    <footer className={`${isLightMode ? "bg-white text-black" : "bg-gray-900 text-white"} relative transition duration-300`}>
      <div className="container mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {/* Company Info */}
  <div className=" -mt-12 text-left">
  <Link href="/" className="block -ml-14"> {/* 👈 move logo left */}
    <Image
      src={isLightMode ? "/limp23.png" : "/limpiar-logo2.png"}
      alt="Limpiar Logo"
      width={140}
      height={90}
      className="h-[140px] w-auto object-contain"
    />
  </Link>
  <p className={`text-sm  -mt-7 ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
    Professional cleaning services that care for your space and the environment.
  </p>
</div>



          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 md:flex md:flex-col md:items-center">
              {["About", "Social Impact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://blog.limpiar.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className={`flex items-center text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
                <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" /> helpdesk@uselimpiar.online
              </li>
              <li className={`flex items-center text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
                <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" /> (833) 546-7427
              </li>
              <li className={`flex items-center text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
                <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" /> Dallas, Texas, United States
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
                className={`${isLightMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
              />
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter-consent"
                  className="w-5 h-5 border border-gray-400 dark:border-white bg-white dark:bg-transparent checked:bg-blue-500 dark:checked:bg-blue-500"
                />
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

        {/* Google Map Location */}
        <div className="mt-12">
          <h3 className="font-semibold mb-4">Our Location</h3>
          <div className="w-full h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.9854057630754!2d-96.79698778519465!3d32.77666437912086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b18df4c2b9c9%3A0x9c95edcf1a6f7638!2sDallas%2C%20TX%2075068%2C%20USA!5e0!3m2!1sen!2sus!4v1616495543455!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Floating Chat Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className={`p-4 rounded-full shadow-xl transition duration-300 ${
              isLightMode
                ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                : "bg-gradient-to-br from-blue-600 to-blue-800 text-white"
            }`}
            aria-label={chatOpen ? "Close chat" : "Open chat"}
          >
            {chatOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M12 8v4" />
                <circle cx="12" cy="14" r="1" />
              </svg>
            )}
          </button>
        </motion.div>

        {/* Chat Box (Compact Window like MongoDB) */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed bottom-0 right-0 w-80 sm:w-96 max-h-[500px] rounded-tl-lg rounded-tr-lg shadow-2xl overflow-hidden z-40 mr-6 mb-20 flex flex-col ${
                isLightMode
                  ? "bg-white/80 backdrop-blur-md border border-gray-200"
                  : "bg-gray-800/80 backdrop-blur-md border border-gray-700"
              }`}
              role="dialog"
              aria-label="Live chat with Limpiar Assistant"
            >
              {/* Header */}
              <div className={`flex justify-between items-center p-4 ${isLightMode ? "bg-gray-100/50" : "bg-gray-900/50"}`}>
                <div className="flex items-center space-x-2">
                  <img
                    src="/chatbox.png"
                    alt="Assistant Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold">Limpiar Assistant</h3>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className={`p-1 rounded-full ${isLightMode ? "hover:bg-gray-200" : "hover:bg-gray-700"}`}
                  aria-label="Close chat"
                >
                  <XMarkIcon className={`w-5 h-5 ${isLightMode ? "text-gray-600" : "text-gray-300"}`} />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="px-4 pb-2">
                <div className={`flex items-center space-x-1 text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span>Status: All Systems Operational</span>
                </div>
              </div>

              {/* Conversation Area */}
              <div
                ref={chatContainerRef}
                className="flex-1 min-h-0 max-h-[400px] overflow-y-auto p-4 space-y-4 flex flex-col bg-gradient-to-b from-transparent to-gray-100/20"
                style={{ scrollbarWidth: 'thin' }}
              >
                {chatMessages.length === 0 && (
                  <div className="space-y-4">
                    <p className={`text-sm font-medium ${isLightMode ? "text-gray-800" : "text-gray-200"}`}>
                      Welcome! Ask me anything or select a question below:
                    </p>
                    {initialFAQs.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => setChatMessage(faq.question)}
                        className={`block text-left text-sm ${isLightMode ? "text-blue-500 hover:text-blue-600 bg-gray-100 p-2 rounded" : "text-blue-400 hover:text-blue-500 bg-gray-700 p-2 rounded"} hover:underline w-full`}
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                )}
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end`}
                  >
                    {msg.sender === "assistant" && (
                      <img
                        src="/chatbox.png"
                        alt="Assistant"
                        className="w-6 h-6 rounded-full mr-2"
                      />
                    )}
                    <div
                      className={`p-3 rounded-lg max-w-xs shadow-md ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                          : "bg-gray-200/80 text-black"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start items-center space-x-2"
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    </div>
                    <span className={`text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>Typing...</span>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className={`flex items-center p-4 ${isLightMode ? "bg-gray-100/50" : "bg-gray-900/50"} sticky bottom-0`}>
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleChatSubmit()
                  }}
                  className={`flex-1 p-2 rounded-full border-0 focus:ring-2 focus:ring-blue-400 ${
                    isLightMode ? "bg-white/80 text-black" : "bg-gray-700/80 text-white"
                  }`}
                  aria-label="Chat message input"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleChatSubmit}
                  className="ml-2 p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white"
                  aria-label="Send message"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Limpiar. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}>
              Terms of Service
            </Link>
          </div>
          <button onClick={toggleTheme} className="flex items-center space-x-2 text-gray-400 hover:text-blue-400">
            {isLightMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            <span>{isLightMode ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}