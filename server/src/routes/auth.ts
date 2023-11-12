import express from "express";
import {AuthController} from "../controller/auth";

const authRouter = express.Router();

authRouter.post('/', AuthController.auth)
authRouter.post('/update', AuthController.update)

export default authRouter;