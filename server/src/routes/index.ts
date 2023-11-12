import express, {Request, Response} from "express";
import authRouter from "./auth";
import userRouter from "./user";

const router = express.Router();

router.use('/auth', authRouter)
router.use('/user', userRouter)

router.get('/', (req: Request, res: Response) => {
  res.send({data: "Alive"})
})

export default router;