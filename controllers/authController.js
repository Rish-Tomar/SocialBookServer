import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'


/* Register/SignUp  User */
export async function register(req,res){
    try{
        console.log("req.body",req.body,"req.file:",req.file)
        const {password} =req.body
        const salt =await bcrypt.genSalt()
        const passwordHashed =await bcrypt.hash(password,salt)
        const newUser =await User.create({...req.body,password:passwordHashed})
        res.status(201).json({
            message:"user created",
            user:{id:newUser.id,email:newUser.email}
        })
    }catch(err){
        console.log("Error",err)
        res.status(421).json(err)
    }
}

export async function login(req,res){
    try{
        const {email,password}=req.body
        const user = await User.findOne({email:email})
        if(!user)
            return res.status(404).json({error:"User not found"})
        const isPasswordMatched =await bcrypt.compare(password,user.password)
        if(!isPasswordMatched)
            return res.status(404).json({error:"Invalid Password"})
        
        const token =jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:"300s"})
        delete user.password
        res.status(200).json({token,user})

    }catch(err){
        console.log("Error",err)
        res.status(421).json(err)
    }
}