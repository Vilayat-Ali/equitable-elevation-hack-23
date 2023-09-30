// lib
import { Schema } from "mongoose";

// types
import type { PostType, CommentType } from "../../interfaces/Post";

const commentSchema = new Schema<CommentType>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    comment: {
        type: String,
    }
}, {timestamps: true});

export const PostSchema = new Schema<PostType>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: [commentSchema]
}, { timestamps: true });