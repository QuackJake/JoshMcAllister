<script setup lang="ts">
import MailToButton from '../common/MailToButton.vue'
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-4 py-4">
    <!-- Contact CTA -->
    <div class="my-12 text-center rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">
        Still have questions?
      </h2>
      <p class="text-gray-600 mb-6">
        I'm here to help. Send me an email or reach out with our available resources to get in contact.
      </p>
      <MailToButton
        text="Contact Me Today"
        subject="Test"
        body="Test"
      />
    </div>
  </section>
</template>
