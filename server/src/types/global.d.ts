export interface User {
  id: string,
  password?: string,
  detail?: UserDetail
}

export interface UserDetail {
  name?: string,
  phone?: string,
}

export interface UsersQueryInfo {
  id?: string,
  details?: boolean,
}