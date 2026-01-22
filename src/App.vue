<script setup lang="ts">
  import Navbar from './components/layouts/Navbar.vue'
  import Footer from './components/layouts/Footer.vue'
  // import Header from './components/components/Header.vue'
</script>

<template>
    <!-- <Header /> -->
    <Navbar />
    <div class="w-[85%] mx-auto">
      <router-view />
    </div>
    <Footer />
</template>

<style scoped>
.logo {
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
}
</style>
