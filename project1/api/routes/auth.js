import express from "express"
import { register, login } from "../controllers/auth.js"
const router = express.Router()

router.get("/register", register)
      .get("/login", login)


export default router