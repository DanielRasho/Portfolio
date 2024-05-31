<script setup>
import { onMounted } from 'vue'
import SideBar from './components/SideBar/SideBar.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HomeView from './views/HomeView.vue'
import AbstractView from './views/AbstractView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectsView from './views/ProjectsView.vue'

const navLinks = [
  {
    text: 'Contacts',
    id: 'contacts-section'
  },
  {
    text: 'Projects',
    id: 'projects-section'
  },
  {
    text: 'Experience',
    id: 'experience-section'
  }
]

onMounted(() => {
  let emptyPath = document.getElementById('empty-path')
  let emptyPathLength = () => emptyPath.getTotalLength()
  emptyPath.style.strokeDasharray = emptyPathLength() + ' ' + emptyPathLength()
  emptyPath.style.strokeDashoffset = emptyPathLength()

  let computerPath = document.getElementById('computer-path')
  let computerPathLenght = () => computerPath.getTotalLength()
  computerPath.style.strokeDasharray = computerPathLenght() + ' ' + computerPathLenght()
  computerPath.style.strokeDashoffset = computerPathLenght()

  let infoTrack = document.getElementsByClassName('track')[0]
  let imageTrack = document.getElementsByClassName('carousel-track')[0]
  let overlay = document.getElementById('no-signal-overlay')

  ScrollTrigger.create({
    trigger: '#experience-section',
    start: '30% bottom',
    end: 'bottom 80%',
    //pin: true,
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      let scrollPercentage = self.progress.toFixed(3)
      var drawLength = emptyPathLength() * scrollPercentage
      emptyPath.style.strokeDashoffset = emptyPathLength() - drawLength
    }
  })

  ScrollTrigger.create({
    trigger: '#projects-section',
    start: 'top 80%',
    end: 'bottom bottom',
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      let scrollPercentage = self.progress.toFixed(3)
      var drawLength = computerPathLenght() * scrollPercentage
      computerPath.style.strokeDashoffset = computerPathLenght() - drawLength
    }
  })
  ScrollTrigger.create({
    trigger: '#projects-section',
    end: 'bottom+=200% bottom',
    pin: true,
    scrub: true,
    onEnter: () => {
      overlay.style.visibility = 'hidden'
    },
    onUpdate: (self) => {
      console.log(self.progress.toFixed(1))
      if (self.progress.toFixed(1) == 0.0) {
        infoTrack.style = '--project-index:0;'
        imageTrack.style = '--project-index:0;'
      } else if (self.progress.toFixed(1) == 0.3) {
        infoTrack.style = '--project-index:1;'
        imageTrack.style = '--project-index:1;'
      } else if (self.progress.toFixed(1) == 0.6) {
        infoTrack.style = '--project-index:2;'
        imageTrack.style = '--project-index:2;'
      }
    }
  })
})
</script>

<template>
  <SideBar :links="navLinks" />
  <HomeView />
  <AbstractView />
  <ExperienceView />
  <ProjectsView />

  <section id="knowledge-section"></section>
  <section id="contacts-section"></section>
</template>

<style scoped></style>
