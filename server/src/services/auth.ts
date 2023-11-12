import {User} from "../types/global";
import {loadUserFile} from "../utils/data-io";

export const createUser = (user: User) => {
  loadUserFile(user)
}

export const updateUser = (user: User) => {
  loadUserFile(user)
}