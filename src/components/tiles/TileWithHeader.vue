<script setup lang="ts">
defineProps<{
  title: string
  customClass?: string
  bodySpacing?: string
}>()
</script>

<template>
  <div :class="['bg-white rounded-xl shadow-lg shadow-black/25 hover:shadow-lg transition-shadow duration-300 p-6', customClass]">
    <div class="flex items-center mb-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
    </div>
    <div :class="[bodySpacing || 'space-y-3']">
      <slot name="body" />
    </div>
  </div>
</template>