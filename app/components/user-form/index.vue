<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { User } from './types';

const props = defineProps<{id: string, type?: 'new' | 'modify' | 'readonly', finish: () => void}>();
const user = ref<User>({} as User);

// fetch user info
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

onMounted(()=>{
  fetchLegecyUserInfo()
})
</script>

<template>
  <view>
    <uni-forms v-if="user.details">
      <uni-forms-item>

      </uni-forms-item>
      <uni-forms-item label="姓名"><uni-easyinput type="text" placeholder="输入您的姓名" /></uni-forms-item>
      <uni-forms-item label="学号"><uni-easyinput type="text" placeholder="您的学号" /></uni-forms-item>
      <uni-forms-item label="性别"><uni-easyinput v-model="user.details.sex" type="text" placeholder="选择您的性别" /></uni-forms-item>
      <uni-forms-item label="生日"><uni-datetime-picker placeholder="选择您的生日" type="date" v-model="user.details.birthday"/></uni-forms-item>
      <uni-forms-item label="班级"><uni-easyinput v-model="user.details.classNo" type="text" placeholder="输入您的班级" /></uni-forms-item>
      <uni-forms-item label="寝室号"><uni-easyinput v-model="user.details.roomNo" type="text" placeholder="输入您的寝室号" /></uni-forms-item>
      <view style="display: flex">
        <button size="mini" type="primary">提交</button>
        <button size="mini" @click="props.finish">取消</button>
      </view>
    </uni-forms>
  </view>
</template>
