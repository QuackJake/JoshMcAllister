<script setup lang="ts">
import AwardCard from "@/components/cards/AwardCard.vue";
import assets from "@/assets/assets.ts";
</script>

<template>
  <section class="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
    <div class="mx-auto max-w-2xl">
      <header class="mb-12">
        <h1 class="text-2xl font-medium tracking-tight text-foreground">
          Awards & Certifications
        </h1>
        <p class="mt-2 text-muted-foreground">
          Here are some of the Awards, Certifications, and Commendations I have received
          during my career as a college counselor
        </p>
      </header>

      <ul class="divide-y divide-border">
        <AwardCard
          :image="assets.test_logo"
          title="Google Cloud Partner"
          description="Certified Partner"
          year="2024"
        >
          <template #icon>
            <span
              class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm"
            >
              Icon
            </span>
          </template>
        </AwardCard>

        <AwardCard
          :image="assets.test_logo"
          title="AWS Solutions Architect"
          description="Professional Certification"
          year="2023"
        >
          <template #icon>
            <span
              class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm"
            >
              Icon
            </span>
          </template>
        </AwardCard>

        <AwardCard
          :image="assets.test_logo"
          title="Best Tech Consultant"
          description="Industry Excellence Award"
          year="2023"
        >
          <template #icon>
            <span
              class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm"
            >
              Icon
            </span>
          </template>
        </AwardCard>

        <AwardCard
          :image="assets.test_logo"
          title="ISO 27001"
          description="Security Certification"
          year="2022"
        >
          <template #icon>
            <span
              class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm"
            >
              Icon
            </span>
          </template>
        </AwardCard>

        <AwardCard
          :image="assets.test_logo"
          title="Top Rated Plus"
          description="Client Satisfaction Award"
          year="2022"
        >
          <template #icon>
            <span
              class="h-5 w-5 inline-flex items-center justify-center rounded bg-muted text-sm"
            >
              Icon
            </span>
          </template>
        </AwardCard>
      </ul>
    </div>
  </section>
</template>
