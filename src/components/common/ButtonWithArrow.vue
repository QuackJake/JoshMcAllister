<script setup lang="ts">
import svgs from "../../assets/svgs/svgs.ts";
// import pngs from "../../assets/pngs/pngs.ts";
import { RouterLink } from "vue-router";

defineProps<{
    text: string,
    to: { name: string },
}>();
</script>

<template>
  <RouterLink
    :to="to"
    class="btn-link bg-white inline-flex items-center gap-2 px-4 py-2 rounded-md
           font-medium
           hover:bg-gray-200 focus:outline-none focus-visible:ring "
  >
    <span>{{ text }}</span>
    <img
      :src="svgs.arrowRight"
      alt=""
      class="w-5 h-5 object-contain"
    />
  </RouterLink>
</template>
