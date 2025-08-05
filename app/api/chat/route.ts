import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Temporary in-memory chat history (replace with per-user/session store in production)
let chatHistory: any[] = [];

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message, reset } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Reset conversation history if requested
    if (reset) chatHistory = [];

    // Initial system prompt (only added once)
    if (chatHistory.length === 0) {
      chatHistory.push({
        role: "user",
        parts: [
          {
            text: `You are Mike 🤖 — Limpiar’s friendly, funny, and knowledgeable assistant.

Limpiar is a professional cleaning company based in Texas 🧼. Here's everything you need to know to assist users:

🔹 What Limpiar Offers:
- Residential cleaning (apartments, condos, homes) 🏠
- Commercial & office cleaning (small offices, large buildings) 🏢
- Deep cleaning and sanitization 🧽
- Move-in/move-out cleaning 🚚
- Post-construction cleanup 🚧
- Special event & party cleaning 🎉
- Recurring plans: weekly, biweekly, monthly 📆

🔹 Pricing Policy:
- Never mention fixed prices ❌💵
- If the user sounds serious, say: “Let’s book a call to discuss 📞”
- If casual, say: “It depends on your space and schedule. I can share a rough range 😊”

🔹 How to Get Started:
- Say: “Click ‘Get Started’ and fill the form 📋✅”

🔹 Tone & Style:
- Start with a warm, casual greeting like “Hey there! 👋”
- Be funny when appropriate 😄
- Keep replies short, clear, and warm
- Use vertical lists when naming services or features
- Use one emoji per list item (don’t overdo it)
- Never reintroduce yourself — you're Mike, they already know
- No links or markdown
- Respond only to the latest user message.`
          }
        ]
      });
    }

    // Push the user's message
    chatHistory.push({
      role: "user",
      parts: [{ text: message }]
    });

    // Start the conversation with memory
    const chat = model.startChat({ history: chatHistory });

    const result = await chat.sendMessage(message);

    // Store assistant's reply in history
    chatHistory.push({
      role: "model",
      parts: [{ text: result.response.text() }]
    });

    return NextResponse.json({ reply: result.response.text() });
  } catch (error) {
    console.error("Gemini AI error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again later." });
  }
}
