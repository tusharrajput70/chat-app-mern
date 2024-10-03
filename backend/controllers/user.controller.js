import User from "../models/user.model.js";

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;

        //                                  all ids but (ne) not equal to loggedInUserId
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar Controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}