import Jwt from "jsonwebtoken";

export async function verifyToken(req,res,next){
    try{
        let token = req.header("Authorization")

        if(!token)
            return res.status(404).send("Access Denied")
        if(token.startsWith("Bearer"))
            token=token.slice(7,token.length).trimLeft()
        
        const verified= Jwt.verify(token,process.env.JWT_SECRET)
        console.log("Verified",token,verified)
        req.user =verified
        next()
    }catch(err){

    }
}