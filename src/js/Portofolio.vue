<script setup>
import * as Vue from 'vue'

const topbar = Vue.ref(window.innerWidth > 669)
const page = Vue.ref(window.location.hash.substring(1) || 'home')
const open = Vue.ref(false)
const skills = Vue.ref([
  'html css js',
  'sass',
  'bootstrap',
  'tailwind',
  'jquery',
  'vue',
  'react',
  'alpinejs',
  'typescript',
  'websocket',
  'apache',
  'php',
  'codeigniter',
  'laravel',
  'lumen',
  'inertia',
  'python',
  'flask',
  'mysql',
  'mariadb',
  'sqlite',
  'git',
  'windows',
  'linux',
])

const cert = Vue.ref(new String)
const certificates = Vue.ref([
  'basic',
  'line',
  'vue',
  'laravel',
])

const projects = Vue.ref([
  {
    name: 'logbook',
    description: 'A web application for logging organization daily activities and order progress.',
    backend: ['CodeIgniter 4'],
    frontend: ['jquery', 'bootstrap'],
    link: 'https://logbook.ekfpb.com',
  },
  {
    name: 'batch record',
    description: 'A web application for recording batch production records. from create document procedure, order progress to delivery.',
    backend: ['CodeIgniter 4', 'Laravel'],
    frontend: ['jquery', 'vue', 'bootstrap', 'tailwind'],
    link: '#',
  },
  {
    name: 'template',
    description: 'Starter template for developing an application.',
    backend: ['Laravel'],
    frontend: ['vue', 'tailwind', 'inertia'],
    link: 'http://laravel-inertia-vue.herokuapp.com',
  },
])

const resize = () => {
  const content = document.querySelector('.min-h-content')
  const topbar = document.querySelector('.topbar')

  content.style.minHeight = `${window.innerHeight - topbar.clientHeight}px`
} 

Vue.onMounted(resize)
Vue.onMounted(() => window.addEventListener('resize', resize))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 300ms linear;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="bg-slate-100 w-full h-full min-h-screen flex flex-col space-y-4">
    <div class="flex flex-col w-full sticky top-0 left-0 shadow-md topbar">
      <div class="flex items-center space-x-2 w-full px-4 py-1 bg-slate-300">
        <div class="rounded-full bg-red-500 p-2 cursor-pointer"></div>
        <div class="rounded-full bg-yellow-500 p-2 cursor-pointer"></div>
        <div class="rounded-full bg-green-500 p-2 cursor-pointer"></div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 px-4 bg-slate-200">
        <div class="flex-none font-bold text-2xl capitalize flex sm:block justify-between">
          <h1>Geriano</h1>

          <button @click.prevent="topbar = ! topbar" class="sm:hidden border border-slate-700 rounded-md shadow w-8 h-8 m-1 p-1 text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current w-full h-full">
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
            </svg>
          </button>
        </div>

        <transition name="fade">
          <div v-if="topbar" class="sm:flex flex-col sm:flex-row sm:items-center sm:justify-end w-full font-semibold" :class="topbar ? 'flex' : 'hidden'">
            <a @click="page = 'home'" href="#home" class="border-b-4 border-solid border-transparent px-4 py-2 uppercase hover:bg-slate-100" :class="page === 'home' && 'rounded-t-sm bg-slate-100 border-slate-300'">home</a>
            <a @click="page = 'skill'" href="#skill" class="border-b-4 border-solid border-transparent px-4 py-2 uppercase hover:bg-slate-100" :class="page === 'skill' && 'rounded-t-sm bg-slate-100 border-slate-300'">skill</a>
            <a @click="page = 'certificate'" href="#certificate" class="border-b-4 border-solid border-transparent px-4 py-2 uppercase hover:bg-slate-100" :class="page === 'certificate' && 'rounded-t-sm bg-slate-100 border-slate-300'">certificate</a>
            <a @click="page = 'project'" href="#project" class="border-b-4 border-solid border-transparent px-4 py-2 uppercase hover:bg-slate-100" :class="page === 'project' && 'rounded-t-sm bg-slate-100 border-slate-300'">project</a>
          </div>
        </transition>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center space-y-4 w-full h-full min-h-content">
      <!-- <transition-group name="fade"> -->
        <template v-if="page === 'home'">
          <div class="flex flex-col sm:flex-row items-center justify-center space-x-4 w-full">
            <div class="flex flex-col items-center max-w-sm">
              <h1 class="text-5xl font-bold">Hello there! my name is Geriano</h1>
              <p class="text-3xl font-semibold">I'm a fullstack web developer</p>
            </div>

            <div class="flex flex-col bg-white border rounded-md shadow w-full max-w-xl">
              <div class="flex-none w-full h-full flex items-center space-x-2 justify-end px-4 py-1 bg-slate-200 rounded-t-md">
                <div class="rounded-full bg-green-500 p-2 cursor-pointer"></div>
                <div class="rounded-full bg-yellow-500 p-2 cursor-pointer"></div>
                <div class="rounded-full bg-red-500 p-2 cursor-pointer"></div>
              </div>

              <div class="flex flex-col items-center space-y-4 w-full p-4">
                <img src="assets/images/me.jpeg" alt="Geriano" class="max-h-56 w-56 object-fill rounded-full">

                <div class="flex items-center justify-center space-x-4">
                  <a href="#" class="w-10 h-10 text-slate-700 p-1 border rounded-md hover:bg-slate-100 shadow" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current w-full h-full">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </a>

                  <a href="https://t.me/Gerianooo" class="w-10 h-10 text-slate-700 p-1 border rounded-md hover:bg-slate-100 shadow" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="fill-current w-full h-full">
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/>
                    </svg>
                  </a>

                  <a href="https://github.com/Geriano" class="w-10 h-10 text-slate-700 p-1 border rounded-md hover:bg-slate-100 shadow" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="fill-current w-full h-full">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>

                  <a href="mailto:gerznewbie@gmail.com" class="w-10 h-10 text-slate-700 p-1 border rounded-md hover:bg-slate-100 shadow" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current w-full h-full">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="page === 'skill'">
          <div class="grid grid-cols-4 gap-4 p-4">
            <div v-for="(skill, i) in skills" :key="i" class="bg-white border rounded-md shadow flex items-center justify-center">
              <img :src="`assets/images/logo/${skill}.png`" :alt="skill" class="object-cover object-center" >
            </div>
          </div>
        </template>

        <template v-else-if="page === 'certificate'">
          <div class="grid grid-cols-2 gap-4 p-4 w-full">
            <div v-for="(certificate, i) in certificates" :key="i" class="bg-white border rounded-md shadow flex items-center justify-center">
              <img @click.prevent="cert = certificate; open = true" :src="`assets/images/certificate/${certificate}.png`" :alt="certificate" class="w-full h-60 object-cover object-top rounded-md cursor-pointer">
            </div>
          </div>
        </template>

        <template v-else-if="page === 'project'">
          <div class="flex flex-col space-y-4 p-4">
            <template v-for="(p, i) in projects" :key="i">
              <div class="flex space-x-4 bg-white rounded-md shadow p-4">
                <div class="w-full">
                  <a :href="p.link" class="text-3xl font-bold uppercase">{{ p.name }}</a>
                  <p class="lowercase first-letter:capitalize">{{ p.description }}</p>

                  <div class="flex-wrap">
                    <button v-for="(f, j) in [...p.frontend, ...p.backend]" :key="j" class="bg-slate-700 hover:bg-slate-800 text-white rounded shadow px-3 py-1 text-sm uppercase font-semibold m-1">
                      {{ f }}
                    </button>
                  </div>
                </div>

                <div class="flex-none w-1/4">
                  <img :src="`assets/images/project/${p.name}.png`" :alt="p.name" class="w-full h-30 rounded-md">
                </div>
              </div>
            </template>
          </div>
        </template>
      <!-- </transition-group> -->
    </div>
  </div>

  <transition name="fade">
    <div v-if="open" class="fixed top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center z-10">
      <div class="w-full max-w-5xl h-[22rem] border border-slate-300 rounded-md shadow-md overflow-y-auto bg-white">
        <div class="flex-none w-full py-1 flex items-center justify-end space-x-2 px-4 rounded-t-md bg-slate-300 sticky top-0 left-0">
          <div @click.prevent="open = false; cert = new String; project = new String" class="rounded-full bg-red-500 p-2 cursor-pointer"></div>
        </div>

        <div class="flex flex-col space-y-4 px-4 py-2">
          <template v-if="cert">
            <img :src="`assets/images/certificate/${cert}.png`" :alt="cert" class="w-full h-full rounded-md">
          </template>
        </div>
      </div>
    </div>
  </transition>

  <div v-if="open" class="fixed top-0 left-0 bg-slate-700 w-full h-screen z-0 opacity-40"></div>
</template>