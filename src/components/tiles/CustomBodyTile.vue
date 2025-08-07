<template>
    <div :class="['bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6', customClass]">
        <div class="flex items-center mb-4">
            <slot name="header"/>
        </div>
        <div :class="[bodySpacing || 'space-y-3']">
            <slot name="body"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        customClass?: string
    }>()
</script>