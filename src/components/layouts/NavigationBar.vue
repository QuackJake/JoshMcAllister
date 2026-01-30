<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

// const baseMenuItemClasses =
//   "menu-item transition-colors duration-150 ease-in-out";

const mainRoutes = router
  .getRoutes()
  .filter((r) => r.meta.group === "main");
</script>


<template>
  <nav class="bg-[#f7f7f7] shadow-md p-6 sticky top-0 z-50 w-full mb-8">
    <div class="mx-auto flex justify-center items-center">
      <nav class="flex flex-wrap justify-center gap-12">
        <RouterLink
          v-for="item in mainRoutes"
          :key="item.path"
          :to="item.path"
          class="menu-item transition-colors duration-150 ease-in-out hover:text-[#c6bdbd]"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </nav>
</template>


<style scoped>
/* const baseMenuItemClasses =
  "menu-item transition-colors duration-150 ease-in-out";


.menu-item:hover {
  color: rgb(198, 189, 189); */
/* } */
</style>
