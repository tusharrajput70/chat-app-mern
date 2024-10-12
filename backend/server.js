import express from 'express';
import dotenv from 'dotenv';
//for accessing cookies in (protectRoute middleware)
import cookieParser from 'cookie-parser';


import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';


import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';


const PORT=process.env.PORT||5000;

 
dotenv.config();
app.use(express.json());    //allows us to parse incoming request with json payloads(extract req.body) fields
app.use(cookieParser());    //to parse incomming cookies from req.cookies.

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.get("/",(req,res)=>{
    //root route
    res.send("Hello World!");
});

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});