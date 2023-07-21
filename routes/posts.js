import  express from "express";
import { verifyToken } from "../config/authMiddleware.js";
import upload from "../config/multer.js";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/postsController.js";

const Router =express.Router()

Router.post('/create-post',verifyToken,upload.single('picture'),createPost)

Router.get('/',verifyToken,getFeedPosts)
Router.get('/:userId/posts',verifyToken,getUserPosts)
Router.patch('/:id/likes',verifyToken,likePost)

export default Router