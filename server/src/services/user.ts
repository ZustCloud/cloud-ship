import {User, UsersQueryInfo} from "../types/global";
import {getUserFile, getUsersFile, loadUserFile} from "../utils/data-io";

export const queryUsers = async (query: UsersQueryInfo) => {
  const IDs = getUsersFile()
  const data: User[] = []
  for (let i = 0; i < IDs.length; i++) {
    getUserFile(IDs[i]).then(r => {
      delete r.password
      data.push(r)
    })
  }
  return {indexList: getUsersFile(), data}
}

export const queryUser = async (query: UsersQueryInfo) => {
  let data = {} as User
  await getUserFile(query.id as string).then(r => {
    delete r.password
    data = r
  })
  return {data}
}
