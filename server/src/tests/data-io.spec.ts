import {getUserFile, getUsersFile, loadDir} from "../utils/data-io";
import {loadUserFile} from "../utils/data-io";


test(`create user dir`, () => {
  loadDir('user').then((res) => {
    expect(res).toEqual(false)
  })
})

test(`create user-list dir`, () => {
  loadDir('list').then((res) => {
    expect(res).toEqual(false)
  })
})

test(`create user & write list`, () => {
  const res = loadUserFile({
    id: '1210201029',
    password: '123456'
  })
  expect(res).toEqual(true)
})

test(`get user file`, () => {
  getUserFile(1210201029).then((res) => {
    expect(res).toEqual({
      id: '1210201029',
      password: '123456'
    })
  })
})

test(`get user list`, () => {
  console.log(getUsersFile())
})