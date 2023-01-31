import express, { Express} from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createUsers } from "./endpoints/createUsers"
import { createPost } from "./endpoints/createPost"
import { searchPostId } from "./endpoints/searchPostId"


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.post("/users", createUsers)

app.post("/post", createPost)

app.get('/posts/:id', searchPostId)




