<script setup lang="ts">
import assets from '@/assets/assets';
</script>

<template>
  <section>
    <div class="relative w-full min-h-[85vh] text-center">
      <!-- Background image -->
      <img
        :src="assets.UofU"
        alt="A black-and-white birdseye view of the University of Utah"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <!-- Content -->
      <div class="relative z-10 flex flex-col min-h-[85vh] px-4 py-16">
        <!-- Centered title + subtitle -->
        <div class="flex flex-col items-center justify-center flex-1 space-y-8">
          <h1 class="title font-bold">
            Coll-Edge Advising
          </h1>
          <div class="subtitle font-bold text-4xl">
            "Get an Edge on Your College Journey"
          </div>
        </div>

        <!-- Bottom text -->
        <div class="text-gray-400 text-2xl text-center mt-12 lg:mt-0">
          Proudly Serving the Salt Lake Valley
        </div>
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
  color: var(--color-gray-200) /* #fff = #ffffff */;
}
</style>
