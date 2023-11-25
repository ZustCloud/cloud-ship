import type { ILoginFormData, IFetchUserInfo } from './type';
import { Http } from '../../utils/request';
//统一管理接口
enum API {
	LOGIN_URL = '/auth/',
	UERINFO_URL = '/auth/update',
}
export const reqLogin = (data : ILoginFormData) => {
	return Http(API.LOGIN_URL, data);
}
export const fetchUserInfo = (data : IFetchUserInfo) => {
	return Http(API.UERINFO_URL, data);
}