<script setup lang="ts">
import ButtonWithArrow from "../common/ButtonWithArrow.vue";
defineProps<{
  title: string;
  price: string;
  period: string;
  showPrice: boolean;
  description: string;
  features: string[];
  buttonText: string;
  to: { name: string };
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
      class="absolute align-left -top-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
    >
      Best Value
    </div>
    <h3 class="text-2xl font-semibold mb-2 text-foreground">
      {{ title }}
    </h3>

    <div
      v-if="showPrice"
      class="flex items-baseline gap-2 mb-4"
    >
      <span class="text-4xl font-bold text-foreground">${{ price }}</span>
      <span class="text-muted-foreground text-sm">/{{ period }}</span>
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

    <ButtonWithArrow
      :text="buttonText"
      :to="to"
    />
  </div>
</template>
