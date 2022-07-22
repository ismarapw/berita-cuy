import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/main.css'
import { dragscrollNext } from "vue-dragscroll";

const app = createApp(App);
app.use(router);
app.directive('dragscroll', dragscrollNext);
app.mount('#app');
