import { createApp } from 'vue'
import App from './App.vue'
//引入路由的实例
import { Button, Image as VanImage } from 'vant'
import router from "./router/index"
import 'vant/lib/index.css';
import "amfe-flexible" //动态改变跟字体大小
const app = createApp(App) 
app.use(router) 
app.use(Button)
app.use(VanImage)
app.mount('#app')
// createApp(App).mount('#app')

