import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useauthStore = defineStore('User', () => {
	const id = ref<String>();
	const password = ref<String>();
	return { id, password }
});