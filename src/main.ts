import { createApp } from 'vue'
import App from './App.vue'
// 导入全局样式
import "./style.css";
// UnoCSS 特殊导入语句，用于在构建时（Vite 等环境）自动生成并注入样式。
import 'virtual:uno.css'
// 导入路由
import router from './router';

const app = createApp(App)
app.use(router)
app.mount('#app')
