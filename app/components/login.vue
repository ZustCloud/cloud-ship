<script setup lang="ts">
import { ref } from 'vue';
import { useuserStore } from '../store/auth';
type PopmsgType = 'success' | 'warn' | 'error' | 'info' | undefined;

const id = ref<string>();
const password = ref<string>();

const userStore = useuserStore();

const popform = ref();
const popmsgType = ref<PopmsgType>('error');
const popmsgMessage = ref<string>();

const logining = ref(false);

const handleLogin = () => {
	const requestData = password.value
		? {
				id: id.value,
				password: password.value
		  }
		: undefined;

	logining.value = true;
	uni.request({
		method: 'POST',
		url: 'http://localhost:3000/auth/',
		data: requestData,
		success: r => {
			const msg = r.data[0];
			const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

			if (msg === 'user register successfully.' || msg === 'login successfully!') {
				// TODO 注册成功 || 登录成功
				popmsgType.value = 'success';
				popmsgMessage.value = '登录成功';

				userStore.id = id.value;
				userStore.password = password.value;
			} else if (msg === 'wrong password!') {
				popmsgMessage.value = '密码输入错误';
				// TODO 密码错误
			} else {
				popmsgMessage.value = '请正确输入学号/工号和密码';
			}
			popform.value.open();
			delay(2000).then(() => {
				logining.value = false;
				if (popmsgType.value === 'success') {
					uni.navigateTo({
						url: '/pages/home'
					});
				}
			});
		}
	});
};
</script>

<template>
	<view class="login" style="display: flex;flex-direction: column;align-items: center;">
		<image style="width: 100px; height: 100px; background-color: #eeeeee;margin-bottom: 40px;" src="../assets/appIcon.png"></image>
		<uni-forms>
			<uni-forms-item label="学号/工号:"><uni-easyinput type="text" placeholder="请输入您的学号/工号" :inputBorder="false" @input="e => (id = e)" /></uni-forms-item>
			<uni-forms-item label="密码:"><uni-easyinput type="password" placeholder="请输入密码" :inputBorder="false" @input="e => (password = e)" /></uni-forms-item>
			<view style="display: flex">
				<button :disabled="logining" size="mini" type="primary" @click="handleLogin">登入</button>
				<button size="mini">忘记密码</button>
			</view>
		</uni-forms>
		<uni-popup ref="popform" type="message"><uni-popup-message :type="popmsgType" :message="popmsgMessage" :duration="2000"></uni-popup-message></uni-popup>
	</view>
</template>

<style scoped></style>
