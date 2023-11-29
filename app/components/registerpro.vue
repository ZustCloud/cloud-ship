<script setup lang="ts"></script>

<template>
	<uni-card>
		<uni-forms>
			<uni-forms-item label="QQ"><uni-easyinput type="text" placeholder="输入您的QQ号" /></uni-forms-item>
			<uni-forms-item label="微信号"><uni-easyinput type="text" placeholder="输入您的微信号" /></uni-forms-item>
			<uni-forms-item label="寝室号"><uni-easyinput type="text" placeholder="输入您的寝室号" /></uni-forms-item>
			<uni-forms-item label="邮箱"><uni-easyinput type="text" placeholder="输入您的邮箱地址" /></uni-forms-item>
			<uni-forms-item label="生日">
				<picker mode="date" :start="`2001-01-01`" :end="`2005-12-31`"><uni-easyinput :placeholder="'请选择您的生日'" /></picker>
			</uni-forms-item>
			<uni-forms-item label="自我介绍"><uni-easyinput type="textarea" placeholder="请简单的介绍一下自己" /></uni-forms-item>
			<view style="display: flex">
				<button size="mini" type="primary">提交</button>
				<button size="mini">取消</button>
			</view>
		</uni-forms>
	</uni-card>
</template>

<style></style>
