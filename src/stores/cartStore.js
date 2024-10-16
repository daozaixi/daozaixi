// 封装购物车

import { all } from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useCartStore = defineStore('cart', () => {
    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const addCart = (goods) => {
        console.log('添加', goods)
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            // 找到了
            item.count++
        } else {
            // 没找到
            cartList.value.push(goods)
        }
    }
    // 删除购物车
    const delCart = async (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }
    // 计算属性总数和总价
    const allCount = computed(() => {
        return cartList.value.reduce((a, c) => a + c.count, 0)
    })
    const allPrice = computed(() => {
        return cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    })

    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 下选上全选功能
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 上选下全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }
    return {
        cartList,
        isAll,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
}, {
    persist: true,
})