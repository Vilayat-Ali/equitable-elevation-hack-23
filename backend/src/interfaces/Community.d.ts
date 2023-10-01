import { Schema } from "mongoose";

export interface CommunityType {
    name: string;
    description: string;
    members: Schema.Types.ObjectId[];
}