import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Hello from the new API route!' });
}

export async function POST(request: Request) {
    const data = await request.json();
    // Process data here
    return NextResponse.json({ status: 'User created', data });
}