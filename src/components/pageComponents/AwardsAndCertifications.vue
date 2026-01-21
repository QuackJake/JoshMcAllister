<template>
  <main class="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
    <div class="mx-auto max-w-2xl">
      <header class="mb-12">
        <h1 class="text-2xl font-medium tracking-tight text-foreground">
          Awards & Certifications
        </h1>
        <p class="mt-2 text-muted-foreground">
          Industry recognition and professional credentials
        </p>
      </header>

      <section>
        <ul class="divide-y divide-border">
          <AwardCard
            title="Google Cloud Partner"
            description="Certified Partner"
            year="2024"
          >
            <template #icon>
              <span class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm">
                Icon
              </span>
            </template>
          </AwardCard>

          <AwardCard
            title="AWS Solutions Architect"
            description="Professional Certification"
            year="2023"
          >
            <template #icon>
              <span class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm">
                Icon
              </span>
            </template>
          </AwardCard>

          <AwardCard
            title="Best Tech Consultant"
            description="Industry Excellence Award"
            year="2023"
          >
            <template #icon>
              <span class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm">
                Icon
              </span>
            </template>
          </AwardCard>

          <AwardCard
            title="ISO 27001"
            description="Security Certification"
            year="2022"
          >
            <template #icon>
              <span class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm">
                Icon
              </span>
            </template>
          </AwardCard>

          <AwardCard
            title="Top Rated Plus"
            description="Client Satisfaction Award"
            year="2022"
          >
            <template #icon>
              <span class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm">
                Icon
              </span>
            </template>
          </AwardCard>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
import AwardCard from "../tiles/AwardTile.vue";
</script>
