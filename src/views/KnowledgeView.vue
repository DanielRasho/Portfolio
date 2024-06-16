<template>
  <section id="knowledge-section">
    <PCWindow title="Programming" container="#knowledge-section" :images="programming" />
    <PCWindow title="Web" container="#knowledge-section" :images="web" />
    <PCWindow
      title="Graphic Arts"
      container="#knowledge-section"
      :images="graphicDesign"
    ></PCWindow>
    <PCWindow title="???" container="#knowledge-section" :images="extra"></PCWindow>
  </section>
</template>
<script setup>
import Draggable from 'gsap/Draggable'
import PCWindow from '@/components/PCWindow.vue'
import { onMounted } from 'vue'

const programming = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
]

const web = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg'
]

const graphicDesign = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inkscape/inkscape-original-wordmark.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvO49NOm3hyGGdNAH3aa7Vfmxx0qKHFeHTlQ&s',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Clip_studio_file_logo_SVG.svg/2560px-Clip_studio_file_logo_SVG.svg.png',
  'https://w7.pngwing.com/pngs/268/324/png-transparent-blackmagic-davinci-resolve-logo-brand-font-blackmagic-design-davinci-resolve-14-logo-computer-logo-computer-wallpaper-thumbnail.png'
]

const extra = [
  'https://repository-images.githubusercontent.com/458803330/fd027c0e-dcbb-4127-8670-7dd92566b808'
]

onMounted(() => {})
</script>
<style>
#knowledge-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
