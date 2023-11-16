export interface User {
	id : string,
	password ?: string,
	detail ?: UserDetail
}

export interface UserDetail {
	name ?: string,
	phone ?: string,
	email ?: string,
	sex ?: string,
	classNo ?: string,
	birthday ?: string,
	wechat ?: string,
	QQ ?: string,
	resume ?: string,
}

export interface UsersQueryInfo {
	id ?: string,
	details ?: boolean,
}