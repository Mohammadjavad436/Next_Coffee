import { NextResponse } from "next/server"
import WishList from '@/models/WishList'
import { verifyAccessToken } from "@/utility/auth";
import connectToDB from "@/config/db";
import userModel from '@/models/User'




export async function POST(req: Request) {
    try {
        await connectToDB()
        const { user } = await req.json();
        const decodedToken = await verifyAccessToken(user);

        const email = Object.entries(decodedToken)
            .filter(([key, value]) => !isNaN(Number(key)) && typeof value === 'string')
            .map(([, value]) => value)
            .join('');

        console.log('email====>>', email)
        const userInfo = await userModel.findOne({ email });
        const userID = JSON.parse(JSON.stringify(userInfo._id))

        const newWish = await WishList.find({ user: userID }).populate('product').lean();

        return NextResponse.json({ message: "product successfully added to wishlist:)", data: newWish }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 500 });
    }
}
