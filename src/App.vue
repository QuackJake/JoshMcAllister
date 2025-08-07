<script setup lang="ts">
  import Header from './components/MenuNav.vue'
  import Footer from './components/Footer.vue';

  import { ref, computed } from 'vue'
  import Home from './pages/HomePage.vue'
  import AboutMe from './pages/AboutMe.vue'
  import Gallery from './pages/Gallery.vue'
  import NotFound from './pages/NotFound.vue'
  

  const routes = {
    '/': Home,
    '/about': AboutMe,
    '/gallery': Gallery,
    '/notfound': NotFound
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<template>
  <div class="bg-white">
    <Header/>

    <div class="pt-16 p-4">
      <component :is="currentView" />
    </div>

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
