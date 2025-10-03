<script setup lang="tsx">
import assets from '../../assets/assets'
</script>

<template>
    <section>
        <div class="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center">
        <img :src="assets.test" alt="Joshua McAlister - College Counselor and Advisor"
            class="absolute inset-0 w-full h-full object-cover" />

        <div class="relative z-10 flex flex-col items-center justify-center px-4">
            <h1 class="font-bold text-gray-800 text-7xl mb-8">COLL-EDGE Counseling</h1>
            <div class="font-bold text-4xl">Get an Edge on Your College Journey</div>
        </div>

        </div>
    </section>
</template>