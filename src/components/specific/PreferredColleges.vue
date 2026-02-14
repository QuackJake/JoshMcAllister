<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import collegeLogos from '@/assets/collegeLogos/collegeLogos.ts'
import ButtonWithArrow from '../common/ButtonWithArrow.vue'

const rows = 8
const cols = 2
const visibleRows = 3

const total = rows * cols

const baseImages = computed(() =>
  Array.from({ length: total }, (_, i) => collegeLogos[i % collegeLogos.length])
)

const doubledImages = computed(() => [...baseImages.value, ...baseImages.value])

const viewport = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)

const scrollDistance = ref(0)
const duration = ref(0)

let ro: ResizeObserver | null = null

async function updateMeasurements() {
  if (!viewport.value) return

  const viewportWidth = viewport.value.clientWidth
  const square = viewportWidth / cols

  const desiredHeight = square * visibleRows
  viewport.value.style.height = `${desiredHeight}px`

  const totalGridHeight = square * rows
  scrollDistance.value = totalGridHeight

  const speedPerRow = 7
  duration.value = Math.max(5, rows * speedPerRow)

  await nextTick()
  void viewport.value.offsetHeight
}

onMounted(() => {
  updateMeasurements()

  ro = new ResizeObserver(updateMeasurements)
  if (viewport.value) ro.observe(viewport.value)
})

onBeforeUnmount(() => {
  if (ro && viewport.value) ro.unobserve(viewport.value)
})
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-12 py-12">
    <!-- Left Side Paragraph -->
    <div class="md:w-1/2 text-center md:text-left space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        Trusted by Families, Recognized by Professionals
      </h2>
      <p class="text-gray-600 leading-relaxed mb-8">
        Our students have been accepted to universities across the country. The colleges seen here represent just a few of the many schools where our guidance has helped applicants succeed.
      </p>

      <ButtonWithArrow
        text="Learn More About Me"
        to="/about"
      />
    </div>

    <!-- Right Side Scrolling Elements -->
    <div class="md:w-1/2">
      <div
        ref="viewport"
        class="mx-auto overflow-hidden relative w-full"
        aria-hidden="true"
      >
        <div
          ref="scroller"
          :key="scrollDistance"
          class="animate-[scroll-up_var(--anim-duration)_linear_infinite] will-change-transform"
          :style="{
            '--scroll-distance': scrollDistance + 'px',
            '--anim-duration': duration + 's'
          }"
        >
          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="(src, i) in doubledImages"
              :key="i"
              class="w-full aspect-square overflow-hidden select-none pointer-events-none"
            >
              <img
                :src="src"
                alt=""
                draggable="false"
                class="w-full h-full object-contain block select-none pointer-events-none"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
@keyframes scroll-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(var(--scroll-distance) * -1));
  }
}
</style>