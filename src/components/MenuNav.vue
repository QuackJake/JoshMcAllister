<script setup lang="ts">
</script>

<template>
  <nav class="bg-white shadow-md p-4 sticky top-0 z-[100]">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#/" class="text-2xl font-bold text-blue-600">
        Jake Quackenbush
      </a>

      <ul class="flex list-none gap-8">
        <li>
          <a href="#/" class="menu-item">
            Home
          </a>
        </li>
        <li>
          <a href="#/gallery" class="menu-item">
            Gallery
          </a>
        </li>
        <li>
          <a href="#/about" class="menu-item">
            About Me
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
    .menu-item {
        color: blue;
        font-size: medium;
        transition-property: color;
        transition-duration: 150ms;
        transition-timing-function: ease-in-out;
    }
    .menu-item:hover {
        color: rgb(198, 189, 189);
    }
</style>
