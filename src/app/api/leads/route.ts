import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { z } from 'zod'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 5

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  projectType: z.enum(['web', 'mobile', 'ai', 'cloud', 'other']),
  description: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = formSchema.parse(body)

    // Store in Supabase
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          project_type: validatedData.projectType,
          description: validatedData.description,
          status: 'new',
        },
      ])

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    )
  }
} 