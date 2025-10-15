import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Standard API route pattern that agents should follow
export async function GET() {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected'
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: 'Database connection failed' },
      { status: 503 }
    )
  }
}

// AGENTS: Follow this pattern for all API routes:
// 1. Import dependencies at top
// 2. Export async function for each HTTP method
// 3. Use try-catch for error handling
// 4. Return NextResponse.json() for responses
// 5. Use proper HTTP status codes
