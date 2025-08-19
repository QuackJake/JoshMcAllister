<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const navItems = [
  { name: "Home", path: "#/" },
  { name: "About Me", path: "#/about" },
  { name: "My Approach", path: "#/approachandservices" },
  { name: "FAQ", path: "#/faq" },
  { name: "Contact", path: "#/contact" },
];
</script>

<template>
  <nav class="bg-white shadow-md p-[1.5rem] sticky top-0 z-[100] w-[100%]">
    <div class="mx-auto flex justify-center">
      <!-- Logo -->
      <!-- <a href="#/" class="text-2xl font-bold text-blue-600">
        CollEdge Counseling
      </a> -->

      <!-- Hamburger button (mobile) -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop menu -->
      <ul class="hidden md:flex list-none gap-8">
        <li v-for="item in navItems" :key="item.path">
          <a :href="item.path" class="menu-item">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="slide">
      <ul
        v-if="menuOpen"
        class="flex flex-col gap-4 mt-4 md:hidden border-t border-gray-200 pt-4"
      >
        <li v-for="item in navItems" :key="item.path">
          <a
            :href="item.path"
            class="menu-item block"
            @click="menuOpen = false"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.menu-item {
  color: blue;
  font-size: medium;
  transition: color 150ms ease-in-out;
}
.menu-item:hover {
  color: rgb(198, 189, 189);
}

/* Smooth dropdown animation */
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
</style>
