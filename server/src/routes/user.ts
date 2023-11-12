import express from "express";
import {UserController} from "../controller/user";

const userRouter = express.Router();

userRouter.get('/', UserController.getUserList)
userRouter.get('/:id', UserController.getUser)

export default userRouter;