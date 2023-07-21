import User from "../models/User.js"

export async function getUser(req,res){
    try{
        const {id}=req.params
        const user =await User.findById(id)
        res.status(200).json(user)

    }catch(err){
        console.log("error",err.message)
        res.status(404).json(err)
    }
}


export async function getUserFriends(req,res){
    try{
        const {id}=req.params
        const user =await User.findById(id)
        const friends =await Promise.all(
            user.friends.map((id)=>User.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id,firstName,lastName,occupation,location,picturePath})=>{
                return {_id,firstName,lastName,occupation,location,picturePath}
            }
        )
        res.status(200).json(formattedFriends)

    }catch(err){
        res.status(404).json(err)
    }
}

export async function addRemoveFriends(req,res){
    try{
        const {id,friendId}=req.params
        const user =await User.findById(id)
        const friend =await User.findById(friendId)

        if(user.friends.includes(friendId)){
            user.friends =user.friends.filter((id)=>id!==friendId)
            friend.friends=friend.friends.filter((ID)=>ID!==id)
        }else{
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

        const friends =await Promise.all(
            user.friends.map((id)=>User.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id,firstName,lastName,occupation,location,picturePath})=>{
                return {_id,firstName,lastName,occupation,location,picturePath}
            }
        )
        res.status(200).json(formattedFriends)
    }catch(err){
        res.status(404).json(err)
    }
}

