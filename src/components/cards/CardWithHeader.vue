<script setup lang="ts">
defineProps<{
  title: string;
  body: string;
}>()
</script>


<template>
  <div class="relative rounded-2xl bg-white p-8 shadow-md transition-all text-left">
    <h3 class="text-2xl font-semibold mb-2 text-foreground">
      {{ title }}
    </h3>

    <p class="text-muted-foreground mb-6">
      {{ body }}
    </p>
  </div>
</template>
