<template>
	<view>
		<div class="content">
			<div class="photo"><uni-file-picker class="photo" :imageStyles="imageStyle" limit="1" file-mediatype="image"></uni-file-picker></div>
			<uni-forms-item v-for="item in USER_DETAIL_FORM_FIELDS" :label="t[item]">
				<uni-easyinput
					class="normalInfo"
					v-model="userDetailForm[item]"
					:placeholder="`请输入您的${t[item]}`"
					:styles="props.mode === 'edit' ? editStyles : inputstyle"
					:disabled="props.mode !== 'edit'"
				></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item>
				<uni-easyinput
					class="normalInfo"
					v-model="userDetailForm['resume']"
					:placeholder="`请输入您的${t['resume']}`"
					:styles="props.mode === 'edit' ? editStyles : inputstyle"
					:disabled="props.mode !== 'edit'"
				></uni-easyinput>
			</uni-forms-item>
			<button class="changeButton" @click="submitInfo" v-if="!props.mode === 'edit'">保存</button>
		</div>
	</view>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { USER_DETAIL_FORM_FIELDS, UserDetail } from './user-form/types';
import t from './user-form/lang';

interface IProps {
	userId: string;
	password: string;
	mode: 'edit' | null;
}
const props = defineProps<IProps>();

const userDetailForm: Ref<UserDetail> = ref({
	name: 'string',
	phone: 'string',
	email: 'string',
	sex: 'string',
	classNo: 'string',
	birthday: 'string',
	wechat: 'string',
	QQ: 'string',
	resume: 'string'
});

//输入框可编辑的样式
const editStyles = ref({});

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

const submitInfo = () => {
	console.log('hello');
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

.normalInfo {
	width: 100%;
	background-color: yellow;
}

.changeButton {
	margin-top: 50px;
	width: 40%;
	background-color: #c94e60;
	color: white;
	font-weight: 500;
}
</style>
