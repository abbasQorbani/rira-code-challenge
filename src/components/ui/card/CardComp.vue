<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    imageSrc: String,
})

</script>

<template>
    <div class="listing-card">
        <img :src="props.imageSrc" :alt="props.title">
        <span class="title">{{ props.title }}</span>
        <span class="sub-title">{{ props.subTitle }}</span>
    </div>
</template>

<style lang="scss" scoped>
.listing-card {
    width: 100%;
    height: fit-content;
    border: 1px solid $secondary;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: .5rem;
    img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
    }
    .title, .sub-title {
        font-size: 1rem;
        line-height: 1rem;
        color: $text;
    }
    .title {
        font-weight: bold;
    }
    .sub-title {
        font-weight: normal;
    }
}
</style>
