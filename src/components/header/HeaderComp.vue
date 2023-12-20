<script setup lang="ts">
</script>

<template>
    <header class="header">
        <nav class="nav">
            <ul>
                <li>
                    <RouterLink
                        :to="{
                            path: '/video-list',
                            query: {
                                page: 1,
                                size: 12
                            }
                        }"
                        active-class="active"
                        class="link"
                    >video list</RouterLink>
                </li>
                <li>
                    <RouterLink
                        :to="{
                            path: '/upload-video'
                        }"
                        active-class="active"
                        class="link"
                    >upload video</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid $text;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: $bgc;
    z-index: 1;
    padding: 1rem;
    .nav, .nav ul {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
            column-gap: .5rem;
            li {
                width: fit-content;
                height: fit-content;
                .link {
                    color: $secondary;
                    font-size: 1rem;
                    font-weight: normal;
                    opacity: .5;
                    &:hover {
                        opacity: 1;
                    }
                }
                .active {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
