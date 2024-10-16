// 用户相关
import request from '@/utils/http'
// 获取用户列表
export const loginAPI = ({ account, password }) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}