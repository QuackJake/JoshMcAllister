<template>
  <li class="py-6 flex items-center justify-between w-2xl">
    <div class="flex items-center gap-3">
      <slot name="icon"></slot>

      <div>
        <h2 class="text-base font-medium text-foreground">{{ title }}</h2>
        <p class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
    </div>

    <span class="text-sm font-medium text-muted-foreground">{{ year }}</span>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  year: String,
});
</script>
