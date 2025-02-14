import { createApp } from 'vue'
import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'virtual:uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
app.use(router)
app.mount('#app')
