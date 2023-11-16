<template>
	<view>
		<div class="content">
			<div class="photo"><uni-file-picker class="photo" :imageStyles="imageStyle" limit="1" file-mediatype="image"></uni-file-picker></div>
			<uni-forms-item v-for="item in formItemList" :label="item.label">
				<uni-easyinput
					class="normalInfo"
					v-model="item.value"
					:placeholder="item.placeholder"
					:styles="item.style"
					:disabled="item.disabled"
					:placeholderStyle="item.phstyle"
					:type="item.type"
				></uni-easyinput>
			</uni-forms-item>
			<button class="changeButton" @click="submitInfo" v-if="!isEdit">保存</button>
		</div>
	</view>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, inject } from 'vue';
import { formItem } from './user-form/types';
import { inputstyle, editstyle, placeholderstyle, IdefaultStyle } from './user-form/constants';

var isEdit = ref(true);
var display = ref(false);
var showStyle: IdefaultStyle = inputstyle;
const placeholderStyle = 'font-size:16px';
const init = () => {
	if (props.type === 'detailed') {
		display.value = true;
		// imageStyle.value = DimageStyle;
	}
	if (props.mode === 'edit') {
		isEdit.value = false;
		showStyle = editstyle;
	}
};
init();
const formItemList: formItem[] = [
	{
		label: '姓名：',
		type: 'text',
		value: ref('').value,
		placeholder: '请输入你的姓名',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '班级：',
		type: 'text',
		value: '',
		placeholder: '请输入你的班级',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '性别：',
		type: 'text',
		value: '',
		placeholder: '请输入你的性别',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '手机号：',
		type: 'text',
		value: '',
		placeholder: '请输入你的手机号',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '生日：',
		type: 'text',
		value: '',
		placeholder: '请输入你的出生年份',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '邮箱：',
		type: 'text',
		value: '',
		placeholder: '请输入你的邮箱号',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '微信：',
		type: 'text',
		value: '',
		placeholder: '请输入你的微信号',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: 'QQ：',
		type: 'text',
		value: '',
		placeholder: '请输入你的QQ号',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	},
	{
		label: '个人简介：',
		type: 'textarea',
		value: '',
		placeholder: '介绍一下自己吧~~~',
		style: showStyle,
		disabled: isEdit.value,
		phstyle: placeholderstyle
	}
];
const props = defineProps({
	userId: {
		type: String,
		default: '',
		required: false
	},
	password: {
		type: String,
		default: '',
		required: false
	},
	type: {
		type: String,
		default: '',
		required: false
	},
	mode: {
		type: String,
		default: '',
		required: false
	}
});

// const getInfo = () => {
// 	uni.request({
// 		url: `http://localhost:3000/user/${props.userId}`,
// 		method: 'GET',
// 		success: res => {
// 			console.log(res.data.data.details);
// 			var details = res.data.data.details;
// 			name.value = details.name;
// 			classNo.value = details.class;
// 			sex.value = details.sex;
// 			phoneNum.value = details.phoneNum;
// 			birthday.value = details.birthday;
// 			email.value = details.email;
// 			wechat.value = details.wechat;
// 			QQ.value = details.QQ;
// 			resume.value = details.resume;
// 		}
// 	});
// };
// getInfo()

const classValue = ref('');
const sexValue = ref('');
//班级选择器值
const classList = ref([
	{
		value: '数字媒体技术211班',
		text: '数字媒体技术211班'
	},
	{
		value: '数字媒体技术212班',
		text: '数字媒体技术212班'
	}
]);
// 性别选择器值
const sexList = ref([
	{
		value: '男',
		text: '男'
	},
	{
		value: '女',
		text: '女'
	}
]);

//输入框可编辑的样式
const editStyles = {};
//头像上传缩略样式
const imageStyle = ref({
	width: '100',
	height: '100',
	border: {
		color: '#C94E60',
		radius: '50%',
		width: '2px'
	}
});
//头像上传细节样式
const DimageStyle = {
	width: '160',
	height: '200',
	border: {
		color: '#e3e3e3',
		width: '2px'
	}
};

const sexChange = e => {
	sexValue.value = e;
	console.log(sexValue.value);
};
const classChange = e => {
	classValue.value = e;
	console.log(classValue.value);
};
const submitInfo = () => {
	if (type != 'detailed' && mode === 'edit') {
		uni.request({
			url: 'http://localhost:3000/auth/update',
			method: 'POST',
			data: {
				id: props.userId,
				password: props.password,
				details: {
					name: name.value,
					class: classValue.value,
					sex: sexValue.value,
					phoneNum: phoneNum.value
				},
				mixin: 'asdf'
			},
			success: res => {}
		});
	}
};
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
}

.name {
	width: 100%;
	margin-top: 50px;
}

.requireInfo {
	width: 100%;
}

.normalInfo {
	width: 100%;
}

.changeButton {
	margin-top: 50px;
	width: 40%;
	background-color: #c94e60;
	color: white;
	font-weight: 500;
}
</style>
