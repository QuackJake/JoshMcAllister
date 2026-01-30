<script setup lang="ts">
import { onMounted, ref } from 'vue'

const calendly = ref<HTMLElement | null>(null)

function loadCalendlyScript() {
  if ((window as any).Calendly) return

  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
}

onMounted(loadCalendlyScript)
</script>

<template>
  <main class="min-h-screen flex flex-col items-center">
    <!-- Header / text -->
    <div class="max-w-2xl text-center my-8">
      <h1 class="text-3xl font-semibold">
        All Services
      </h1>
      <p class="text-gray-500 mt-2">
        Schedule a consultation below.
      </p>
    </div>

    <!-- Calendly -->
    <div class="w-full max-w-5xl calendly-reset">
      <div
        ref="calendly"
        class="calendly-inline-widget w-full h-[700px] my-0 py-0"
        data-url="https://calendly.com/colledgeadvising/30min"
        data-resize="true"
      />
    </div>
  </main>
</template>
