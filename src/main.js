import { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './index.css';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
});

createApp(App)
    .use(router)
    .mount('#app');
