import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/main.css';

import attrchange from 'lazysizes/plugins/attrchange/ls.attrchange.min';
import lazysizes from 'lazysizes';

const useImage = (url) => {
  return new URL(`/src/assets/img/${url}`, import.meta.url).href;
};

const app = createApp(App);
app.config.globalProperties.$image = useImage;
app.use(router);
app.use(attrchange);
app.use(lazysizes);

app.mount('#app');
