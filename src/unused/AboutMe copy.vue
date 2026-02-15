<script setup lang="ts">
  import CardWithHeader from '@/components/cards/CardWithHeader.vue';
</script>

<template>
  <div class="bg-gradient-to-br py-12 p-4">
    <!-- Header Section -->
    <div class="text-center mb-12 bg-white">
      <h1 class="text-4xl font-bold text-gray-800 mb-2">
        Jake Quackenbush
      </h1>
      <p class="text-xl text-gray-600 mb-4">
        Full Stack Developer & Designer
      </p>
      <p class="text-gray-500 max-w-2xl mx-auto">
        Passionate about creating beautiful, functional web experiences that make a difference. 
        Always learning, always building, always growing.
      </p>
    </div>

    <!-- Tile Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- About Tile -->
      <CardWithHeader 
        title="About Me"
        custom-class="md:col-span-2"
      >
        <template #body>
          <p class="text-gray-600 leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful solutions. When I'm not coding, 
            you'll find me exploring new technologies, contributing to open source, or enjoying the outdoors.
          </p>
        </template>
      </CardWithHeader>

      <!-- Skills Tile -->
      <CardWithHeader
        title="My Skills"
      > 
        <template #body>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Node.js</span>
            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Python</span>
            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">SQL</span>
          </div>
        </template>
      </CardWithHeader>

      <!-- Experience Tile -->
      <CardWithHeader
        title="Experience"
      >
        <template #body>
          <div>
            <h3 class="font-medium text-gray-800">
              Senior Developer
            </h3>
            <p class="text-sm text-gray-600">
              Tech Corp • 2021 - Present
            </p>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">
              Full Stack Developer
            </h3>
            <p class="text-sm text-gray-600">
              StartupXYZ • 2019 - 2021
            </p>
          </div>
        </template>
      </CardWithHeader>

      <!-- <CardWithHeader>
          <template #header>

          </template>

          <template #body>

          </template>
      </CardWithHeader> -->


      <!-- Education Tile -->
      <CardWithHeader
        title="Education"
      >
        <template #body>
          <div>
            <h3 class="font-medium text-gray-800">
              Computer Science
            </h3>
            <p class="text-sm text-gray-600">
              University of Technology
            </p>
            <p class="text-sm text-gray-500">
              Bachelor's Degree • 2019
            </p>
          </div>
        </template>
      </CardWithHeader>

      
      <!-- Contact Tile -->
      <CardWithHeader 
        title="Contact Me"
      >
        <template #body>
          <a
            href="mailto:john@example.com"
            class="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Mail class="w-4 h-4 mr-2" />
            john@example.com
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            class="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Linkedin class="w-4 h-4 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            class="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Github class="w-4 h-4 mr-2" />
            GitHub
          </a>
        </template>
      </CardWithHeader>

      <!-- Projects Tile -->
      <CardWithHeader 
        title="My Projects"
        custom-class="md:col-span-2"
        body-spacing="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <template #body>
          <div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <h3 class="font-medium text-gray-800 mb-2">
              E-commerce Platform
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Full-stack web application with payment integration
            </p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Node.js</span>
            </div>
          </div>
          <div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <h3 class="font-medium text-gray-800 mb-2">
              Task Management App
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Collaborative project management tool
            </p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">React</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Firebase</span>
            </div>
          </div>
        </template>
      </CardWithHeader>

      <!-- Interests Tile -->
      <CardWithHeader
        title="Interests"
      >
        <template #body>
          <div class="flex items-center">
            <Camera class="w-4 h-4 text-gray-500 mr-2" />
            <span class="text-gray-700">Photography</span>
          </div>
          <div class="flex items-center">
            <Mountain class="w-4 h-4 text-gray-500 mr-2" />
            <span class="text-gray-700">Hiking</span>
          </div>
          <div class="flex items-center">
            <Music class="w-4 h-4 text-gray-500 mr-2" />
            <span class="text-gray-700">Music Production</span>
          </div>
          <div class="flex items-center">
            <BookOpen class="w-4 h-4 text-gray-500 mr-2" />
            <span class="text-gray-700">Reading</span>
          </div>
        </template>
      </CardWithHeader>
    </div>
  </div>
</template>