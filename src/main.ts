import { createApp } from 'vue';
import '@styles/style.css';
import App from './App.vue';

const app = createApp(App);

Object.values(
  import.meta.glob<{ install: (ctx: unknown) => void }>('/src/modules/*.ts', {
    eager: true,
  }),
).forEach(module => {
  module.install?.(app);
});

app.mount('#app');
