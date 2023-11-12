import fs from 'fs';
import {User} from "../types/global";

export const loadDir = async (folderName: string): Promise<boolean> => {
  // 判断是否已有文件夹
  let isExist;
  fs.access(`data/${folderName}`, fs.constants.F_OK, err => {
    isExist = !err;
  })
  if (isExist) return true;

  // 创建文件夹
  let success = false;
  fs.mkdir(`data/${folderName}`, err => {
    success = !err;
  })
  return success;
}

export const loadUserFile = (user: User) => {
  let result = true;

  // add item to user.json
  if (!fs.existsSync(`data/list/users.json`)) {
    fs.writeFileSync(`data/list/users.json`, JSON.stringify([user.id]));
  } else {
    fs.readFile(`data/list/users.json`, 'utf-8', (err, jsonString) => {
      try {
        let data = JSON.parse(jsonString);
        if (data.indexOf(user.id) === -1) {
          data.push(user.id)
          fs.writeFileSync(`data/list/users.json`, JSON.stringify(data));
        }
      } catch (err) {
        console.error('parse list/users/json failed', err)
        result = false;
      }
    })
  }

  // create user-id json
  fs.writeFileSync(`data/user/id-${user.id}.json`, JSON.stringify(user));
  return result
}

export const getUserFile = async (id: string | number): Promise<User> => {
  // 若不存在返回空
  let user: User = {id: id as string} as User;
  const f = fs.existsSync(`data/user/id-${id}.json`)
  if (!f) return {id: id as string} as User

  let path = `data/user/id-${id}.json`;
  const data = fs.readFileSync(path, 'utf-8')
  return JSON.parse(data) as User
}

export const getUsersFile = () => {
  let path = `data/list/users.json`;
  const data = fs.readFileSync(path, 'utf-8')
  return JSON.parse(data)
}
