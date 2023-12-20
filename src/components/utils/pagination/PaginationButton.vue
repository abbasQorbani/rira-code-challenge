<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()
defineProps({
    text: String,
    value: String,
    disabled: Boolean,
    active: Boolean
})
</script>

<template>
    <RouterLink v-if="!disabled" class="link" :class="active && 'active'" :to="{
        path: '/',
        query: {...route.query, page: value}
    }">{{ text }}</RouterLink>
    <span class="link disabled" v-else>{{ text }}</span>
</template>

<style lang="scss" scoped>
.link {
    width: fit-content;
    height: fit-content;
    border: 1px solid $text;
    color: $primary;
    font-size: .7rem;
    font-weight: normal;
    padding: .5rem;
    &.disabled {
        opacity: .5;
        cursor: not-allowed;
    }
    &.active {
        border-color: $primary;
        font-weight: bold;
    }
}
</style>