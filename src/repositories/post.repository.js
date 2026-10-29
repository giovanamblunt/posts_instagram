import { knex } from "../database/knex.js";

class PostsRepository {
    async getall() {
        return await knex("posts").select("*");
    }

    async getById(id) {
        return await knex("posts")
            .where({ id })
            .first();
    }

    async create(dados) {
        const posts = await Knex("posts")
            .insert(dados)
            .returning("*");

        return posts[0];
    }

    async delete(id) {
        const posts = await Knex("posts")
            .where({ id })
            .del()
            .returning("*");

        return {
            mensagem: "Post deletado",
            pokemon: posts[0]
        };
    }

    async updatePut(id, dados) {
        const posts = await Knex("posts")
            .where({ id })
            .update(dados)
            .returning("*");

        return {
            message: "Post atualizado com sucesso",
            postsAtualizado: posts[0]
        };
    }

    async updateKnex(id, dados) {
        const postsAtualizado = await Knex("posts")
            .where({ id })
            .update(dados)
            .returning("*");

        return {
            message: "Post atualizado com sucesso!",
            post: postsAtualizado
        };
    }
}

export const postsRepository = new PostsRepository();