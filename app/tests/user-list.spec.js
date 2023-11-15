const axios = require('axios')

const getUserList = async () => {
	config = {
		method: 'get',
		url: 'http://localhost:3000/user?details=true',
	}

	return axios(config).then((r) => {
		const d = r.data
		return computedList(d.data);
	})
}

const computedList = (data) => {
	return data.map((i) => {
		return {
			'letter': [i.id],
			'data': [i.id]
		}
	})
}

test(`get user list computed`, async () => {
	const res = await getUserList()
	console.log(res);
})