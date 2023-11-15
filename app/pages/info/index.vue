<template>
	<view class="content">
		<userForm :userId="id" :password="password"></userForm>
	</view>
</template>

<script setup>
	import userForm from '../../components/userForm.vue'

	import {
		ref,
		provide
	} from 'vue'

	// 依赖注入,当type的值为"detailed"显示详细的信息,其他情况都是缩略信息
	provide("type", 'detaile')
	// 依赖注入,当mode的值为"edit"可编辑信息,其他情况都是缩略信息
	provide("mode", 'edit')
	const id = ref('1210201123')
	const password = ref('12')
</script>

<style>
	.content {
		padding: 10%;
		width: 80%;
		height: 100%;
	}
</style>
