<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';
//引入Tabbar 组件
import Tabbar from '../../components/tabbar.vue';
//引入pinyin插件
import pinyin from 'js-pinyin';
const rawUsers = ref([]);
const users = computed(() => {
	// 创建一个空对象用于存储按首字母归类的数据
	const classifiedData = {};

	rawUsers.value.forEach(i => {
		const firstLetter = pinyin.getFullChars(i.details.name)[0][0].toUpperCase();
		if (classifiedData[firstLetter]) {
			// 如果已经存在该首字母的数据，则将当前数据添加到对应的数组中
			classifiedData[firstLetter].push(i.details.name);
		} else {
			// 如果不存在该首字母的数据，则创建一个新数组，并将当前数据添加进去
			classifiedData[firstLetter] = [i.details.name];
		}
	});

	// 将归类后的数据转换为数组形式，并按照首字母排序
	return Object.entries(classifiedData)
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map(([letter, data]) => ({
			letter,
			data
		}));
});
// const userList= computed(()=>{
// 	return rawUsers.value.map(i =>){

// 	}
// })
const fetchUserList = async () => {
	const config = {
		method: 'get',
		url: 'http://localhost:3000/user?details=true'
	};

	return axios(config).then(r => {
		rawUsers.value = r.data.data;
	});
};
const bindListClick = e => {
	console.log('点击item，返回数据' + JSON.stringify(e));
};

fetchUserList();
</script>

<template>
	<div class="">
		<uni-indexed-list :options="users" :showSelect="false" @click="bindListClick"></uni-indexed-list>
		<Tabbar></Tabbar>
	</div>
</template>

<style scoped></style>
