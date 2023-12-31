import  express from "express";
import Auth from './auth.js'
import User from './user.js'
import Posts from './posts.js'

const Router =express.Router()

Router.use('/auth',Auth)
Router.use('/user',User)
Router.use('/posts',Posts)
Router.get('/',(req,res)=>{
    res.status(200).json({
        message:"You landed on home page"
    })
})

export default Router