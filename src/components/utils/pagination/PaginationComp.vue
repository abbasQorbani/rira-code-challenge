<script setup lang="ts">
import PaginationButton from './PaginationButton.vue';
import { usePaginationStore } from '@/stores/pagination';
const store = usePaginationStore()
</script>

<template>
    <div class="pagination-wrapper">
        <PaginationButton
            :disabled="store.currentPage === 1"
            value="1"
            text="first" />
        <PaginationButton
            :disabled="store.currentPage === 1"
            :value="`${store.currentPage - 1}`"
            text="<" />
        <PaginationButton
            v-for="index in store.totalPageCount"
            :key="index"
            :active="store.currentPage === index"
            :disabled="false"
            :value="`${index}`"
            :text="`${index}`" />
        <PaginationButton
            :disabled="store.currentPage === store.totalPageCount"
            :value="`${store.currentPage + 1}`"
            text=">" />
        <PaginationButton
            :disabled="store.currentPage === store.totalPageCount"
            :value="`${store.totalPageCount}`"
            text="last" />
    </div>
</template>

<style lang="scss" scoped>
.pagination-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    column-gap: .5rem;
}
</style>