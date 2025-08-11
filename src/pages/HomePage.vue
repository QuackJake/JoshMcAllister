<script setup lang="ts">
  import TileWithHeader from '../components/tiles/TileWithHeader.vue';
</script>

<template>
  <div class="bg-gradient-to-br from-amber-200 to-amber-300 py-12 px-4">

    <!-- Hero Section -->
    <section class="min-h-[40vh] flex flex-col items-center justify-center text-center mb-12 bg-amber-500">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Jake Quackenbush</h1>
      <div class="flex flex-wrap gap-8">
        <h2 class="text-xl text-gray-600 mb-4">Full Stack Developer & Designer</h2>
        <button class="bg-white px-4 py-2 rounded shadow">Explore</button>
      </div>
    </section>

    <!-- About Section -->
    <section class="text-center bg-amber-500 p-6 rounded">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
      <p class="text-xl text-gray-600 mb-4">Full Stack Developer & Designer</p>
      <p class="text-gray-700 max-w-2xl mx-auto">
        Passionate about creating beautiful, functional web experiences that make a difference. 
        Always learning, always building, always growing.
      </p>
    </section>

  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
