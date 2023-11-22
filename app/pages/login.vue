<script setup lang="ts">
import login from '../components/login.vue';
</script>
<template>
	<view class="loginPage">
		<h1 class="title"></h1>
		<login></login>
	</view>
</template>

<style>
.loginPage {
	padding-top: 30%;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title {
}
</style>
