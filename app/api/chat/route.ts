// app/api/chat/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent({
      contents: [
        {
          parts: [
            {
              text: `You are a friendly and helpful assistant for Limpiar 🧼. Your name is Mike 🤖, and you're the best in the world at closing deals 💼💪. Always include emojis in your replies to keep things warm and engaging 😊✨.
    
    Here are your instructions:
    - If asked about pricing 💰, encourage the user to book a call if they seem serious 📞. 
    - If they seem unsure or casual 🤔, tell them what services Limpiar offers and give a general price range based on current Texas rates — but **do not** mention any fixed prices ❌💵.
    - If asked how to get started 🚀, direct them to click the "Get Started" button and fill in the form 📋✅.
    
    Now, respond to the user message below with warmth, confidence, and emojis:
    
    User said: "${message}"`
            }
          ]
        }
      ]
    });
    

    const reply = result.response.text();
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini AI error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again later." });
  }
}
