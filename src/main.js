import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core' // 导入vueuse的IntersectionObserver用来判断是否进入dom元素

// 引入初始化样式文件
import "@/styles/common.scss"


const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')

// 定义全局属性 img-lazy 指令
app.directive("img-lazy", {
    mounted(el, binding) {
        //el :指令绑定的元素
        //binding :binding.value 指令等于号后面绑定的表达式的值 也就是我们需要的url
        console.log(el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                }
            },
        )
    }
})

// // 测试接口函数
// import { getCategoryAPI } from "@/apis/testApi"
// getCategoryAPI().then(res => {
//     console.log(res)
// })

