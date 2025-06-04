import { NextResponse } from 'next/server';
import dbConnect from '@/config/db';
import UserModel from '@/models/User'
import { generateAccessToken, hashPassword, validateEmail, validatePassword, validatePhone } from '@/utility/auth';
import { roles } from '@/utility/constants';

export async function POST(req: Request) {
    try {
        await dbConnect()
        const body = await req.json()
        const { name, password, email, phone } = body

        if (!name.trim()) {
            return Response.json(
                { message: "نام نمی‌تواند خالی باشد" },
                { status: 400 }
            );
        }

        const isValidPhone = validatePhone(phone)

        if (!isValidPhone) {
            return Response.json(
                { message: "شماره موبایل صحیح نمی باشد" },
                { status: 400 }
            );
        }

        const isValidEmail = validateEmail(email)

        if (email.length > 0 && !isValidEmail) {
            return Response.json(
                { message: "ایمیل صحیح  نمی باشد" },
                { status: 400 }
            );
        }

        const isValidPassword = validatePassword(password)

        if (!isValidPassword) {
            return Response.json(
                { message: "رمز عبور صحیح نمی باشد" },
                { status: 400 }
            );
        }


        const isUserExist = await UserModel.findOne({
            $or: [
                { name },
                { phone },
                { email: { $exists: true, $ne: '', $eq: email } }
            ]
        });


        if (isUserExist) {
            return Response.json(
                {
                    message: "The username or email or phone exist already !!",
                },
                {
                    status: 422,
                }
            );
        }
        const hashedPassword = await hashPassword(password);
        const users = await UserModel.find({});

        const newUser = await UserModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role: users.length > 0 ? roles.USER : roles.ADMIN,
        });

        const accessToken = generateAccessToken({
            userId: newUser._id,
            email: newUser.email,
            role: newUser.role
        });

        return Response.json(
            { message: "User signed up successfully :))" },
            {
                status: 201,
                headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
            }
        );

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Error creating user' },
            { status: 500 }
        );
    }
} 