<script setup lang="ts">
    defineProps<{
        image: string
        serviceTitle: string
        route: () => void
    }>()
</script>

<template>
    <div class="flex flex-col items-center p-8 bg-[#f7f7f7] rounded-2xl shadow-md max-w-[32%]">
        <img 
            :src="image"
            alt=""
            class="w-full h-auto aspect-4/3 object-cover rounded-xl mb-4"
        />
        <h2 class="font-semibold my-4"> {{ serviceTitle }}</h2>
        <div class="mb-8">
            <slot name="body" />
        </div>
        <button @click=route class="w-full mt-auto">Service</button>
    </div>
</template>