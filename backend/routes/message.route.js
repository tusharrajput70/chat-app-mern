import express, { Router } from 'express'
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js'

const router=express.Router();

//for getting message between current user and /:id user.
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);
export default router;