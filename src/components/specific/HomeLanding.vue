<script setup lang="ts">
import assets from '../../assets/assets'
</script>

<template>
  <section>
    <div class="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center">
      <img
        :src="assets.landing_page"
        alt="Joshua McAlister - College Counselor and Advisor"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div class="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 class="title font-bold mb-8">Coll-Edge Counseling</h1>
        <div class="subtitle font-bold text-4xl">"Get an Edge on Your College Journey"</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
    color: var(--color-white) /* #fff = #ffffff */;
    font-size: 5rem;
}

.subtitle {
    color: var(--color-white) /* #fff = #ffffff */;
    
}
</style>