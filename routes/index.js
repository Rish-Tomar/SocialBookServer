import  express from "express";
import Auth from './auth.js'
import User from './user.js'
import Posts from './posts.js'

const Router =express.Router()

Router.use('/auth',Auth)
Router.use('/user',User)
Router.use('/posts',Posts)

export default Router