<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';
//引入组件
import Tabbar from '../../components/tabbar.vue';
import UserForm from '../../components/user-form.vue';
//引入pinyin插件
import pinyin from 'js-pinyin';
import { User } from '../../components/user-form/types';
//是否注册过个人信息
const userId = '12102414'; //根据学号判断有无注册
const rawUsers = ref([]);
const isRegisterUserinfo = async () => {
	let url = `http://localhost:3000/user/${userId}`;
	const config = {
		method: 'get',
		url: url
	};
	return axios(config).then(response => {
		if (response.data.data.details == undefined) {
			bindListClick();
		}
		console.log(response.data.data.details);
	});
};
const users = computed(() => {
	const usersList = {};
	rawUsers.value.forEach(i => {
		if (i.details != undefined) {
			const firstLetter = pinyin.getFullChars(i.details.name)[0][0].toUpperCase(); //获取汉字全拼音
			if (usersList[firstLetter]) {
				// 如果已经存在该首字母的数据，则将当前数据添加到对应的数组中
				usersList[firstLetter].push(i.details.name);
			} else {
				// 如果不存在该首字母的数据，则创建一个新数组，并将当前数据添加进去
				usersList[firstLetter] = [i.details.name];
			}
		}
	});

	// 将归类后的数据转换为数组形式，并按照首字母排序
	return Object.entries(usersList)
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map(([letter, data]) => ({
			letter,
			data
		}));
});
const fetchUserList = async () => {
	const config = {
		method: 'get',
		url: 'http://localhost:3000/user?details=true'
	};

	return axios(config).then(r => {
		rawUsers.value = r.data.data;
	});
};
const popup = ref();
const bindListClick = () => {
	popup.value.open('center');
	console.log('1');
};
const closePopup = () => {
	popup.value.close();
};
fetchUserList();
isRegisterUserinfo();
</script>

<template>
	<view>
		<view class="usersList"><uni-indexed-list :options="users" :showSelect="false" @click="bindListClick"></uni-indexed-list></view>
		<uni-popup ref="popup" :mask-click="false"><UserForm @update:userinfo="closePopup" :user="{ id:userId } as User"></UserForm></uni-popup>
		<Tabbar></Tabbar>
	</view>
</template>

<style scoped></style>
