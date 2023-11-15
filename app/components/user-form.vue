<template>
	<view>
		<uni-forms class="userform">
			<uni-forms-item label="姓名" name="name"><uni-easyinput type="text" placeholder="请输入姓名" /></uni-forms-item>
			<uni-forms-item label="年龄" name="age"><input type="text" placeholder="请输入年龄" /></uni-forms-item>
		</uni-forms>
		<button @click="updateUserInfo">Submit</button>
	</view>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['update:userinfo']);
const updateUserInfo = () => {
	emit('update:userinfo');
};
</script>
<style scoped>
.userform {
	border: 1px solid black;
}
</style>
