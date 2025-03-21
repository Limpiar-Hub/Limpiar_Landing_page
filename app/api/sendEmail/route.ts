import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, recipientType } = await request.json()

    if (!email) {
      console.error("❌ No sender email provided!")
      return NextResponse.json({ error: "Sender email is required" }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing email credentials!")
      return NextResponse.json({ error: "Email server credentials are missing" }, { status: 500 })
    }

    console.log("📩 Sending email from:", email)

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Determine the recipient based on `recipientType`
    let recipientEmail = "helpdesk@uselimpiar.online" 
    if (recipientType === "helpdesk") recipientEmail = "helpdesk@uselimpiar.online"
    if (recipientType === "sales") recipientEmail = "helpdesk@uselimpiar.online"

    const mailResponse = await transporter.sendMail({
      from: `"Limpiar Support" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: " 📌 New Submission for a Prospective Client 📨",
      text: `📌 New Submission for a Prospective Client  

Dear Team,  

You have received a new prospective client submission. Below are the details:  

📧 **Email:** ${email}  

Please review and take the necessary action.  

Best regards,  
Demi Oloyede
CEO & Founder Limpiar`
,
    })

    console.log("✅ Email sent successfully:", mailResponse)

    return NextResponse.json({ message: "Email sent successfully!" })
  } catch (error: any) {
    console.error("❌ Email sending error:", error)
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
  }
}
