// lib
import mongoose from "mongoose";

export type CommentType = {
    userId: mongoose.Schema.Types.ObjectId,
    comment: string, 
}

export type PostType = {
    title: string;
    content: string;
    author: mongoose.Schema.Types.ObjectId;
    likes: number;
    dislikes: number;
    comments: []
}