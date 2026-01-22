<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonWithArrow from '../common/ButtonWithArrow.vue'
</script>

<template>
    <!-- Contact CTA -->
    <div class="mt-12 text-center rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">
        Still have questions?
      </h2>
      <p class="text-gray-600 mb-6">
        I'm here to help. Send me an email or reach out with our available resources to get in contact.
      </p>
      <ButtonWithArrow 
        text="Contact Me Today"
      />
    </div>
</template>
