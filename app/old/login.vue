<script setup lang="ts">
import { ref } from 'vue';
import { useuserStore } from '../store/auth';

type PopupType = 'success' | 'warn' | 'error' | 'info' | undefined;

const popform = ref();
const popMsg = ref();

const id = ref<string>();
const password = ref<string>();

const authStore = useuserStore();

const check = () => {
	uni.request({
		method: 'POST',
		url: 'http://localhost:3000/auth/',
		data: {
			id: id.value,
			password: password.value
		},
		success: res => {
			const msg = res.data.message;
			if (msg === 'user register successfully.') {
				// TODO 注册成功
				message('success', '账号注册成功，请去登入');
				authStore.id = id.value;
				authStore.password = password.value;
				uni.navigateTo({
					url: '/pages/home'
				});
			} else if (msg === 'wrong password!') {
				message('error', '密码输入错误');
				// TODO 密码错误
			} else if (msg === 'login successfully!') {
				// TODO 登录成功
				authStore.id = id.value;
				authStore.password = password.value;
				uni.navigateTo({
					url: '/pages/home'
				});
			} else {
				console.log(`错误为：${res.data[0]}`);
			}
		}
	});
};

const message = (type: PopupType, text: string) => {
	popMsg.value.type = type;
	popMsg.value.message = text;
	popform.value.open();
};
</script>

<template>
	<view class="loginCp">
		<h1 class="title">登入</h1>
		<view class="inputPart">
			<uni-section class="accountInput" title="账号:" titleFontSize="16px"><uni-easyinput placeholder="请输入学号/工号" @input="e => (id = e)"></uni-easyinput></uni-section>
			<uni-section class="accountInput" title="密码:" titleFontSize="16px">
				<uni-easyinput type="password" placeholder="请输入密码" @input="e => (password = e)"></uni-easyinput>
			</uni-section>
		</view>
		<button
			class="loginButton"
			@click="
				() => {
					check();
				}
			"
		>
			登入
		</button>
		<uni-popup ref="popform" type="message"><uni-popup-message ref="popMsg" :duration="2000"></uni-popup-message></uni-popup>
	</view>
</template>

<style>
.loginCp {
	width: 70%;
	display: flex;
	flex-direction: column;
	/* align-items: flex-start; */
}

.inputPart {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	height: 200px;
}

.accountInput {
	width: 100%;
}

.title {
	font-size: 28px;
	border-color: red;
}

.loginButton {
	margin-top: 50px;
	width: 80px;
	background-color: #c94e60;
	color: white;
	font-weight: 500;
}

.accountInput {
	width: 100%;
}

.forgetPassword {
	margin-top: 15px;
	width: 80px;
	height: 28px;
	font-size: 14px;
	color: #c94e60;
}
</style>
