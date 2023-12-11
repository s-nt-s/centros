import '../assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.provide('GLOBAL', Object.freeze({
    mail: "santos82@gmail.com"
}));

app.use(createPinia())

app.mount('#app')
