<script setup lang="ts">
import ImageUploader from '../components/image-uploader';
import { useuserStore } from '../store/auth';
const userStore = useuserStore();
</script>

<template>
	<uni-card>
		<uni-forms>
			<div style="display: flex; flex-direction: column; align-items: center; margin: 15px 0;"><image-uploader size="60px"></image-uploader></div>
			<uni-forms-item label="学号"><uni-easyinput type="text" placeholder="您的学号" v-model="userStore.id" disabled="" /></uni-forms-item>
			<uni-forms-item label="姓名"><uni-easyinput type="text" placeholder="输入您的姓名" /></uni-forms-item>
			<uni-forms-item label="性别"><uni-easyinput type="text" placeholder="选择您的性别" /></uni-forms-item>
			<uni-forms-item label="TEL"><uni-easyinput type="text" placeholder="输入您的手机号" /></uni-forms-item>
			<uni-forms-item label="班级"><uni-easyinput type="text" placeholder="输入您的班级" /></uni-forms-item>
		</uni-forms>
	</uni-card>
</template>

<style></style>
