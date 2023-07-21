
import  express from "express";
import { login, register } from "../controllers/authController.js";

import upload from "../config/multer.js";
const Router =express.Router()


Router.post('/register',upload.single('picture'),register)
Router.get('/register',(req,res)=>{
    res.end("please use post request")
})
.post('/login',login)

export default Router