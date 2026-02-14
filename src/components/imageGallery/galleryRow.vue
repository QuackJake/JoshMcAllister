<script setup lang="ts">
defineProps({
  layout: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});
</script>

<!-- Customizeable Gallery Rows -->
<template>
  <div class="w-full mx-auto py-4">
    <div class="h-[60vh] flex gap-4">
      <!-- One image full width -->
      <template v-if="layout === 'one'">
        <div
          v-if="images[0]"
          class="w-full aspect-square overflow-hidden"
        >
          <img
            :src="images[0].src"
            :alt="images[0].alt"
            class="w-full h-full object-cover"
          >
        </div>
      </template>

      <!-- Two images 50/50 -->
      <template v-else-if="layout === 'two'">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="w-1/2 aspect-square overflow-hidden"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover"
          >
        </div>
      </template>

      <!-- Three squares (equal thirds) -->
      <template v-else-if="layout === 'three'">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="w-1/3 aspect-square overflow-hidden"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover"
          >
        </div>
      </template>

      <!-- Two images: left 1/3, right 2/3 -->
      <template v-else-if="layout === 'oneThirdLeft'">
        <div
          v-if="images[0]"
          class="w-1/3 aspect-square overflow-hidden"
        >
          <img
            :src="images[0].src"
            :alt="images[0].alt"
            class="w-full h-full object-cover"
          >
        </div>
        <div
          v-if="images[1]"
          class="w-2/3 aspect-square overflow-hidden"
        >
          <img
            :src="images[1].src"
            :alt="images[1].alt"
            class="w-full h-full object-cover"
          >
        </div>
      </template>

      <!-- Two images: left 2/3, right 1/3 -->
      <template v-else-if="layout === 'oneThirdRight'">
        <div
          v-if="images[0]"
          class="w-2/3 aspect-square overflow-hidden"
        >
          <img
            :src="images[0].src"
            :alt="images[0].alt"
            class="w-full h-full object-cover"
          >
        </div>
        <div
          v-if="images[1]"
          class="w-1/3 aspect-square overflow-hidden"
        >
          <img
            :src="images[1].src"
            :alt="images[1].alt"
            class="w-full h-full object-cover"
          >
        </div>
      </template>
    </div>
  </div>
</template>
