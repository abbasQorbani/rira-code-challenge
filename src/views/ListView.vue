<script setup lang="ts">
import PaginationComp from '@/components/utils/pagination/PaginationComp.vue';
import CardCompVue from '@/components//ui/card/CardComp.vue';
import { usePaginationStore } from '@/stores/pagination';
import { onMounted, ref, type Ref } from 'vue';
import { CARDS } from '@/consts/card.const'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import SelectOption from '@/components/ui/inputs/SelectOption.vue';
import type { Card } from '@/models/card.model';
const store = usePaginationStore()
const route = useRoute()
const router = useRouter()
const pageNumber: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(12)
const cardsList: Ref<Card[]> = ref([]);
onMounted(() => {
  pageNumber.value = Number(route.query.page) || 1
  pageSize.value = Number(route.query.size) || 12
  setStoreData()
})

onBeforeRouteUpdate((to) => {
  pageNumber.value = Number(to.query.page) || 1
  pageSize.value = Number(to.query.size) || 12
  setStoreData()
})

function setStoreData(): void {
  store.setData(CARDS.length, pageSize.value, pageNumber.value)
  cardsList.value = CARDS.slice((store.currentPage - 1) * store.perPageCount, store.currentPage * store.perPageCount)
}

function setPageQuery(value: string): void {
  pageSize.value = Number(value)
  router.push({
    path: route.path,
    query: {
      page: 1,
      size: pageSize.value
    }
  })
}
</script>

<template>
  <section class="home-page-wrapper">
    <div class="listing-header">
      <SelectOption :modelValue="String(pageSize)" @update="setPageQuery($event)" />
    </div>
    <div class="listing-wrapper">
      <CardCompVue
        v-for="(data, index) in cardsList"
        :key="index + data.subTitle"
        :imageSrc="data.imageSrc"
        :title="data.title + index + ' in page ' + store.currentPage"
        :subTitle="data.subTitle + index + ' in page ' + store.currentPage" />
    </div>
    <PaginationComp v-if="store.totalPageCount > 1" />
  </section>
</template>

<style lang="scss" scoped>
.home-page-wrapper {
  @include wrapper;
  padding: 1rem;
  .listing-header {
    width: 100%;
    height: fit-content;
    margin-bottom: 1rem;
  }
  .listing-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
    @media (max-width: '1000px') {
    grid-template-columns: 1fr 1fr;
    }
    @media (max-width: '600px') {
    grid-template-columns: 1fr;
    }
  }
}
</style>