import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'parentName', 'parentAge'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create submission
    const submission = await prisma.meeNesthamSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        parentName: data.parentName,
        parentAge: parseInt(data.parentAge),
        message: data.message || '',
      },
    });

    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error creating submission:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
} 