import express from 'express'
import { postsRouter } from './routes/posts.route.js'

const app = express()
const port = 3000

app.use(express.json())
app.get("/", (req, res) => {
    return res.json({
        message: "OK"
    })
})

app.use("/posts", postsRouter)
app.listen(port, () => {
    console.log(`App rodando na porta http://localhost:3000`);
})