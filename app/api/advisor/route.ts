import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question, userContext } = body;

    const prompt = `As a financial advisor AI, please provide advice on the following question: "${question}"
    ${userContext ? `Context: ${userContext}` : ''}
    
    Please provide a detailed response that includes:
    1. Analysis of the situation
    2. Key considerations
    3. Potential risks and benefits
    4. Specific recommendations
    5. Important disclaimers
    
    Format the response in a clear, professional manner.`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text();

    return NextResponse.json({ 
      success: true, 
      advice 
    });
  } catch (error) {
    console.error('Error in AI advisor:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate financial advice' 
      },
      { status: 500 }
    );
  }
}
