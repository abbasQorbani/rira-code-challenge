<script setup lang="ts">
import { onMounted } from 'vue';
import PaginationButton from './PaginationButton.vue';
import { usePaginationStore } from '@/stores/pagination';
const store = usePaginationStore()
defineProps({
    length: Number,
    current: Number
})

onMounted(() => {
    store.setData(12, 6)
})
</script>

<template>
    <div class="wrapper">
        <PaginationButton
            v-for="index in store.totalPageCount"
            :key="index"
            :active="store.currentPage === index"
            :disabled="store.currentPage === store.totalPageCount"
            :text="`${index}`"
            :url="`?page=${index}`" />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    column-gap: .5rem;
}
</style>