// 请求服务器地址
const baseURL = 'http://localhost:3000'
// 向外暴露一个方法 myRequest
export const Http = (url : string, data : object = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method: data ? 'POST' : 'GET',
			data: data,
			success: (r) => {
				resolve(r.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
};