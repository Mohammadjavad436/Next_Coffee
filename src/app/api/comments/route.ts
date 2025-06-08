import { NextResponse } from "next/server"
import CommentModel from '@/models/Comment'
import ProductModel from "@/models/Product";
import connectToDB from "@/config/db";



export async function POST(req: Request) {

    try {
        connectToDB()
        const reqBody = await req.json()
        const { username, body, email, score, productID, isAccept } = reqBody


        const comment = await CommentModel.create({ username, body, email, score, productID, isAccept })



        const updateProductComment = await ProductModel.findOneAndUpdate({ _id: productID }, {
            $push: {
                comments: comment._id
            }
        })

        if (!updateProductComment) {
            return NextResponse.json({ message: "comment product not added ", data: comment }, { status: 201 })
        }

        return NextResponse.json({ message: "comment send successfully:)", data: comment }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })

    }

}


export async function GET() {

    try {
        connectToDB()
        const allComments = await CommentModel.find({}, '-__v')
        return NextResponse.json({ message: 'all comment ', data: allComments })

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }

}