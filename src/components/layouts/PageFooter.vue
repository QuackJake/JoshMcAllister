<script setup lang="ts">
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site"
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const complianceRoutes = router
  .getRoutes()
  .filter((r) => r.meta.group === "compliance");
</script>

<template>
  <footer class="bg-[#352f2f] py-6 text-sm mt-8">
    <div class="">
      <!-- Left Side -->
      <div class="mx-auto flex justify-center items-center">
        <nav class="flex flex-wrap justify-center gap-12">
          <RouterLink
            v-for="item in complianceRoutes"
            :key="item.path"
            :to="item.path"
            class="menu-item transition-colors duration-150 ease-in-out hover:text-[#c6bdbd]"
          >
            {{ item.name }}
          </RouterLink>

          <div class="flex-1 flex flex-col md:items-start">
          <a
            href="mailto:josuamcalister@colledgeacounseling.com"
            class="text-gray-500 hover:text-gray-300"
          >
            {{ CONTACT_EMAIL }}
          </a>
        </div>
        </nav>
      </div>
    </div>

    <div class="text-gray-500 text-sm mt-4">
      © {{ new Date().getFullYear() }} {{SITE_NAME}}. All rights reserved.
    </div>
  </footer>
</template>

