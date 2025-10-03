<template>
  <div ref="viewport" class="infinite-viewport" aria-hidden="true">
    <div
      ref="scroller"
      class="scroller"
      :style="{
        '--scroll-distance': scrollDistance + 'px',
        '--anim-duration': duration + 's'
      }"
    >
      <div class="grid">
        <div
          v-for="(src, i) in doubledImages"
          :key="i"
          class="cell"
          @dragstart.prevent
        >
          <img
            :src="src"
            alt=""
            draggable="false"
            class="cell-img"
            tabindex="-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

/**
 * CONFIG
 * rows: number of rows in the "logical" grid (not the visible viewport)
 * cols: number of columns (2)
 * visibleRows: number of rows visible at once (3)
 */
const rows = 8
const cols = 2
const visibleRows = 3

const baseImages = Array.from({ length: rows * cols }, (_, i) =>
  `https://picsum.photos/seed/${i + 1}/800`
)

const doubledImages = [...baseImages, ...baseImages]

const viewport = ref(null)
const scroller = ref(null)

const scrollDistance = ref(0)
const duration = ref(0)

let ro = null

function updateMeasurements() {
  if (!viewport.value) return

  const viewportWidth = viewport.value.clientWidth
  const square = viewportWidth / cols

  const desiredHeight = square * visibleRows
  viewport.value.style.height = `${desiredHeight}px`

  const totalGridHeight = square * rows

  scrollDistance.value = totalGridHeight

  const speedPerRow = 7 
  duration.value = Math.max(5, rows * speedPerRow)
}

onMounted(() => {
  updateMeasurements()
  // responsive: observe size changes
  ro = new ResizeObserver(updateMeasurements)
  if (viewport.value) ro.observe(viewport.value)
})

onBeforeUnmount(() => {
  if (ro && viewport.value) ro.unobserve(viewport.value)
})
</script>

<style scoped>
/* viewport masks the scroller to show only visible rows */
.infinite-viewport {
  width: 100%;
  max-width: 800px; /* optional max */
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  /* height is set via JS to match 3 squares high responsively */
  box-sizing: border-box;
}

/* scroller moves upward continuously; CSS vars set from script */
.scroller {
  display: block;
  /* make sure inner has enough height to contain duplicated content */
  animation-name: scroll-up;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: var(--anim-duration, 12s);
  will-change: transform;
}

/* grid layout: 2 columns, as many rows as items */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px; /* spacing between squares */
}

/* each cell keeps a perfect square */
.cell {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  pointer-events: none; /* images are non-interactive */
  user-select: none;
  -webkit-user-drag: none;
}

/* image fills the square, center-cropped */
.cell-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* ensure clicks don't interact */
  user-select: none;
  -webkit-user-drag: none;
}

/* Animation uses the CSS variable --scroll-distance (px) */
@keyframes scroll-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(var(--scroll-distance) * -1));
  }
}
</style>
