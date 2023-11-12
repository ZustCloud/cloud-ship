<template>
	<view class="loginCp">
		<h1 class="title">登入</h1>
		<view class="inputPart">
			<uni-section title="账号:" titleFontSize="16px">
				<uni-easyinput class="accountInput" placeholder="请输入学号/工号" :styles="inputStyle" @click="boxBeClick" @input="accountChange" @focus="inputFocus"></uni-easyinput>
			</uni-section>
			<uni-section title="密码:" titleFontSize="16px">
				<uni-easyinput class="accountInput" type="password" placeholder="请输入密码" @input="passwordChange"></uni-easyinput>
			</uni-section>
		</view>
		<button class="loginButton" @click="login">登入</button>
	</view>
</template>

<script setup>
import {ref,reactive} from 'vue';
const inputStyle=reactive({
	borderColor:'#999999',
});
const boxBeClick=(event)=>{
	inputStyle.borderColor='red';
};
let id=ref('');
let password=ref('');
const accountChange=(event)=>{
	id=event;
};
const passwordChange=(event)=>{
	password=event;
};
const login=()=>{
	uni.request({
		url:'http://localhost:3000/auth/',
		method:'POST',
		data:{
			id,
			password
		},
		header:{
			'Content-Type':'application/json'
		},
		success:(res)=>{
			console.log(`状态码：${res.statusCode}`);
			if(res.data.message==='user register successfully.'){
				console.log("账号注册成功");
			}else if(res.data.message==='login successfully!'){
				console.log("账号登入成功");
			}else if(res.data.message==='wrong password!'){
				console.log("密码错误");
			}else{
				console.log(`错误为：${res.data.error}`);
			}
		}
	});
};
</script>

<style>
	.loginCp{
		width: 70%;
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
	}
	.inputPart{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 200px;
	}
	.title{
		font-size: 28px;
		border-color: red;
	}
	.loginButton{
		margin-top: 50px;
		width:80px;
		background-color: #C94E60;
		color: white;
		font-weight: 500;
	}
</style>