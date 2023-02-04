import { connection } from "../dataBase/connection"
import  {Request, Response } from "express"
import express, { Express} from "express"
import cors from "express"
import { Users } from "../class/Users"

const app: Express = express()
app.use(express.json())
app.use(cors())


export const createUsers = async (req: Request, res: Response) => {
   try {
      let message = "Success!"
      const { name, email, password } = req.body

      const newUser = new Users(name, email, password)

      if (!name || !email || !password) {
         res.statusCode = 406
         message = '"name", "email" and "password" must be provided'
         throw new Error(message)
      }

      const id: string = Date.now().toString()

      await connection('labook_users')
         .insert({
            id,
            name: newUser.setName(),
            email: newUser.setEmail(),
            password: newUser.setPassword()
         })

      res.status(201).send({ message })

   } catch (error:any) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message
      res.send({ message })
   }
}