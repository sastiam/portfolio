import { createApp } from 'vue'
import '@styles/style.css'
import App from './App.vue'

const app = createApp(App);

Object.values(import.meta.globEager('/src/modules/*.ts')).forEach((module : any) => module.install?.(app))

app.mount('#app');
