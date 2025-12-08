<script setup lang="ts">
    import { navigate } from '../../routeLoader';
    defineProps<{
        image: string
        serviceTitle: string
        route: () => void
    }>()
</script>

<template>
  <div
    @click="navigate(route)"
    class="flex flex-col items-center p-8 bg-[#f7f7f7] rounded-2xl shadow-md max-w-[32%] 
           transform transition-transform duration-300 hover:scale-102 
           hover:shadow-xl cursor-pointer"
  >
    <img
      :src="image"
      alt=""
      class="w-full h-auto aspect-4/3 object-cover rounded-xl mb-4"
    />
    <h2 class="font-semibold my-4">{{ serviceTitle }}</h2>
    <div class="mb-8">
      <slot name="body" />
    </div>
  </div>
</template>
