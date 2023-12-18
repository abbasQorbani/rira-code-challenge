<script setup lang="ts">
import { Ref, ref } from 'vue';

const videoPlayer: Ref<HTMLVideoElement | null> = ref(null)
</script>

<template>
    <video class="video-player" width="inherit" height="inherit" ref="videoPlayer">
        <source src="" type="" />
    </video>
</template>

<style lang="scss" scoped>
.video-player {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>