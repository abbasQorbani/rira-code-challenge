<script setup lang="ts">
import PaginationComp from '@/components/utils/pagination/PaginationComp.vue';
import VideoPlayher from '@/components/video-player/VideoPlayer.vue';
import { usePaginationStore } from '@/stores/pagination';
import { onMounted, ref, type Ref } from 'vue';
import { VIDEO } from '@/consts/video.const'
import type { Video } from '@/models/video.model';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const store = usePaginationStore()
const route = useRoute()
const router = useRouter()
const pageNumber: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(12)
const videosList: Ref<Video[]> = ref([]);
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

function setStoreData() {
  store.setData(VIDEO.length, pageSize.value, pageNumber.value)
  videosList.value = VIDEO.slice((store.currentPage - 1) * store.perPageCount, store.currentPage * store.perPageCount)
}

function setPageQuery() {
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
      <select name="items-count" id="items-count" v-model="pageSize" @change="setPageQuery()">
        <optgroup>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </optgroup>
      </select>
    </div>
    <div class="listing-wrapper">
      <VideoPlayher
        v-for="(data, index) in videosList"
        :key="data.source.src + index"
        :type="data.source.type"
        :src="data.source.src" />
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
    select {
      width: 100%;
      max-width: 150px;
      height: 32px;
    }
  }
  .listing-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
