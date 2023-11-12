import {Request, Response} from "express";
import {queryUser, queryUsers} from "../services/user";
import {UsersQueryInfo} from "../types/global";

export class UserController {
  static async getUserList(req: Request, res: Response) {
    const query = {...req.query} as UsersQueryInfo
    queryUsers(query).then((r) => {
      res.status(200).send(r)
    })
  }

  static async getUser(req: Request, res: Response) {
    const query = {
      id: req.params?.id
    } as UsersQueryInfo
    queryUser(query).then(r => {
      res.status(200).send(r)
    })
  }
}