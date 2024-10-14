// 懒加载插件
import { useIntersectionObserver } from '@vueuse/core' // 导入vueuse的IntersectionObserver用来判断是否进入dom元素
export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive("img-lazy", {
            mounted(el, binding) {
                //el :指令绑定的元素
                //binding :binding.value 指令等于号后面绑定的表达式的值 也就是我们需要的url
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver( //解构赋值
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop() //停止监听
                        }
                    },
                )
            }
        })
    }
}

export default lazyPlugin