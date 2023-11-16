<template>
	<view>
		<uni-forms class="userform">
			<uni-forms-item label="姓名" name="name"><uni-easyinput type="text" placeholder="请输入姓名" /></uni-forms-item>
			<uni-forms-item label="年龄" name="age"><input type="text" placeholder="请输入年龄" /></uni-forms-item>
			<div style="height: 200px">{{ user.value }}</div>
		</uni-forms>
		<button @click="fetchLegecyUserInfo()">Submit</button>
	</view>
</template>
<script setup lang="ts">
import { defineProps, reactive } from 'vue';
import { User } from './user-form/types';
interface IProps {
	user: User;
}
const props = defineProps<IProps>();
const user = reactive({});
const fetchLegecyUserInfo = () => {
	uni.request({
		url: `http://localhost:3000/user/1210201123`,
		method: 'GET',
		success: res => {
			// @ts-ignore
			user.value = res.data.data;
		}
	});
};
</script>
<style scoped>
.userform {
	border: 1px solid black;
}
</style>
