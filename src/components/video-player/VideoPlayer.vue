<script setup lang="ts">
import { ref, type Ref } from 'vue';
defineProps({
    src: String,
    type: String
})

const videoPlayer: Ref<HTMLVideoElement | null> = ref(null)
</script>

<template>
    <video class="video-player" controls width="inherit" height="inherit" ref="videoPlayer">
        <source :src="src" :type="type" />
    </video>
</template>

<style lang="scss" scoped>
.video-player {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>