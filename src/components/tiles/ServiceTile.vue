<script setup lang="ts">
defineProps<{
    image: string
    serviceTitle: string
    route: () => void
}>()
</script>

<template>
    <div class="flex flex-col items-center p-8 bg-gray-200 rounded-2xl max-w-[32%]">
        <img :src="image" alt="" class="w-full h-auto aspect-4/3 object-contain mb-4" />
        <h1 class="text-xl font-semibold mb-4"> {{ serviceTitle }}</h1>
        <div class="mb-8">
            <slot name="body" />
        </div>
        <button @click=route class="bg-amber-500">Service</button>
    </div>
</template>