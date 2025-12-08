<script setup lang="ts">
import assets from '../../assets/assets';
import ServiceTile from '../tiles/ServiceTile.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
function goToContact() {
  router.push('/contact')
}
</script>

<template>
    <section>
        <div class="flex flex-col justify-center ">
            <h1 class="mt-4 mb-16">My Services</h1>
            <div class="flex justify-between p-0">
                <ServiceTile
                    :image="assets.stock_mountains"
                    service-title="Junior Year Services"
                    :route="() => router.push('/calendar')"
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
                    :image="assets.selfie"
                    service-title="Junior Year Services"
                    :route="() => router.push('/calendar')"
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
                    service-title="Junior Year Services"
                    :route="() => router.push('/calendar')"
                >
                    <template #body>
                        <p>
                            I'm a passionate full-stack developer with 5+ years of experience building web applications.
                            I love turning complex problems into simple, beautiful solutions. When I'm not coding,
                            you'll find me exploring new technologies, contributing to open source, or enjoying the
                            outdoors.
                        </p>
                    </template>
                </ServiceTile>
            </div>
        </div>
    </section>
</template>