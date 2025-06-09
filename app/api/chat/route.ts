import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.ANTHROPIC_API_KEY, // We'll keep using the same env var name
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000', // Your site URL
    'X-Title': 'AI Chat Assistant', // Your site title
  },
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    // Format messages for OpenAI-compatible API
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet', // Claude model through OpenRouter
      messages: formattedMessages,
      max_tokens: 2000, // Reduced to fit within your credit limit
      temperature: 0.7,
    });

    const assistantMessage = response.choices[0]?.message?.content;
    
    if (assistantMessage) {
      return NextResponse.json({
        message: assistantMessage,
      });
    } else {
      throw new Error('No response received from OpenRouter');
    }
  } catch (error: unknown) {
    console.error('OpenRouter API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to get response from OpenRouter',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
} 