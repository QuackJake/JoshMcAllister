<script setup lang="ts">
  import NavigationBar from './components/layouts/NavigationBar.vue'
  import PageFooter from './components/layouts/PageFooter.vue'
  // import Header from './components/components/Header.vue'
</script>

<template>
  <!-- <Header /> -->
  <NavigationBar />
  <div class="w-[85%] mx-auto">
    <router-view />
  </div>
  <PageFooter />
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
