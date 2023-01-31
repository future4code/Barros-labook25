import { connection } from "../dataBase/connection"
import  {Request, Response } from "express"
import express, { Express} from "express"
import cors from "express"
import { Post } from "../class/Post"

const app: Express = express()
app.use(express.json())
app.use(cors())


export const createPost = async (req: Request, res: Response): Promise<void> => {
    try {
       let message = "Success!"

 
       const { photo, description, type, authorId } = req.body

       const newCreatePost = new Post(photo, description, type)

 
       const postId: string = Date.now().toString()
 
       await connection("labook_posts")
          .insert({
             id:postId,
             photo: newCreatePost.setPhoto(),
             description: newCreatePost.setDescription(),
             type: newCreatePost.setType(),
             author_id: authorId
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 }
 