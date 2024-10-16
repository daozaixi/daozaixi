// axios 基础的封装
// 创建axios实例
import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 15000
})

// axios请求拦截器
http.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示 
    ElMessage({
        type: "warning",
        message: e.response.data.message
    })
    // token处理
    if (e.response.status === 401) {
        // 未登录，跳转登录页面
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})
export default http