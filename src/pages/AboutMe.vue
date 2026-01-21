<script setup lang="ts">
import assets from "../assets/assets";
import Bio from "../components/pageComponents/Bio.vue"
import Testimonials from "../components/pageComponents/Testimonials.vue"
import AwardsAndCertifications from "../components/pageComponents/AwardsAndCertifications.vue"
import ImageGallery from "../components/imageGallery/imageGallery.vue";
</script>

<template>
  <Bio />

  <!-- horizontal line -->
  <!-- <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div> -->
  <!-- Removing for now, awaiting comments from Josh -->
  <!-- <section>My Work</section> -->

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <Testimonials />

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <AwardsAndCertifications />

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <ImageGallery> </ImageGallery>
</template>