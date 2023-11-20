import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useauthStore = defineStore('User', () => {
	const id = ref<string>();
	const password = ref<string>();
	return { id, password }
});