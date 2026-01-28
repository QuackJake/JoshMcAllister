<script setup lang="ts">
defineProps<{
  title: renderToString;
  body: string;
}>()
</script>


<template>
  <div class="relative rounded-2xl bg-white p-8 shadow-md transition-all text-left">

    <h3 class="text-2xl font-semibold mb-2 text-foreground">{{ title }}</h3>

    <p class="text-muted-foreground mb-6">
      {{ body }}
    </p>
  </div>
</template>




<!--<template>
  <div :class="['bg-white rounded-xl shadow-lg shadow-black/25 hover:shadow-lg transition-shadow duration-300 p-6', customClass]">
    <div class="flex items-center mb-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
    </div>
    <div :class="[bodySpacing || 'space-y-3']">
      <slot name="body" />
    </div>
  </div>
</template> -->