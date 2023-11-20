import App from './App'
import login from './components/login.vue'
import * as Pinia from 'pinia';
import {createSSRApp} from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  app.component('login', login);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia
  }
}