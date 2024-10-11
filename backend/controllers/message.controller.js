import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;

        //reciever id
        const {id:recieverId}=req.params;
        //sender id
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]},
        });

        //they are talking for the very first time
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,recieverId],
            });
        }
        const newMessage=new Message({
            senderId,
            recieverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO Functionality

        //this will run in serial manner.
        // await conversation.save();
        // await newMessage.save();
        
        //whereas this will run in parallel.
        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage Controller: ",error.message);
        res.status(500).json({error:"Internal server error messageController"});
    }
}

export const getMessages=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        //as we are storing messages id inside conversation model. to enlarge or elaborate/open them we are using populate method.
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages");    //NOT REFERENCE BUT ACTUAL MESSAGES
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages=conversation.messages;
        return res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages Controller: ",error.message);
        return res.status(500).json({error:"Internal server error"});
    }
}