import { createApp } from 'vue';
import App from './App.vue';
import '@assets/style/main.scss';

const app = createApp(App);

Object.values(
  import.meta.glob<{ install: (ctx: unknown) => void }>('/src/modules/*.ts', {
    eager: true,
  }),
).forEach(module => {
  module.install?.(app);
});

app.mount('#app');
