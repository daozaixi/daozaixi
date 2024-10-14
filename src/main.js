import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


// 引入初始化样式文件
import "@/styles/common.scss"
// 引入懒加载插件
import { lazyPlugin } from "@/directives/index.js"


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(lazyPlugin)
app.mount('#app')



// // 测试接口函数
// import { getCategoryAPI } from "@/apis/testApi"
// getCategoryAPI().then(res => {
//     console.log(res)
// })

