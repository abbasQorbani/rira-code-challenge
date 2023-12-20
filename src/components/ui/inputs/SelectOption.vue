<script setup lang="ts">
defineProps({
  modelValue: String
})
defineEmits({
  update: (value: string) => {return value}
})
</script>

<template>
    <select name="items-count" id="items-count" 
    :value="modelValue"
    @change="event => $emit('update', (event.target as HTMLInputElement).value
    )">
      <optgroup>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
      </optgroup>
    </select>
</template>

<style lang="scss" scoped>
select {
  width: 100%;
  max-width: 150px;
  height: 32px;
}
</style>
