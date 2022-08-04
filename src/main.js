import { createApp } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(BootstrapIconsPlugin)
  .mount('#app');
