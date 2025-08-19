<script setup lang="ts">
    defineProps<{
    tag?: string
    }>()
</script>

<template>
    <component :is="tag || 'div'" class="p-[2rem] space-y-[6rem] bg-[#686868]">
        <slot />
    </component>
</template>