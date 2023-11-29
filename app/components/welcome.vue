<script setup lang="ts">
const handleclick = () => {
	uni.navigateTo({
		url: '/pages/register'
	});
};
</script>

<template>
	<view>
		<img src="../assets/appicon.png" style="width: 200px;height: 200px;margin-left: 100px;" />
		<p>欢迎来到云社(Cloud-Ship)</p>
	</view>
</template>

<style></style>
