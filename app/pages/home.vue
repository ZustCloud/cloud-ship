<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Tabbar from '../components/tabbar.vue';
import UserForm from '../components/user-form/index.vue';
import pinyin from 'js-pinyin';
import { IFetchUserInfo } from '../api/user/type';
import { useuserStore } from '../store/auth';

const userId = '12102414';
const rawUsers = ref([]);
const form = ref();
const authStore = useuserStore();

const isRegisterUserinfo = async () => {
	const config = {
		method: 'get',
		url: `http://localhost:3000/user/${userId}`
	};
	return axios(config).then(res => {
		if (res.data.data.details == undefined) {
			form.value.open('center');
		}
	});
};

const users = computed(() => {
	const usersList = {};
	rawUsers.value.forEach((i: IFetchUserInfo) => {
		if (i.details != undefined) {
			const letter = pinyin.getFullChars(i.details.name)[0][0].toUpperCase(); //获取汉字全拼音
			if (usersList[letter]) {
				usersList[letter].push(i.details.name);
			} else {
				usersList[letter] = [i.details.name];
			}
		}
	});
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
onMounted(() => {
	fetchUserList();
	isRegisterUserinfo();
});
</script>

<template>
	<view>
		<view class="usersList"><uni-indexed-list :options="users" :showSelect="false" @click="form.open('center')"></uni-indexed-list></view>
		<uni-popup ref="form" :mask-click="false">
			<uni-card><UserForm :finish="form.close" :id="userId" /></uni-card>
		</uni-popup>
		<Tabbar></Tabbar>
	</view>
</template>

<style scoped></style>
