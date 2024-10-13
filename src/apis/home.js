// 获取首页轮播图数据
import httpInstance from '@/utils/http'
export const getBannerAPI = () => {
    return httpInstance({
        url: 'home/banner'
    })
}

// 获取新鲜好物
export const findNewAPI = () => {
    return httpInstance({
        url: 'home/new'
    })
}

// 获取人气推荐
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot'
    })
}