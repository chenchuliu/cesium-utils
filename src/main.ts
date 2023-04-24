import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/main.css'

Object.defineProperty(globalThis, 'CESIUM_BASE_URL', {
  value: import.meta.env.VITE_CESIUM_BASE_URL
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
