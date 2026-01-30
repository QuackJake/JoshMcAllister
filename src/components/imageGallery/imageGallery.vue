<script setup lang="ts">
import galleryImages from "@/assets/galleryImages/galleryImages";
import GalleryRow from "./galleryRow.vue";
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div>
      <h1>Image Gallery</h1>
    </div>
    <GalleryRow
      layout="one"
      :images="[{ src: galleryImages.mountains, alt: 'Mountains' }]"
    />
    <GalleryRow
      layout="two"
      :images="[
        { src: galleryImages.mountains, alt: 'Mountains' },
        { src: galleryImages.selfie, alt: 'Selfie' },
      ]"
    />
    <GalleryRow
      layout="three"
      :images="[
        { src: galleryImages.mountains, alt: 'Mountains' },
        { src: galleryImages.sunset, alt: 'sunset' },
        { src: galleryImages.selfie, alt: 'Selfie' },
      ]"
    />
    <GalleryRow
      layout="oneThirdLeft"
      :images="[
        { src: galleryImages.mountains, alt: 'Mountains' },
        { src: galleryImages.selfie, alt: 'Selfie' },
      ]"
    />
    <GalleryRow
      layout="oneThirdRight"
      :images="[
        { src: galleryImages.mountains, alt: 'Mountains' },
        { src: galleryImages.selfie, alt: 'Selfie' },
      ]"
    />
  </div>
</template>
