// 封装分类业务
import { ref, onMounted, watch } from "vue"
import { getCategoryAPI } from "@/apis/category"
import { useRoute } from "vue-router"
// import { onBeforeRouteUpdate } from "vue-router"
export function useCategory() {
    //面包屑导航
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id) => {
        const res = await getCategoryAPI(route.params.id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    // 路由变化时，分类数据接口重新发送
    watch(() => route.params.id, () => {
        // console.log("路由id开始变化" + route.params.id)
        getCategory()
    })

    return {
        categoryData
    }
    // onBeforeRouteUpdate((to) => {
    //     console.log("路由变化")
    //     getCategory()
    // })
}             