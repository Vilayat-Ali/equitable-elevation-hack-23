// lib
import mongoose from "mongoose";
import consola from "consola";
import { exit } from "process";

// models
import { UserSchema } from "./models/user.model";
import { PostSchema } from "./models/post.model";
import { CommunitySchema } from "./models/community.model";

// types
import { UserType } from "../interfaces/User";
import { PostType } from "../interfaces/Post";
import { CommunityType } from "../interfaces/Community";

export class Mongo {
    public userModel: mongoose.Model<UserType>;
    public postModel: mongoose.Model<PostType>;
    public communityModel: mongoose.Model<CommunityType>;

    constructor() {
        this.userModel = mongoose.model("user", UserSchema);
        this.postModel = mongoose.model("post", PostSchema);
        this.communityModel = mongoose.model("community", CommunitySchema);
    }

    public async connect() {
        try {
            if(!mongoose.connections[0].readyState) {
                await mongoose.connect(String(process.env.MONGO_URI));
                consola.success("Connected to DB");
            }
        } catch (err: any) {
            consola.error("Cannot connect to DB");
            exit(1);
        }
    }

    public async disconnect() {
        try {
            if(mongoose.connections[0].readyState) {
                await mongoose.disconnect();
                consola.info("Disconnected to DB");
            }
        } catch (err: any) {
            consola.error("Cannot connect to DB");
            exit(1);
        }
    }
}