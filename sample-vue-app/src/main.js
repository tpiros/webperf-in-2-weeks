import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import './assets/main.css';

const useImage = (url) => {
  return new URL(`/src/assets/img/${url}`, import.meta.url).href;
};

const app = createApp(App);
app.config.globalProperties.$image = useImage;
app.use(router);

app.mount('#app');
