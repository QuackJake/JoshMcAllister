<script setup lang="ts">
  import Navbar from './components/pageComponents/Navbar.vue'
  import Footer from './components/pageComponents/Footer.vue'
  import PageWrapper from './components/pageComponents/PageWrapper.vue'
  import Header from './components/pageComponents/Header.vue'
  import { currentView } from './routeLoader'
</script>

<template>
    <Header />
    <Navbar />
  <div class="w-[85%] mx-auto">
    <!-- <PageWrapper> -->
    <component :is="currentView" />
    <!-- </PageWrapper> -->
    <Footer />
  </div>
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
