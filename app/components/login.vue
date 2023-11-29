<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useuserStore } from '../store/auth';
import { ILoginFormData } from '../api/user/type';
import { reqLogin } from '../api/user/index';
type PopmsgType = 'success' | 'warn' | 'error' | 'info' | undefined;

const userStore = useuserStore();

const popform = ref();
const popmsgType = ref<PopmsgType>('error');
const popmsgMessage = ref<string>();

const formRole = ref();
const form: ILoginFormData = reactive({ id: '', password: '' });
const logining = ref(false);

const handleLogin = () => {
	formRole.value.validate((error: string) => {
		if (!error && form.id && form.password) {
			//TODO 表单验证通过
			logining.value = true;
			const data: ILoginFormData = {
				id: form.id,
				password: form.password
			};
			reqLogin(data).then(r => {
				const msg = r.message;
				const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
				if (msg === 'user register successfully.' || msg === 'login successfully!') {
					// TODO 注册成功 || 登录成功
					popmsgType.value = 'success';
					popmsgMessage.value = '登录成功';

					userStore.id = form.id;
					userStore.password = form.password;
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
							url: '/pages/welcome'
						});
					}
				});
			});
		}
	});
};

const idPattern = '[0-9]{10}';
const passwordPattern = '\\w{6}';
</script>

<template>
	<view class="login" style="display: flex;flex-direction: column;align-items: center;">
		<image style="width: 100px; height: 100px; background-color: #eeeeee;margin-bottom: 40px;" src="../assets/appIcon.png"></image>
		<uni-forms :model="form" ref="formRole" validateTrigger="blur">
			<uni-forms-item label="学号/工号:" name="id" :rules="[{ pattern: idPattern, errorMessage: '学号/工号类型是数字且长度为10' }]">
				<uni-easyinput type="text" placeholder="请输入您的学号/工号" :inputBorder="false" v-model="form.id" />
			</uni-forms-item>
			<uni-forms-item label="密码:" name="password" :rules="[{ pattern: passwordPattern, errorMessage: '密码的长度至少为6' }]">
				<uni-easyinput type="password" placeholder="请输入密码" :inputBorder="false" v-model="form.password" />
			</uni-forms-item>
			<view style="display: flex">
				<button :disabled="logining" size="mini" type="primary" @click="handleLogin">登入</button>
				<button size="mini">忘记密码</button>
			</view>
		</uni-forms>
		<uni-popup ref="popform" type="message"><uni-popup-message :type="popmsgType" :message="popmsgMessage" :duration="2000"></uni-popup-message></uni-popup>
	</view>
</template>

<style scoped></style>
