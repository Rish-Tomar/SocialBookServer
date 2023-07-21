import  express from "express";
import { verifyToken } from "../config/authMiddleware.js";
import { addRemoveFriends, getUser, getUserFriends } from "../controllers/userController.js";
 
const Router =express.Router()

Router.get('/:id',verifyToken,getUser)
Router.get('/:id/friends',verifyToken,getUserFriends)

Router.patch('/:id/:friendId',verifyToken,addRemoveFriends)

export default Router