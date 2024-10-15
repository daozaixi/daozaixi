// 封装轮播图业务
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
export function useBanner() {
    // 轮播图设计 获取banner
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: "2"
        })
        // console.log("Banner API response:", res)
        // console.log(res)
        bannerList.value = res.result
    }
    onMounted(() => getBanner())

    return {
        bannerList
    }
}

