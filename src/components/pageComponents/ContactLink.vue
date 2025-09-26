<script setup lang="ts">
    import FormTile from '../tiles/ContactMeTile.vue';
    import { navigate } from '../../routeLoader';
</script>

<template>
    <!-- Contact CTA -->
    <div class="mt-12 text-center bg-gray-50 rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">
        Still have questions?
      </h2>
      <p class="text-gray-600 mb-6">
        We're here to help. Get in touch with our team for personalized assistance.
      </p>
      <button @click="navigate('/contact')" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Contact Us Today
      </button>
    </div>
</template>
