test('我测试求和', () => {
	expect(sum(1, 10)).toEqual(11)
})

const sum = (a, b) => {
	return a + b
}