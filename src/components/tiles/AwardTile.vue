<template>
  <li class="py-6 w-2xl grid grid-cols-[auto_1fr_auto] items-center">
    <div class="flex items-center">
      <slot name="icon"></slot>
    </div>

    <div class="text-center">
      <h2 class="text-base font-medium text-foreground"> {{ title }} </h2>
      <p class="text-sm text-muted-foreground"> {{ description }} </p>
    </div>

    <span class="text-sm font-medium text-muted-foreground">
      {{ year }}
    </span>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  year: String,
});
</script>
