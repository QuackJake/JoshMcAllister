<script setup lang="ts">
defineProps<{
  title: string;
  price1: string;
  price2: string;
  period1: string;
  period2: string;
  showPrice: boolean;
  description: string;
  features: string[];
  featured?: boolean;
}>();
</script>

<template>
  <div
    class="relative rounded-2xl bg-white p-8 shadow-md transition-all text-left"
    :class="
      featured
        ? 'ring-4 ring-blue-500 shadow-lg'
        : 'border border-transparent hover:border-secondary'
    "
  >
    <div
      v-if="featured"
      class="absolute align-left -top-4 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
    >
      Best Value
    </div>
    <h3 class="text-2xl font-semibold mb-2 text-foreground">
      {{ title }}
    </h3>

    <div
      v-if="showPrice"
      class="flex items-center gap-8 mb-4"
    >
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-foreground"> ${{ price1 }} </span>
        <span class="text-muted-foreground text-lg"> / {{ period1 }} </span>
      </div>

      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-bold text-foreground"> ${{ price2 }} </span>
        <span class="text-muted-foreground text-lg"> / {{ period2 }} </span>
      </div>
    </div>
    <p
      v-if="description"
      class="text-muted-foreground mb-6"
    >
      {{ description }}
    </p>

    <ul
      v-if="features.length"
      class="list-disc list-inside space-y-2 mb-6 text-foreground"
    >
      <li
        v-for="feature in features"
        :key="feature"
      >
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
