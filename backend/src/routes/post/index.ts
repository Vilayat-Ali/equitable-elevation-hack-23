// lib
import express from "express";
import type { Router } from "express";

// routes
import { PostRoutes } from "./routes";

export class Post {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
        this.router.get('/', PostRoutes.get);
        this.router.get('/:id', PostRoutes.getOne);
        this.router.post('/', PostRoutes.create);
        this.router.put('/:id', PostRoutes.get);
        this.router.delete('/:id', PostRoutes.get);
    }

    public getRouter() {
        return this.router;
    }

}