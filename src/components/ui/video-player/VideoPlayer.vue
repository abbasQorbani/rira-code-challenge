<script setup lang="ts">
import { useFileUpload } from '@/stores/fileUpload';
import { onMounted, ref, type Ref } from 'vue';
const props = defineProps({
    src: String,
    type: String,
    currentTime: Number,
    save: Boolean,
    id: String
})
const store = useFileUpload()
const videoPlayer: Ref<HTMLVideoElement | null> = ref(null)
onMounted(() => {
    window.addEventListener('beforeunload', () => {
        if (props.save) store.setTime((videoPlayer.value as HTMLVideoElement).id, (videoPlayer.value as HTMLVideoElement).currentTime)
        window.removeEventListener('beforeunload', () => {}, false)
    })
    if (props.currentTime && videoPlayer.value) {
        (videoPlayer.value as HTMLVideoElement).currentTime = props.currentTime
    }
})

</script>

<template>
    <video class="video-player" controls width="inherit" height="inherit" ref="videoPlayer" :id="props.id">
        <source :src="props.src" :type="props.type" />
    </video>
</template>

<style lang="scss" scoped>
.video-player {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
    max-width: 80vw;
    max-height: 75vh;
    cursor: pointer;
}
</style>