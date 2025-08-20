<script setup lang="ts">
import { ref, computed } from "vue";
import { mainRoutes } from "../../routeLoader";

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const menuIcon = computed(() =>
  menuOpen.value
    ? "M6 18L18 6M6 6l12 12" // X Icon
    : "M4 6h16M4 12h16M4 18h16" // Hamburger Icon
);

const baseMenuItemClasses =
  "menu-item transition-colors duration-150 ease-in-out";
</script>

<template>
  <nav class="bg-white shadow-md p-6 sticky top-0 z-50 w-full">
    <div class="mx-auto flex justify-center items-center">
      <!-- Hamburger button (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="menuIcon"
          />
        </svg>
      </button>

      <!-- Desktop menu -->
      <nav class="flex flex-wrap justify-center gap-12">
        <a
          v-for="item in mainRoutes"
          :key="item.path"
          :href="item.path"
          :class="baseMenuItemClasses"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="slide">
      <ul
        v-show="menuOpen"
        class="flex flex-col gap-4 mt-4 md:hidden border-t border-gray-200 pt-4"
      >
        <nav class="flex flex-wrap justify-center gap-12">
          <a
            v-for="item in mainRoutes"
            :key="item.path"
            :href="item.path"
            :class="baseMenuItemClasses"
          >
            {{ item.name }}
          </a>
        </nav>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.menu-item:hover {
  color: rgb(198, 189, 189);
}

/* Smooth dropdown animation */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
</style>
