import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', () => {
  const contentLength: Ref<number> = ref(0)
  const perPageCount: Ref<number> = ref(12)
  const totalPageCount: Ref<number> = ref(0)
  const currentPage: Ref<number> = ref(0)
  const isLast: Ref<boolean> = computed(() => currentPage.value === totalPageCount.value)
  const isFirst: Ref<boolean> = computed(() => currentPage.value === 0)

  function setData(length: number, count: number, page: number): void {
    contentLength.value = length
    perPageCount.value = count
    totalPageCount.value = Math.ceil(contentLength.value / perPageCount.value)
    currentPage.value = page
  }

  return { contentLength, currentPage, perPageCount, totalPageCount, isLast, isFirst, setData }
})
