import { Router } from "express";
import { postsController } from "../controller/post.controller.js";

export const postsRouter = Router();

postsRouter.get("/", postsController.getAll);
postsRouter.get("/:id", postsController.getById);
postsRouter.post("/", postsController.create);
postsRouter.delete("/:id", postsController.delete);
postsRouter.put("/:id", postsController.updatePut);
postsRouter.patch("/:id", postsController.updatePatch);