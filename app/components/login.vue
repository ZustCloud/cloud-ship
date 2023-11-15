<template>
	<view class="loginCp">
		<h1 class="title">登入</h1>
		<view class="inputPart">
			<uni-section class="accountInput" title="账号:" titleFontSize="16px"><uni-easyinput placeholder="请输入学号/工号" @input="accountChange"></uni-easyinput></uni-section>
			<uni-section class="accountInput" title="密码:" titleFontSize="16px">
				<uni-easyinput type="password" placeholder="请输入密码" @input="passwordChange"></uni-easyinput>
			</uni-section>
			<!-- <text class="forgetPassword" @click="forgetPassword">忘记密码？</text> -->
		</view>
		<button class="loginButton" @click="login">登入</button>
		<view>
			<uni-popup ref="alertDialog" type="message">
				<uni-popup-message :style="{ color: msgType == 'success' ? 'green' : 'red' }" :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';

const currentInstance = getCurrentInstance();

let msgType = ref();
let messageText = ref();
let id = ref('');
let password = ref('');

const accountChange = event => {
	id.value = event;
};
const passwordChange = event => {
	password.value = event;
};
const forgetPassword = () => {};
const login = () => {
	if (id.value.length > 0 && password.value.length > 0) {
		check();
	}
};
const check = () => {
	uni.request({
		url: 'http://localhost:3000/auth/',
		method: 'POST',
		data: {
			id: id.value,
			password: password.value
		},
		header: {
			'Content-Type': 'application/json'
		},
		success: res => {
			userPocess(res.data.message);
		}
	});
};
const userPocess = message => {
	if (message === 'user register successfully.') {
		messageToggle('success', '账号注册成功，请去登入');
		// console.log("注册成功")
	} else if (message === 'wrong password!') {
		messageToggle('error', '密码输入错误');
		// console.log("密码错误")
	} else if (message === 'login successfully!') {
		uni.navigateTo({
			url: '/pages/home/index'
		});
		// console.log("账号登入成功")
	} else {
		console.log(`错误为：${res.data.error}`);
	}
};
const messageToggle = (type, info) => {
	msgType.value = type;
	messageText.value = info;
	currentInstance.ctx.$refs.alertDialog.open();
};
</script>

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
