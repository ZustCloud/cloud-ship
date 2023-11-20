<script setup lang="ts">
import { ref } from 'vue';
import UniPopupMessage from '../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue';
import { useauthStore } from '../store/auth';
type PopupType = 'success' | 'warn' | 'error' | 'info' | undefined;

const popform = ref(null);
const popMsg = ref(null);

const id = ref('');
const password = ref('');

const authStore = useauthStore();

const handleClick = () => {
	if (id.value && password.value) {
		check();
	}
};

const check = () => {
	console.log(authStore.id, authStore.password);
	uni.request({
		method: 'POST',
		url: 'http://localhost:3000/auth/',
		data: {
			id: id.value,
			password: password.value
		},
		success: res => {
			const msg = res.data.message;
			console.log(msg);
			uni.navigateTo({
				url: '/pages/home'
			});
			if (msg === 'user register successfully.') {
				// TODO 注册成功
				message('success', '账号注册成功，请去登入');
			} else if (msg === 'wrong password!') {
				message('error', '密码输入错误');
				// TODO 密码错误
			} else if (msg === 'login successfully!') {
				// TODO 登录成功
				uni.navigateTo({
					url: '/pages/home'
				});
			} else {
				console.log(`错误为：${res.data.error}`);
			}
		}
	});
};

const message = (type: PopupType, text: string) => {
	console.log(popform, `1123213`);
	// popupMsg.value.type = type
	// popupMsg.value.message = text
	popform.open();
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
		<uni-popup ref="popform" type="message"><uni-popup-message ref="popMsg"></uni-popup-message></uni-popup>
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

∑∑ .forgetPassword {
	margin-top: 15px;
	width: 80px;
	height: 28px;
	font-size: 14px;
	color: #c94e60;
}
</style>
