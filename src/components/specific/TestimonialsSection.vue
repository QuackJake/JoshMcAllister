<script setup lang="ts">
import TestimonialTile from "../cards/TestimonialTile.vue"
import assets from "@/assets/assets";
</script>

<template>
  <main class="min-h-screen bg-background">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <header class="mb-16 text-center">
        <h1 class="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Student Success Stories
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          Hear from past and future graduates who have had their future shaped for the better.
        </p>
      </header>

      <div class="grid gap-8 md:grid-cols-3 lg:grid-cols-2">
        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>

        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>

        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>

        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>

        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>

        <TestimonialTile
          :image="assets.selfie"
          name="Josh McAlister"
          subtitle="Class of 2025"
          text="This platform completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation, and our engineers actually enjoy using it daily."
          college-name="Dartmouth College"
        >
          <template #collegeIcon>
            <img
              src="@/assets/collegeLogos/dartmouthCollege.png"
              class="float-left h-8 w-8 rounded-xl object-cover"
            >
          </template>
        </TestimonialTile>
      </div>
    </div>
  </main>
</template>
