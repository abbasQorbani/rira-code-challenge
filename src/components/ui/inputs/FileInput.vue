<script setup lang="ts">
import { useFileUpload } from '@/stores/fileUpload';
const store = useFileUpload()
const props = defineProps({
    maxSize: Number,
    name: String,
    id: String,
    accept: String,
    multiple: Boolean
})

function handleChange(data: FileList | null): void {
    if (data && Number(data?.length) && data?.item(0)) {
        const file: File = data.item(0) as File
        if (validateSize(file.size)) {
            store.storeData(file)
        }
    }
}

function validateSize(size: number): boolean {
    return Number((size/1024/1024).toFixed(4)) < Number(props.maxSize)
}

</script>

<template>
    <input
        type="file"
        :name="name"
        :id="id"
        :accept="accept"
        :multiple="multiple"
        @change="handleChange(($event.target as HTMLInputElement).files)" />
</template>

<style lang="scss" scoped>
</style>
