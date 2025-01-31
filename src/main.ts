import { createApp } from 'vue'
import App from './App.vue'
//引入路由的实例
import { Button } from 'vant'
import router from "./router/index"
import 'vant/lib/index.css';
const app = createApp(App) 
app.use(router) 
app.use(Button)
app.mount('#app')
// createApp(App).mount('#app')

