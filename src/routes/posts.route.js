import { Router } from "express";
import { PostController } from "../controller/post.controller.js";

export const postsRouter = Router();

postsRouter.get("/", PostsController.getAll);
postsRouter.get("/:id", PostsController.getById);
postsRouter.post("/", PostsController.create);
postsRouter.delete("/:id", PostsController.delete);
postsRouter.put("/:id", PostControllerostsController.updatePut);
postsRouter.patch("/:id", PostsController.updatePatch);