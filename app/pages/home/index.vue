<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';

const rawUsers = ref([]);
const users = computed(() => {
	return rawUsers.value.map(i => {
		return {
			letter: [i.id][0],
			data: [i.id]
		};
	});
});
const fetchUserList = async () => {
	const config = {
		method: 'get',
		url: 'http://localhost:3000/user?details=true'
	};

	return axios(config).then(r => {
		rawUsers.value = r.data.data;
	});
};

const bindListClick = e => {
	console.log('点击item，返回数据' + JSON.stringify(e));
};

fetchUserList();
</script>

<template>
	<div class=""><uni-indexed-list :options="users" :showSelect="false" @click="bindListClick"></uni-indexed-list></div>
</template>

<style scoped></style>
