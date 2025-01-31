import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
// resolve用来处理文件路径
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{//定义路径的别名
      "@":resolve(__dirname,"./src")

    }
  }
})
