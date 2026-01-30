<script setup lang="ts">
import assets from '@/assets/assets';
</script>

<template>
  <section>
    <div class="relative w-full min-h-[85vh] text-center">
      <!-- Background image -->
      <img
        :src="assets.landing_page"
        alt="A black-and-white birdseye view of the University of Utah"
        class="absolute inset-0 w-full h-full object-cover"
      >

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <!-- Centered title + subtitle -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 space-y-8">
        <h1 class="title font-bold">
          Coll-Edge Advising
        </h1>
        <div class="subtitle font-bold text-4xl">
          "Get an Edge on Your College Journey"
        </div>
      </div>

      <!-- Bottom text -->
      <div class="absolute bottom-8 inset-x-0 z-10 text-gray-400 text-2xl text-center">
        Proudly Serving the Salt Lake Valley
      </div>
    </div>
  </section>
</template>


<style scoped>
.title {
  color: var(--color-white) /* #fff = #ffffff */;
  font-size: 5rem;
}

.subtitle {
  color: var(--color-white) /* #fff = #ffffff */;
}
</style>
