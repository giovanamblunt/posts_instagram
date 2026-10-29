import { postsRepository } from "../repositories/post.repository.js";

class PostsService {
    async getall() {
        const posts = await postsRepository.getAll
        return posts
    }

    async getById(id) {
        const posts = await postsRepository.getById
        return posts
    }

    async create({data}) {
        const postsCriado = await postsRepository.create(data)
        return postsCriado
    }

    async delete(id) {
        const postsDeletado = await postsRepository.delete(id)
        return postsDeletado
    }

    async updatePut(id, data) {
        const posts = await postsRepository.updatePut(id, data)

        return posts
    }


    async updateKnex(id, dados) {
        const [postsAtualizado] = await postsRepository.updateKnex(id, dados)
        return postsAtualizado
    }
}
export const postsService = new PostsService();