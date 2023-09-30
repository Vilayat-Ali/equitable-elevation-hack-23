// lib
import type { Request, Response } from "express";

// helpers
import { PostHelper } from "./helpers";

// types

export class PostRoutes {

    public static async get(req: Request, res: Response) {
        try {
            return res.json({success: true, access_token: "token"});
        } catch(err: any) {
            console.log(err)
            return res.json({success: false, err})
        }
    }

    public static async getOne(req: Request, res: Response) {
        try {
            return res.json({success: true, access_token: "token"});
        } catch(err: any) {
            console.log(err);
            return res.json({success: false, err}) 
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const {author, title, content} = req.body;
            const data = await PostHelper.createPost({
                author,
                title,
                content
            });
            return res.json({success: true, data});
        } catch(err: any) {
            console.log(err);
            return res.json({success: false, err}) 
        }
    }
}