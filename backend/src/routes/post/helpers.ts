// lib


// model
import { Mongo } from "../../db";

// types
import { UserTokenPayload } from "../../interfaces/User";

export class PostHelper {
    private static postModel = new Mongo().postModel;

    public static createPost(doc: {
        author: string,
        title: string,
        content: string,
    }) {
        return PostHelper.postModel.create(doc)
    }

}