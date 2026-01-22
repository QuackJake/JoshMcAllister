<script setup lang="ts">
import assets from '../assets/assets'
import HomeLanding from '../components/specific/HomeLanding.vue'
import PreferredColleges from '../components/specific/PreferredColleges.vue'
import ContactMeCTA from '../components/specific/ContactMeCTA.vue'
import ServicesCarousel from '../components/specific/ServicesCarousel.vue'
</script>

<template>
  <!-- Hero Section -->
  <HomeLanding />

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <PreferredColleges />

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <!-- Services Carousel (Static for desktop, carousel for mobile) -->
  <ServicesCarousel>

  </ServicesCarousel>

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <!-- Contact Me Section -->
  <ContactMeCTA>

  </ContactMeCTA>

  <!-- horizontal line -->
  <div class="mx-auto my-16"></div>
</template>
