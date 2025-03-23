"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleBottomCenterTextIcon, 
  MoonIcon, 
  SunIcon, 
  XMarkIcon 
} from "@heroicons/react/24/solid"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isLightMode, setIsLightMode] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ sender: string, text: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)

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
    }
  }

  const handleChatSubmit = async () => {
    if (!chatMessage) return;

    // Add user message to the chat
    setChatMessages((prev) => [...prev, { sender: 'user', text: chatMessage }]);
    
    // Simulate typing indicator for the assistant
    setIsTyping(true);
    setTimeout(() => {
      // Simulate an API call to get the assistant's reply
      fetchAssistantReply(chatMessage);
    }, 1000); // Simulated typing delay
    setChatMessage("");
  };

  const fetchAssistantReply = async (message: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setChatMessages((prev) => [...prev, { sender: 'assistant', text: data.reply }]);
      setIsTyping(false); // Stop typing indicator
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages((prev) => [...prev, { sender: 'assistant', text: "Something went wrong. Please try again later." }]);
      setIsTyping(false); // Stop typing indicator
    }
  };

  return (
    <footer className={`${isLightMode ? "bg-white text-black" : "bg-gray-900 text-white"} relative transition duration-300`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo.png" alt="Limpiar Logo" width={140} height={50} className="h-10 w-auto" />
            </Link>
            <p className={`text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
              Professional cleaning services that care for your space and the environment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 md:flex md:flex-col md:items-center">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}>
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
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${isLightMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`} />
              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter-consent" />
                <label htmlFor="newsletter-consent" className="text-sm text-gray-400">
                  I agree to receive marketing emails
                </label>
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Sign Up</Button>
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
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className={`bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300`}
          >
            {chatOpen ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Chat Box (Popup) */}
        {chatOpen && (
          <div className={`fixed bottom-16 right-6 p-4 w-72 shadow-lg rounded-lg ${isLightMode ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="text-lg font-semibold">Live Chat</h3>
              <button onClick={() => setChatOpen(false)}>
                <XMarkIcon className="w-5 h-5 text-gray-600 hover:text-gray-800" />
              </button>
            </div>
            
            {/* Conversation Area */}
            <div className="h-48 overflow-y-auto p-2">
              <div className="flex flex-col space-y-2">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="text-gray-600 text-sm ml-2">Typing...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleChatSubmit();
                  }
                }}
                className="p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black" // Set input text color to black
              />
              <Button onClick={handleChatSubmit} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white">Send</Button>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>© {new Date().getFullYear()} Limpiar. All rights reserved.</p>
          <div className="flex space-x-4">
          <Link href="/pivacy" className={`text-sm ${isLightMode ? "text-gray-600 hover:text-blue-500" : "text-gray-400 hover:text-blue-400"}`}>
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
