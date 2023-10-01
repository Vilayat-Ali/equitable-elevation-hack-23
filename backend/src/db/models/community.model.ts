// lib
import { Schema } from "mongoose";

// types
import type { CommunityType } from "../../interfaces/Community";

export const CommunitySchema = new Schema<CommunityType>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    members: {
        type: [Schema.Types.ObjectId],
        required: true
    }
}, { timestamps: true });