import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function GET() {
  try {
    console.log('Testing API key...');
    console.log('API Key exists:', !!process.env.ANTHROPIC_API_KEY);
    console.log('API Key prefix:', process.env.ANTHROPIC_API_KEY?.substring(0, 20));
    
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        error: 'API key not found',
        hasKey: false
      });
    }

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.ANTHROPIC_API_KEY,
      defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI Chat Assistant',
      },
    });

    // Simple test message
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      max_tokens: 50, // Very small for testing
      messages: [
        {
          role: 'user',
          content: 'Hello! Just testing the connection. Please respond with "Connection successful!"'
        }
      ],
    });

    const assistantMessage = response.choices[0]?.message?.content;
    
    if (assistantMessage) {
      return NextResponse.json({
        success: true,
        message: assistantMessage,
        hasKey: true
      });
    } else {
      throw new Error('No response received');
    }
  } catch (error: any) {
    console.error('Test API error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      status: error.status,
      type: error.type
    });
    
    return NextResponse.json({
      error: 'Test failed',
      details: error.message,
      hasKey: !!process.env.ANTHROPIC_API_KEY,
      errorType: error.name || 'Unknown'
    }, { status: 500 });
  }
} 