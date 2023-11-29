<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IFetchUserInfo } from '../../api/user/type';
import { UserInfoType } from './types';
import ImageUploader from '../image-uploader.vue';

const props = defineProps<{ id: string; type?: UserInfoType; finish: () => void }>();
const user = ref<IFetchUserInfo>({} as IFetchUserInfo);

// fetch user info
const fetchLegecyUserInfo = () => {
	uni.request({
		url: `http://localhost:3000/user/${props.id}`,
		method: 'GET',
		success: r => {
			user.value = r.data.data;
		}
	});
};
onMounted(() => {
	fetchLegecyUserInfo();
});
</script>

<template>
	<view>
		<uni-forms v-if="user.details">
			<div style="display: flex; flex-direction: column; align-items: center; margin: 15px 0;"><image-uploader size="60px"></image-uploader></div>
			<uni-forms-item label="姓名"><uni-easyinput type="text" placeholder="输入您的姓名" v-model="user.details.name" /></uni-forms-item>
			<uni-forms-item label="学号"><uni-easyinput type="text" placeholder="您的学号" v-model="user.id" /></uni-forms-item>
			<uni-forms-item label="TEL"><uni-easyinput type="text" placeholder="输入您的手机号" v-model="user.details.phone" /></uni-forms-item>
			<uni-forms-item label="生日">
				<picker mode="date" :value="user.details.birthday" :start="`2001-01-01`" :end="`2005-12-31`" @change="e => (user.details.birthday = e.detail.value)">
					<uni-easyinput :placeholder="user.details.birthday || '请选择您的生日'" />
				</picker>
			</uni-forms-item>
			<uni-forms-item label="班级"><uni-easyinput type="text" placeholder="输入您的班级" v-model="user.details.classNo" /></uni-forms-item>
			<uni-forms-item label="寝室号"><uni-easyinput type="text" placeholder="输入您的寝室号" v-model="user.details.roomNo" /></uni-forms-item>
			<view style="display: flex">
				<button size="mini" type="primary">提交</button>
				<button size="mini" @click="props.finish">取消</button>
			</view>
		</uni-forms>
	</view>
</template>
