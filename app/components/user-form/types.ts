export interface User {
	id: string;
	password?: string;
	detail?: UserDetail;
}

export interface UserDetail {
	name?: string;
	phone?: string;
	email?: string;
	sex?: string;
	classNo?: string;
	birthday?: string;
	wechat?: string;
	QQ?: string;
	resume?: string;
}

export const USER_DETAIL_FORM_FIELDS: string[] = ['name', 'sex', 'classNo', 'Sroom', 'phone', 'email', 'birthday', 'wechat', 'QQ', 'resume']

export interface UsersQueryInfo {
	id?: string;
	details?: boolean;
}