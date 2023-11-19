<template>
	<view>
		<div class="content">
			<uni-file-picker class="photo" :imageStyles="props.type === 'detailed' ? imageStyle : simpleImageStyle" limit="1" file-mediatype="image"></uni-file-picker>
			<uni-forms-item v-for="item in props.type === 'detailed' ? USER_DETAIL_FORM_FIELDS : USER_SIMPLE_DETAIL_FORM_FIELDS" :label="t[item]">
				<uni-easyinput
					v-model="userDetailForm[item]"
					:placeholder="props.mode === 'edit' ? `请输入您的${t[item]}` : '未填写'"
					:styles="props.mode === 'edit' ? editStyles : inputstyle"
					:type="item === 'resume' ? 'textarea' : 'text'"
					autoHeight
					:disabled="props.mode !== 'edit'"
					placeholderStyle="color:#999999;font-size:14px"
				></uni-easyinput>
			</uni-forms-item>
			<button class="changeButton" @click="submitInfo" v-if="props.mode === 'edit'">保存</button>
			<view>
				<uni-popup ref="alertDialog" type="message">
					<uni-popup-message :style="{ color: msgType === 'success' ? 'green' : 'red' }" :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
				</uni-popup>
			</view>
		</div>
	</view>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';

import { USER_DETAIL_FORM_FIELDS, USER_SIMPLE_DETAIL_FORM_FIELDS, UserDetail } from '../components/user-form/types';
import t from '../components/user-form/lang';

interface IProps {
	userId: string;
	password: string;
	mode: 'edit' | null;
	type: 'detailed' | null;
}
const props = defineProps<IProps>();

const userDetailForm: Ref<UserDetail> = ref({
	name: '',
	sex: '',
	classNo: '',
	Sroom: '',
	phone: '',
	email: '',
	birthday: '',
	wechat: '',
	QQ: '',
	resume: ''
});

let msgType = ref();
let messageText = ref();
const buttonusable = ref(false);
const alertDialog = ref(null);
//输入框可编辑的样式
const editStyles = ref({
	color: '#333',
	borderColor: '#C94E60'
});
const inputstyle = ref({
	color: '#333',
	borderColor: '#FFFFFF00'
});

//头像上传样式
const imageStyle = ref({
	width: '140',
	height: '160',
	border: {
		color: '#C94E60',
		width: '2px'
	}
});

const simpleImageStyle = ref({
	width: '100',
	height: '100',
	border: {
		color: '#C94E60',
		radius: '50%',
		width: '2px'
	}
});

const submitInfo = () => {
	uni.request({
		url: 'http://localhost:3000/auth/update',
		method: 'POST',
		data: {
			id: props.userId,
			password: props.password,
			details: userDetailForm.value,
			mixin: 12212
		},
		success: res => {
			userPocess(res.data.message);
		}
	});
};
const getInfo = () => {
	uni.request({
		url: `http://localhost:3000/user/${props.userId}`,
		method: 'GET',
		success: res => {
			userDetailForm.value = res.data.data.details;
		}
	});
};

const userPocess = message => {
	if (message === 'update successfully!') {
		messageToggle('success', '个人信息更新成功');
	} else {
		messageToggle('error', '更新失败，请稍后再试！');
	}
};

const messageToggle = (type, info) => {
	msgType.value = type;
	messageText.value = info;
	alertDialog.value.open();
};

onMounted(() => {
	getInfo();
});
</script>

<style>
.user-input {
	color: '#ffffff00';
	bordercolor: '#ffffff00';
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.photo {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
}

.normalInfo {
	width: 100%;
}

.changeButton {
	margin-top: 30px;
	width: 40%;
	background-color: #c94e60;
	color: white;
	font-weight: 500;
}
</style>
