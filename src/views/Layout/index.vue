<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action

import { useCategoryStore } from "@/stores/category"
import { onMounted } from "vue"

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 摧毁复用实例 强制更新  问题是性能开销太大-->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />
    <LayoutFixed />
</template>