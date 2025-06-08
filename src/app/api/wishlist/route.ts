import { NextResponse } from "next/server"
import WishList from '@/models/WishList'




export async function POST(req: Request) {
    try {
        const { user, product } = await req.json();
        const newWish = await WishList.create({ user, product });
        console.log(newWish)
        return NextResponse.json({ message: "product successfully added to wishlist:)" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 500 });
    }
}