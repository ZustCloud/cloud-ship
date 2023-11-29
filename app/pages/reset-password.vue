<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useuserStore } from '../store/auth';
import { ILoginFormData } from '../api/user/type';
type PopmsgType = 'success' | 'warn' | 'error' | 'info' | undefined;

const userStore = useuserStore();

const popform = ref();
const popmsgType = ref<PopmsgType>('error');
const popmsgMessage = ref<string>();

const formRole = ref();
const form: ILoginFormData = reactive({ id: '', password: '' });
const registering = ref(false);

const handleLogin = () => {
	formRole.value.validate((error: string) => {
		if (!error && form.id && form.password) {
			//TODO 表单验证通过
			registering.value = true;
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
				<button :disabled="registering" size="mini" type="primary" @click="handleLogin">登入</button>
				<button size="mini">忘记密码</button>
			</view>
		</uni-forms>
		<uni-popup ref="popform" type="message"><uni-popup-message :type="popmsgType" :message="popmsgMessage" :duration="2000"></uni-popup-message></uni-popup>
	</view>
</template>

<style scoped></style>
