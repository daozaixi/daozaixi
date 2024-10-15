import request from '@/utils/http'
// 获取一级分类
export function getCategoryAPI(id) {
    return request({
        url: '/category',
        method: 'get',
        params: {
            id
        }
    })
}

// 二级面包屑
export const getCategoryFilterAPI = (id) => {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

// 二级分类商品渲染
export const getSubCategoryAPI = (data) => {
    return request({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}
