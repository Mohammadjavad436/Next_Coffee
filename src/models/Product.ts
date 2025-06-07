import mongoose, { Schema, Types, model } from "mongoose";
import "./Comment";

interface IComment {
    type: Types.ObjectId;
    ref: string;
}

interface IProduct {
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    weight: number;
    suitableFor: string;
    smell: string;
    score: number;
    tags: string[];
    comments?: IComment[];
}

const schema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    suitableFor: {
        type: String,
        required: true,
    },
    smell: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        default: 5
    },
    tags: {
        type: [String],
        required: true,
    },
    comments: {
        type: [
            {
                type: Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
});

const Product = mongoose.models.Product || model<IProduct>("Product", schema);

export default Product; 