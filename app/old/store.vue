<script setup lang="ts">
import { useauthStore } from '../store/auth';
import { ref } from 'vue'

const authStore = useauthStore()
const id = ref<string>();
const form = ref(null);

const pageTo = () => {
	uni.navigateTo({
		url: '/pages/sub-store'
	})
}
</script>

<template>
	<uni-card>
		<div>id is {{ id }}</div>
		<div>store id is: {{ authStore.id }}</div>
		<div style="margin-bottom: 10px;">store password is: {{ authStore.password }}</div>
		<uni-easyinput ref="form" v-model="id" style="margin-bottom: 10px;"></uni-easyinput>
		<button style="margin-bottom: 10px;" @click="authStore.id = id">修改 id</button>
		<button @click="pageTo">去另一页</button>
	</uni-card>
	
</template>

<style scoped lang="scss">

</style>