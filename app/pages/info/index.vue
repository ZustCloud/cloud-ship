<template>
	<view class="content">
		<userForm :userId="id" :password="password" :mode="mode"></userForm>
	</view>
</template>

<script setup>
	import userForm from '../../components/userForm.vue'

	import {
		ref,
		provide
	} from 'vue'

	// 当type的值为"detailed"显示详细的信息,其他情况都是缩略信息
	// 当mode的值为"edit"可编辑信息,其他情况都是缩略信息
	const mode = ref('edit')
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
