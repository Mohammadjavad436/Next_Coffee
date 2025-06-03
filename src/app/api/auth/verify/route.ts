import { verifyAccessToken } from '@/utility/auth';
import { NextResponse } from 'next/server';
import connectToDB from '@/config/db';
import userModel from '@/models/User';

export async function POST(req: Request) {
    try {
        await connectToDB();
        const { token } = await req.json();

        if (!token) {
            return NextResponse.json({ message: 'user token  not found' }, { status: 400 });
        }
        const decodedToken = await verifyAccessToken(token);

        const email = Object.entries(decodedToken)
            .filter(([key, value]) => !isNaN(Number(key)) && typeof value === 'string')
            .map(([, value]) => value)
            .join('');

        if (!email) {
            return NextResponse.json({ message: 'verify token not valid' }, { status: 401 });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'user info not valid' }, { status: 401 });
        }

        return NextResponse.json({
            valid: true,
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });
    } catch (error) {
        return NextResponse.json({ message: "'Verify token error:'" }, { status: 500 });
    }
} 