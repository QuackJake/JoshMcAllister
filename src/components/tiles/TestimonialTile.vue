<template>
  <article class="rounded-2xl bg-card p-6 shadow-md">
    <div class="flex items-center gap-4">
        <img :src="image" alt="" class="h-24 w-24 rounded-full object-cover" />

        <div class="flex flex-col justify-center items-center w-3/4">
            <h2 class="text-xl font-semibold text-foreground">{{ name }}</h2>
            <p class="text-sm text-muted-foreground">{{ subtitle }}</p>
        </div>
    </div>


    <div class="mt-4">

      <p class="mt-4 text-base text-foreground">"{{ text }}"</p>

      <div class="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <slot name="collegeIcon"></slot>
        <span>{{ collegeName }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  image: String,
  name: String,
  subtitle: String,
  text: String,
  collegeName: String,
});
</script>
