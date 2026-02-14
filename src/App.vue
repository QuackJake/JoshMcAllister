<script setup lang="ts">
import assets from "@/assets/assets";
import NavigationBar from "./components/layouts/NavigationBar.vue";
import PageFooter from "./components/layouts/PageFooter.vue";
// import Header from './components/components/Header.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Blurred background -->
    <div class="fixed inset-0 bg-blur" />

    <!-- App content -->
    <div class="relative z-10">
      <NavigationBar />

      <!-- <div class="w-[85%] mx-auto my-8 glass"> -->
      <router-view />
      <!-- </div> -->

      <PageFooter />
    </div>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

.bg-blur {
  background-image: url("/sunset_1.webp");
  background-size: cover;
  background-position: center;

  filter: blur(18px);
  transform: scale(1.1);

  /* ↓ makes the background less transparent */
  background-color: rgba(255, 255, 255, 0.65);
  background-blend-mode: lighten;
}

.glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
</style>
