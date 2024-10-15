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

