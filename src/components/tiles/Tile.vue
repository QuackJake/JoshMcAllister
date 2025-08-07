<template>
    <div :class="['bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6', customClass]">
        <slot />
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        customClass?: string
    }>()
</script>