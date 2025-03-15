import { createApp } from 'vue';
//import './style.css';
import App from './App.vue';
import router from './routers/index.js'; // Fixed the import path

const app = createApp(App);
app.use(router);
app.mount('#app');
