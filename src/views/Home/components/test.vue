<script setup>
import { ref } from 'vue'
const music = ref({
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    album: 'The Dark Side of the Moon (Special Edition)',
    year: '1973'
})
</script>

<template>
    <ul>
        <template v-for="item in music">
            <li>{{ item }}</li>
        </template>
    </ul>
</template>

<style scoped></style>