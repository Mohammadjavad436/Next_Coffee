import { NextResponse } from 'next/server';
import dbConnect from '@/config/db';


export async function GET() {
    try {
        await dbConnect()
        return Response.json({ message: "Success Response  :))" }, { status: 200 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Error creating user' },
            { status: 500 }
        );
    }
} 