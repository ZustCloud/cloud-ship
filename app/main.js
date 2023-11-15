import App from './App'
import login from './components/login.vue'

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.component('login', login);
	return {
		app
	}
}