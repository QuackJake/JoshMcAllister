<script setup lang="ts">
import svgs from "@/assets/svgs/svgs"

import { CONTACT_EMAIL, DEFAULT_EMAIL_SUBJECT, DEFAULT_EMAIL_BODY } from "@/config/site.ts"

defineProps<{
  text: string
  subject?: string
  body?: string
}>()
</script>


<template>
  <a
    :href="`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(DEFAULT_EMAIL_SUBJECT)}&body=${encodeURIComponent(DEFAULT_EMAIL_BODY)}`"
    target="_blank"
    class="btn-link bg-white inline-flex items-center gap-2 px-4 py-2 rounded-md
           font-medium
           hover:bg-gray-200 focus:outline-none focus-visible:ring"
  >
    <span>{{ text }}</span>
    <img
      :src="svgs.arrowRight"
      alt=""
      class="w-5 h-5 object-contain"
    >
  </a>
</template>

