<script setup lang="ts">
  import { navigate } from '../routeLoader'
  import assets from '../assets/assets'
  import ServiceTile from '../components/tiles/ServiceTile.vue'
  import ContactLink from '../components/pageComponents/ContactLink.vue'
</script>

<template>
  <!-- Image Section -->
  <section 
    class="hero-section flex-col items-center justify-center text-center"
    :style="{ backgroundImage: `url(${assets.test})` }"
    >
    <h1 class="font-bold text-gray-800 mb-8">Joshua McAlister</h1>
    <div class="flex items-center flex-wrap gap-8 ">
      <h2>College Counselor and Advisor</h2>
      <button @click="navigate('/about')">
        About Me
      </button>
    </div>
  </section>

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>


  <!-- About Section -->
  <section class="h-[100vh]">
    <div class="p-4 ">
      <h1 class="mb-16">My Story, Your Future</h1>
      <img
        :src="assets.selfie"
        alt="Joshua McAlister"
        class="float-left h-auto max-w-[45vh] mr-16 mb-2 rounded object-cover m-4"
      />
      <p class="text-xl text-left">
        Josh was born in Utah and raised in Wyoming. Having grown up in Wyoming and attended college in Colorado, Josh is no stranger to the Mountain West. He began his journey eastward living in both Arkansas and Tennessee for over a year each eventually leading him to travel to a total of 43 U.S. States. Josh later lived in Taiwan for 13 years as an educator and traveled to over 10 countries across Asia and Oceania. In 2015, Josh McAlister had begun serving as a dedicated college counselor, beginning his work at an international school in Taiwan and guiding students through applications to universities across the United States, the United Kingdom, Switzerland, South Africa, and New Zealand. In 2017, Josh moved with his family to continue working as a college counselor at a boarding school in central Utah.
        <br>
        <br>
        With a BA in Political Science, a Masters of Education (M. Ed), and over 20 years of classroom experience in the US and abroad, Josh brings a deep understanding of diverse student pathways, tailoring guidance to each individual’s aspirations and strengths. His student-centered approach prioritizes building meaningful relationships, enabling him to understand students’ unique needs and create supportive programs that boost confidence, reduce stress, and allow them to remain focused on academics, athletics, and social life. Over the past eight years, Josh has further developed his expertise by attending national and regional college counseling conferences, as well as visiting a wide range of colleges and universities, building valuable connections and broadening his knowledge of the higher education landscape.
      </p>
    </div>
  </section>

  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <section>
    <div class="flex flex-col justify-center ">
      <h1 class="mt-4 mb-16">My Services</h1>
      <div class="flex justify-between p-0">
        <ServiceTile
          :image="assets.stock_mountains"
          service-title="Junior Year Services"
          :route="() => navigate('/calendar')"
        >
          <template #body>
            <p>
              Junior year is all about exploration and building a strong foundation.
              Through one-on-one guidance, Josh helps students discover colleges that fit their interests, plan ahead with academics and extracurriculars, and begin shaping their application story. From essay brainstorming and recommendation strategies to test timelines and summer opportunities, students finish the year with a clear, personalized plan and a preliminary college list in place.
            </p>
          </template>
        </ServiceTile>

        <ServiceTile
          :image="assets.selfie"
          service-title="Senior-Year Services"
          :route="() => navigate('/purchase')"
        >
          <template #body>
            <p>
              Senior year is the time to put everything into action.
              Josh works closely with students to finalize their college lists, refine essays, and stay on track with applications, interviews, and deadlines.
              With personalized support for scholarships, financial aid, and admissions decisions, students feel confident navigating the final steps of the process—and choosing the right college fit.
            </p>
          </template>
        </ServiceTile>

        <ServiceTile
          :image="assets.test"
          service-title="Confidence Packages"
          :route="() => navigate('/schedule')"
        >
          <template #body>
            <p>
                I'm a passionate full-stack developer with 5+ years of experience building web applications.
                I love turning complex problems into simple, beautiful solutions. When I'm not coding,
                you'll find me exploring new technologies, contributing to open source, or enjoying the outdoors.
            </p>
          </template>
        </ServiceTile>
      </div>
    </div>
  </section>
  
  <!-- horizontal line -->
  <div class="h-[2px] bg-black w-3/4 mx-auto my-16"></div>

  <contact-link>
    
  </contact-link>
</template>

<style scoped>
  .hero-section {
    min-height: 85vh;
    height: auto;
    width: 100%;
    padding: 2rem;
    display: flex;
    background-size: cover;
    background-position: center;
    margin-top: 2rem;
  }
</style>
