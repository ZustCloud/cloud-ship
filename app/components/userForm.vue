<template>
	<view>
		<div class="content">
			<div class="photo"><uni-file-picker class="photo" :imageStyles="imageStyle" limit="1" file-mediatype="image"></uni-file-picker></div>
			<uni-forms-item v-for="item in titleItem" :label="item.label">
				<uni-easyinput :placeholder="item.placeholder" :styles="item.styles" :disabled="item.disable" :placeholderStyle="item.phStyle"></uni-easyinput>
			</uni-forms-item>
			<!-- <uni-forms-item class="name" label="姓名:">
				<uni-easyinput :value="name" placeholder="请输入你的姓名" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item> -->
			<!-- //用于编辑的两个选择器 -->
			<!-- <uni-forms-item class="requireInfo" label="班级:" v-if="!isEdit">
				<uni-data-select :localdata="classList" placeholder="请选择你的班级" @change="classChange"></uni-data-select>
			</uni-forms-item>
			<uni-forms-item class="requireInfo" label="性别:" v-if="!isEdit">
				<uni-data-select :localdata="sexList" placeholder="请选择你的性别" @change="sexChange"></uni-data-select>
			</uni-forms-item> -->
			<!-- //用于展示的两个输入框 -->
			<!-- <uni-forms-item class="requireInfo" label="班级:" v-if="isEdit">
				<uni-easyinput :value="classNo" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="requireInfo" label="性别:" v-if="isEdit">
				<uni-easyinput :value="sex" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="requireInfo" :styles="inputStyle" label="手机号:">
				<uni-easyinput :value="phoneNum" placeholder="请输入你手机号" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="normalInfo" v-if="display" label="生日:">
				<uni-easyinput :value="birthday" placeholder="请输入你的出生年月" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="normalInfo" v-if="display" label="邮箱:">
				<uni-easyinput :value="email" placeholder="请输入你的邮箱号" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="normalInfo" v-if="display" label="微信号:">
				<uni-easyinput :value="wechat" placeholder="请输入你的微信号" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item class="normalInfo" v-if="display" label="QQ号:">
				<uni-easyinput :value="QQ" placeholder="请输入你的QQ号" :styles="inputStyle" :disabled="isEdit" placeholderStyle="font-size:16px"></uni-easyinput>
			</uni-forms-item> -->
			<!-- <uni-forms-item class="normalInfo" v-if="display" label="个人介绍:">
				<uni-easyinput
					:value="resume"
					type="textarea"
					autoHeight
					placeholder="介绍一下自己吧~~~"
					:styles="inputStyle"
					:disabled="isEdit"
					placeholderStyle="font-size:16px"
				></uni-easyinput>
			</uni-forms-item> -->
			<button class="changeButton" @click="submitInfo" v-if="!isEdit">保存</button>
		</div>
	</view>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, inject } from 'vue';
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
	}
});
const inputStyle = ref({
	color: '#ffffff00',
	borderColor: '#ffffff00'
});
const placeholderStyle = 'font-size:16px';
const alwaysDisplay = true;
const titleItem = ref([
	{
		label: '姓名：',
		isdisplay: alwaysDisplay,
		placeholder: '请输入你的姓名',
		value: '',
		styles: inputStyle,
		disable: isEdit,
		phStyle: placeholderStyle
	},
	{
		label: '班级：',
		isdisplay: !isEdit,
		placeholder: '请输入你的班级',
		value: '',
		styles: inputStyle,
		disable: isEdit,
		phStyle: placeholderStyle
	}
	// {
	// 	label: '性别：',
	// 	isdisplay: !isEdit
	// },
	// {
	// 	label: '班级：',
	// 	isdisplay: isEdit
	// },
	// {
	// 	label: '性别：',
	// 	isdisplay: isEdit
	// }
]);

const getInfo = () => {
	uni.request({
		url: `http://localhost:3000/user/${props.userId}`,
		method: 'GET',
		success: res => {
			console.log(res.data.data.details);
			var details = res.data.data.details;
			name.value = details.name;
			classNo.value = details.class;
			sex.value = details.sex;
			phoneNum.value = details.phoneNum;
			birthday.value = details.birthday;
			email.value = details.email;
			wechat.value = details.wechat;
			QQ.value = details.QQ;
			resume.value = details.resume;
		}
	});
};
// getInfo()

var name = ref('');
var classNo = ref('');
var sex = ref('');
var phoneNum = ref('');
var birthday = ref('');
var email = ref('');
var wechat = ref('');
var QQ = ref('');
var resume = ref('');
const type = inject('type');
const mode = inject('mode');
var display = ref(false);
var isEdit = ref(true);
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
//输入框默认不可编辑的样式

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
const init = () => {
	if (type === 'detailed') {
		display.value = true;
		imageStyle.value = DimageStyle;
	}
	if (mode === 'edit') {
		isEdit.value = false;
		inputStyle.value = editStyles;
	}
};
init();
</script>

<style>
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
	width: 99%;
}

.changeButton {
	margin-top: 50px;
	width: 40%;
	background-color: #c94e60;
	color: white;
	font-weight: 500;
}
</style>
