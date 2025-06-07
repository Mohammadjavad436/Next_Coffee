import mongoose, { Schema, Types, model } from "mongoose";
import "./Product";

interface IComment {
    username: string;
    body: string;
    email: string;
    score: number;
    date: Date;
    productID: Types.ObjectId;
}

const schema = new Schema<IComment>({
    username: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false,
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
});

const Comment = mongoose.models.Comment || model<IComment>("Comment", schema);

export default Comment; 