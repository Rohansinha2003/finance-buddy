import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      )
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `As an expert financial advisor, please provide detailed investment advice for the following query. 
    Focus on practical, actionable advice while considering risk management and diversification. 
    Include specific recommendations when possible, but always remind that past performance doesn't guarantee future results.
    
    Query: ${query}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ advice: text })
  } catch (error) {
    console.error("Error generating investment advice:", error)
    return NextResponse.json(
      { error: "Failed to generate investment advice" },
      { status: 500 }
    )
  }
} 