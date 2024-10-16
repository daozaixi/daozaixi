import request from '@/utils/http'

// 商品详情接口
export const getDetail = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}