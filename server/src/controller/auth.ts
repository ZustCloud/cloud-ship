import {Request, Response} from "express";
import {getUserFile} from "../utils/data-io";
import {User} from "../types/global";
import {createUser, updateUser} from "../services/auth";

export class AuthController {
  static async auth(req: Request, res: Response) {
    let form = req.body as User
    getUserFile(form.id).then((data) => {
      if (data.password !== undefined) {
        // 已注册
        if (form.password === data.password) {
          res.status(200).json({message: "login successfully!"})
        } else {
          res.status(200).json({message: "wrong password!"})
        }
      } else {
        // 未注册
        if (form.password !== undefined) {
          createUser(form)
          res.status(200).json({message: "user register successfully."})
        } else {
          res.status(200).json({message: "user not registered, please put-in password."})
        }
      }
    })
  }

  static async update(req: Request, res: Response) {
    let form = req.body as User
    getUserFile(form.id).then((data) => {
      if (data.password !== undefined) {
        if (form.password === data.password) {
          updateUser(form)
          res.status(200).json({message: "update successfully!"})
        } else {
          res.status(200).json({message: "wrong password!"})
        }
      } else {
        res.status(200).json({message: "user not registered, please register first."})
      }
    })
  }
}