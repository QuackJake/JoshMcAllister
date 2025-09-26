<script setup lang="ts">
import { complianceRoutes, mainRoutes } from '../../routeLoader';

</script>

<template>
  <footer class="bg-gray-800 text-white py-6 text-sm">
    <div class="flex flex-col md:flex-row md:justify-between px-6 py-4">

      <!-- Right Side -->
      <div class="flex-1 flex flex-col md:items-end mb-6 md:mb-0">
        <nav class="flex flex-wrap justify-start md:justify-end gap-4 mb-4">
          <a
            v-for="item in mainRoutes"
            :key="item.path"
            :href="item.path"
            :class="baseMenuItemClasses"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} ColEdge Counseling. All rights reserved.
        </div>
      </div>

      <!-- Divider (hidden on mobile) -->
      <div class="hidden md:block border-l border-gray-600 mx-6"></div>

      <!-- Left Side -->
      <div class="flex-1 flex flex-col md:items-start">
        <nav class="flex flex-wrap justify-start gap-4 mb-4">
          <a
            v-for="item in complianceRoutes"
            :key="item.path"
            :href="item.path"
            :class="baseMenuItemClasses"
          >
            {{ item.name }}
          </a>
        </nav>

        <a
          href="mailto:josuamcalister@colledgeacounseling.com"
          class="text-gray-500 hover:text-gray-300"
        >
          josuamcalister@colledgeacounseling.com
        </a>
      </div>

    </div>
  </footer>
</template>

