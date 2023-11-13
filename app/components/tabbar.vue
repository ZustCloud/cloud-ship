<template>
	<div class="container">
		<!-- 底部TabBar -->
		<div class="tabbar">
			<div class="tab-item" @click="navigateTo('home')">
				<uni-icons type="home" size="25"></uni-icons>
				<span>通讯录</span>
			</div>
			<div class="tab-item" @click="navigateTo('userInfo')">
				<uni-icons type="person-filled" size="25"></uni-icons>
				<span>我</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		navigateTo(routeName) {
			let URL = '/pages/' + routeName + '/index';
			uni.navigateTo({
				url: URL
			});
		}
	}
};
</script>

<style>
.container {
	position: relative;
	height: 100%;
}

.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #f5f5f5;
	border-top: 1px solid #ccc;
}

.tab-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #999;
	font-size: 12px;
}

.tab-item.active {
	color: #333;
}
</style>
