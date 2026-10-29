import { postsService } from "../services/posts.services.js";

class PostsController {
    async getAll(req, res) {
        try {
            const post = await postsService.getall();
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error:"Erro ao buscar posts"});
        }
    }

    async getById(req, res) {
        const postId = req.params.id;

        try {
            const posts = await postsService.getById(postsId);
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao buscar posts"});
        }
    }

    async create(req, res) {
        try {
            const posts = await postsService.create(req.body);
            res.status(201).json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao postar posts"});
        }
    }

    async delete(req, res) {
        const postsId = req.params.id;

        try {
            const posts = await postsService.delete(postsId);
            res.status(200).json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Erro ao deletar posts"});
        }
    }

    async updatePut(req, res) {
        const postsId = req.params.id;

        try {
            const postsAtualizado = await postsService.updatePut(postsId,req.body
            );
            res.status(200).json(postsAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar posts" });
        }
    }

    async updatePatch(req, res) {
        const postsId = req.params.id;

        try {
            const postsAtualizado = await postsService.updatePatch(
                postsId,
                req.body
            );
            res.status(200).json(postsAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar posts"});
        }
    }
}

export const postsController = new PostsController();