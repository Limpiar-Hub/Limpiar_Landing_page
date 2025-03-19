import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email } = await request.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Use Hostinger's SMTP server
    port: 465, // Use port 465 for SSL or 587 for TLS
    secure: true, // True for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER, // Your Hostinger email
      pass: process.env.EMAIL_PASS, // Your Hostinger email password
    },
  })
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Limpiador!",
    text: `Hello ${name},\n\nThank you for joining Limpiador! We’re thrilled to have you on board.\n\nAt Limpiador, we provide top-tier sustainable cleaning solutions tailored for businesses like yours.\n\nStay tuned for updates and exclusive offers!\n\nBest,\nThe Limpiador Team`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully!" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

