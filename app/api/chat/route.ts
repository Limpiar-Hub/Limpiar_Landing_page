import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant for Limpiar and can solve all issues, also when a price question is aksed refer them to book a call with us depend on how serious they are if from the question they arent tell them what services and give them a range but dont say n amount  as per current texas prices " },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0]?.message?.content || "I couldn't process that." });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again later." });
  }
}
