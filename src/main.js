import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入初始化样式文件
import "@/styles/common.scss"
// 引入懒加载插件
import { lazyPlugin } from "@/directives/index.js"
// 引入全局组件插件
import { componentPlugin } from '@/components/index.js'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



// // 测试接口函数
// import { getCategoryAPI } from "@/apis/testApi"
// getCategoryAPI().then(res => {
//     console.log(res)
// })

