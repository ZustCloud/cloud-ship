//登录接口需要携带的参数
export interface ILoginFormData {
	id : string,
	password : string
}
//获取用户信息返回的类型
export interface IFetchUserInfo {
	id : string,
	password ?: string,
	details ?: IUserInfo
}

export interface IUserInfo {
	name ?: string,
	phone ?: string,
	email ?: string,
	sex ?: string,
	classNo ?: string,
	birthday ?: string,
	wechat ?: string,
	QQ ?: string,
	resume ?: string,
	roomNo ?: string
}

export interface IUsersQueryInfo {
	id : string,
	password ?: string
}