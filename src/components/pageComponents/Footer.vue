<script setup lang="ts">
import { complianceRoutes, mainRoutes } from '../../routeLoader';

</script>

<template>
  <footer class="bg-gray-800 text-white py-6 text-sm">
    <div class="flex px-6 py-4">
      <!-- Right Side -->
      <div class="flex-1 px-6 py-4">
        <nav class="flex flex-wrap justify-end gap-8 mb-4">
          <a
            v-for="item in mainRoutes"
            :key="item.path"
            :href="item.path"
            :class="baseMenuItemClasses"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="flex justify-end mb-4">
          <p class="text-gray-500">
            © {{ new Date().getFullYear() }} ColEdge Counseling. All rights reserved.
          </p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-l border-gray-600"></div>

      <!-- Left Side -->
      <div class="flex-1 px-6 py-4">
        <nav class="flex flex-wrap justify-start gap-8 mb-4">
          <a
            v-for="item in complianceRoutes"
            :key="item.path"
            :href="item.path"
            :class="baseMenuItemClasses"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="flex justify-start mb-4">
          <a
            href="mailto:josuamcalister@colledgeacounseling.com"
            class="text-gray-500 hover:text-gray-300"
          >
            josuamcalister@colledgeacounseling.com
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
