import request from '@/utils/http'
import httpInstance from '@/utils/http'
export function getCategoryAPI(id) {
    return request({
        url: '/category',
        method: 'get',
        params: {
            id
        }
    })
}

export function getBannerAPI(params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    console.log('getBannerAPI params:', params); // 添加这行来检查参数
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}
