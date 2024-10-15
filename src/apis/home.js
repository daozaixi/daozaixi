// 获取首页轮播图数据
import httpInstance from '@/utils/http'
export function getBannerAPI(params = {}) {
    // 首页轮播图为1 一级分类商品轮播图为2
    const { distributionSite = '1' } = params
    // console.log('getBannerAPI params:', params); // 添加这行来检查参数
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
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

// 产品推荐
export const getGoodsAPI = () => {
    return httpInstance({
        url: 'home/goods'
    })
}