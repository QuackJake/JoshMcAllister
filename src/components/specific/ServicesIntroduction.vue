<script setup lang="ts">
import TileWithHeader from "../common/TileWithHeader.vue";
import ButtonWithArrow from "../common/ButtonWithArrow.vue";
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-12 py-12">
    <div class="min-h-screen bg-background text-foreground">
      <!-- Header -->
      <header class="pt-16 pb-12 px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">
          My Services
        </h1>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Navigating the college journey can feel overwhelming, but the right guidance makes
          all the difference. Josh provides personalized support to help students make
          informed decisions, stay on track with applications, and ultimately find a college
          that’s the right fit.
        </p>
      </header>
      <!-- Main -->
      <main class="max-w-6xl mx-auto px-4 pb-20">
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <TileWithHeader
            title="Year-to-Year Services"
            body="Josh works with students every step of the way—from exploring colleges and planning academics to refining essays and managing deadlines.
            With one-on-one guidance, students build a strong foundation, develop a clear plan, and feel confident taking action in their senior year."
          />
          <TileWithHeader
            title="Advising Bundles"
            body="Our counseling bundles provide a series of services and meetings throughout the year, ensuring students make the right decisions at each stage.
            This structured approach keeps families organized, informed, and confident in their college journey."
          />
        </div>
        <ButtonWithArrow
          text="More Details About the Services I Offer"
          to="/services"
        />
      </main>
    </div>
  </section>
</template> 
