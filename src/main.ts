import { createApp } from 'vue'
import App from './App.vue'
import { Button, Image as VanImage, Uploader, Field, CellGroup, NavBar, Picker, Popup } from 'vant'
import { createPinia } from 'pinia'
const pinia = createPinia()
//引入路由的实例
import router from "./router/index"
import 'vant/lib/index.css';
import "amfe-flexible" //动态改变跟字体大小
const app = createApp(App) 
app.use(router) 
app.use(pinia)
app.use(Button)
app.use(VanImage)
app.use(Uploader)
app.use(Field)
app.use(CellGroup)
app.use(NavBar)
app.use(Picker)
app.use(Popup)
app.mount('#app')
// createApp(App).mount('#app')

