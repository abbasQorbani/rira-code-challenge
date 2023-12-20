<script setup lang="ts">
import FileInputVue from '@/components/ui/inputs/FileInput.vue';
import VideoPlayer from '@/components/ui/video-player/VideoPlayer.vue';
import { useFileUpload } from '@/stores/fileUpload';
import { onMounted, type ComputedRef, computed } from 'vue';
const store = useFileUpload()
const fileType: ComputedRef<string> = computed(() => store.fileType)
const currentTime: ComputedRef<number> = computed(() => store.currentTime)
const fileAddress: ComputedRef<string> = computed(() => store.fileAddress)

onMounted(() => {
  store.restoreFileName()
  store.restoreFileType()
  store.restoreTime('video-player')
})

</script>

<template>
  <section class="upload-video-wrapper">
    <div v-if="fileAddress === ''" class="video-place-holder"></div>
    <VideoPlayer v-else :src="fileAddress" :type="fileType" :current-time="currentTime" :save="true" id="video-player" />
    <span class="hint">Remember, I couldn't store File Object in local storage, so for test time at refresh, please do refresh and upload same file again :)</span>
    <FileInputVue :max-size="1000" :accept="'video/*'" :multiple="false" :name="'upload-video'" :id="'upload-video'" />
  </section>
</template>

<style lang="scss" scoped>
.video-player {
  margin: 0 auto 2rem;
  display: block;
}
.video-place-holder {
  background-color: $text;
  opacity: .5;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  margin: 0 auto 2rem;
  max-width: 80vw;
  max-height: 75vh;
}
.upload-video-wrapper {
  width: 100%;
  height: fit-content;
  padding: 1rem;
  .hint {
    display: block;
    margin-bottom: 2rem;
  }
}
</style>
