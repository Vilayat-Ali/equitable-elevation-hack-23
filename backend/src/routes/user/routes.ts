// lib
import type { Request, Response } from "express";

// interfaces
import { AuthenticatedRequest } from "../../interfaces/Express";

// helpers
import { UserHelper } from "./helpers";

export class UserRoutes {

    public static async register(req: AuthenticatedRequest, res: Response) {
        try {
            return res.json({success: true, message: "Hello Register"});
        } catch(err: any) {
            return res.json({success: false, err})
        }
    }

    public static async login(req: AuthenticatedRequest, res: Response) {
        try {
            return res.json({success: true, mesage: "Hello Login"});
        } catch(err: any) {
            return res.json({success: false, err}) 
        }
    }
}