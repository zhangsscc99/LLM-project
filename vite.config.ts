// import { defineConfig, sortUserPlugins } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import { resolve } from "path"
// import pxtorem from "postcss-pxtorem"
// // resolve用来处理文件路径
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve:{
//     alias:{//定义路径的别名
//       "@":resolve(__dirname,"./src")

//     }
//   }
//   css: {
//     postcss:{
//       plugins: [
//         pxtorem({
//           rootValue: 37.5,//以iphone6为准
//           unitPrecision: 3,//保留小数位
//           propList:["*"],//所有属性都转换

//         })
//       ]
//     }
      
      
//   }
// })
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import pxtorem from "postcss-pxtorem";
// resolve用来处理文件路径
// https://vite.dev/config/
export default defineConfig({
  base: "/agent",
  plugins: [vue()],
  resolve: {
    alias: {
      //定义路径别名
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5, //以iphone6为准
          unitPrecision: 3, //px转rem精确到小数点多少位
          propList: ["*"],
        }),
      ],
    },
  },
  server:{
    host: "10.198.119.149",
    port: 5100,
    
  }
});
