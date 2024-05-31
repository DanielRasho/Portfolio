<script setup>
import { onMounted } from 'vue'
import SideBar from './components/SideBar/SideBar.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HomeView from './views/HomeView.vue'
import AbstractView from './views/AbstractView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectsView from './views/ProjectsView.vue'
import KnowledgeView from './views/KnowledgeView.vue'

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
  <KnowledgeView />

  <footer id="contacts-section">
    <div>
      <div><span>PRINCIPAL</span></div>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/daniel-alfredo-rayo-rold%C3%A1n-38727a303/"
        target="_blank"
        ><span>Linkedln </span><i class="fa-solid fa-paperclip"></i
      ></a>
      <a href="mailto: drayoroldan@gmail.com" target="_blank"
        ><span>Mail</span><i class="fa-solid fa-paperclip"></i
      ></a>
      <a href="https://github.com/DanielRasho" target="_blank"
        ><span>Github</span> <i class="fa-solid fa-paperclip"></i
      ></a>
    </div>
  </footer>
</template>

<style scoped>
#contacts-section {
  height: 30vh;
  background-color: var(--dark-green);
  display: flex;
  justify-content: center;
  align-items: center;
}
#contacts-section > div {
  width: 20ch;
}
#contacts-section a {
  margin-top: 1rem;
  cursor: pointer;
}
#contacts-section a:hover {
  background-color: var(--white);
}
#contacts-section a:hover * {
  color: var(--dark-green);
}

#contacts-section > :nth-child(2) {
  display: flex;
  flex-direction: column;
}
#contacts-section * {
  color: var(--white);
}
#contacts-section span {
  font-family: 'IBM Plex Mono';
  font-size: 1.2rem;
}
</style>
