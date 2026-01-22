<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  to: { name: string };
  image: string;
  serviceTitle: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center p-8 bg-[#f7f7f7] rounded-2xl shadow-md max-w-[32%] transform transition-transform duration-300 hover:scale-102 hover:shadow-xl cursor-pointer"
  >
    <RouterLink :to="to" class="btn-link">
      <img
        :src="image"
        alt=""
        class="w-full h-auto aspect-4/3 object-cover rounded-xl mb-4"
      />
      <h2 class="font-semibold my-4">{{ serviceTitle }}</h2>
      <div class="mb-8">
        <slot name="body" />
      </div>
    </RouterLink>
  </div>
</template>
