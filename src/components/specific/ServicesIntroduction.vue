<script setup lang="ts">
import assets from "../../assets/assets";
import ServiceTile from "../tiles/ServiceTile.vue";
import ServiceCard from "../tiles/ServiceCard.vue";
import TileWithHeader from "../common/TileWithHeader.vue";
import ButtonWithArrow from "../common/ButtonWithArrow.vue";
</script>

<template>

  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="pt-16 pb-12 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">My Services</h1>
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
</template>

<!--<template>
    <section>
        <div class="flex flex-col justify-center max-w-6xl mx-auto">
            <h1 class="mt-4 mb-16">My Services</h1>
            <div class="flex justify-between p-0">
                 <ServiceTile
                    :image="assets.stock_mountains"
                    service-title="Junior Year Services"
                    to="/services"
                >
                    <template #body>
                        <p>
                            Junior year is all about exploration and building a strong foundation.
                            Through one-on-one guidance, Josh helps students discover colleges that fit their interests,
                            plan ahead with academics and extracurriculars, and begin shaping their application story.
                            From essay brainstorming and recommendation strategies to test timelines and summer
                            opportunities, students finish the year with a clear, personalized plan and a preliminary
                            college list in place.
                        </p>
                    </template>
                </ServiceTile>

                <ServiceTile
                    :image="assets.stock_mountains"
                    service-title="Senior Year Services"
                    to="/services"
                >
                    <template #body>
                        <p>
                            Senior year is the time to put everything into action.
                            Josh works closely with students to finalize their college lists, refine essays, and stay on
                            track with applications, interviews, and deadlines.
                            With personalized support for scholarships, financial aid, and admissions decisions,
                            students feel confident navigating the final steps of the process—and choosing the right
                            college fit.
                        </p>
                    </template>
                </ServiceTile>

                <ServiceTile
                    :image="assets.stock_mountains"
                    service-title="Counseling Bundles"
                    to="/services"
                >
                    <template #body>
                        <p>
                            We bundle different services and meetings over the course of a year to ensure that
                            the correct decisions are being made every step of the way.
                        </p>
                    </template>
                </ServiceTile>
            </div>
        </div>
    </section>
</template> -->
