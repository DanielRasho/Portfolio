<script setup>
import { onMounted } from 'vue'
import SideBar from './components/SideBar/SideBar.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'

const navLinks = [
  {
    text: 'Experience',
    id: '#experience-section'
  },
  {
    text: 'Projects',
    id: 'projects-section'
  },
  {
    text: 'Contacts',
    id: 'contacts-section'
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

  ScrollTrigger.create({
    trigger: '#experience-section',
    start: '30% bottom',
    end: 'bottom 80%',
    //pin: true,
    scrub: true,
    invalidateOnRefresh: true,
    markers: true,
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
    markers: true,
    onUpdate: (self) => {
      let scrollPercentage = self.progress.toFixed(3)
      var drawLength = computerPathLenght() * scrollPercentage
      computerPath.style.strokeDashoffset = computerPathLenght() - drawLength
    }
  })
})
</script>

<template>
  <SideBar :links="navLinks" />
  <section id="home-hero">
    <div class="home-name">
      <span class="hero-big-letter">D</span>
      <span class="hero-small-letter">aniel</span>
    </div>
    <div class="hero-img">
      <img src="./assets/images/coverHuman.webp" alt="coverHuman.webp" />
    </div>
    <div class="home-last-name">
      <span class="hero-big-letter">R</span>
      <span class="hero-small-letter">ayo</span>
    </div>
  </section>

  <section id="abstract-section">
    <div class="abstract-left">
      <div class="img-container">
        <img src="./assets/images/sideHuman.webp" alt="My dev side" />
      </div>
      <div class="dev-title">DEV</div>
      <div class="dev-description">
        <div>
          Im a CS student dedicated to full stack software development, interested in graphics and
          simulation.
        </div>
      </div>
    </div>
    <div class="abstract-right">
      <div class="img-container">
        <img src="./assets/images/sideRobot.webp" alt="My design side" />
      </div>
      <div class="design-title">DESIGN</div>
      <div class="design-description">
        <div>
          I have also developed in the world of graphic arts, which gives me good intuition to
          Design and develop good-looking UI.
        </div>
      </div>
    </div>
  </section>

  <section id="experience-section">
    <div class="line-container">
      <svg
        viewBox="0 0 245 1086"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: square;
          stroke-linejoin: round;
          stroke-miterlimit: 1.5;
        "
        preserve-aspect-ratio="xMidYMax meet"
      >
        <path
          id="empty-path"
          d="M1443.18 3807.84s-131.43.56-194.46-15.43c-75.33-19.11-201.63-93.87-257.529-99.24-58.308-5.6-70.985 24.37-70.985 24.37s-.193.4 1.057 16.56c4.285 22.96 11.8 17.7 12.454 16.2 4.719-10.81-20.733-18.3-20.11-5.41.364 7.52 19.405 17.76 20.476 23.31.274 1.42-2.23 4.97-19.767 0 6.287 3.31 18.822 6.92 18.99 15.83.105 5.58-17.152 1.31-18.598.95 1.826.93 23.229 11.82 18.461 17.75-4.108 5.1-20.301-4.68-20.933 1-1.194 10.75 19.907 19.8 21.847 20.76-3.276-.83-6.909-1.19-44.973-10.31 35.578 11.07 44.646 8.4 39.877 20.95-.995 2.62-17.891 5.67-16.751-14.46-.165 1.96.307 18.1 11.655 25.96 17.364 12.01 18.394 9.49 39.008 13.16-10.399-1.26-15.79-4.43-14.785 6.21-.055-1.78-.434-14.19-.345-22.31.032 6.34.249 6.17-.609 12.35-15.391-2.9-41.547-4.08-32.844 2.72 6.099 4.77 43.15 21 3.61 11.06-1.512-.38-4.45.45-2.742 4.11 2.459 5.28 15.966 11.78 17.985 12.55-38.302-2.59-45.487-15.78-44.059-18.45 4.89-9.13 27.773 11.23 31.096 34.08v11.97s6.197 44.96-91.288-11.97c-46.908-27.39-89.356-74.1-141.847-81.44-174.097-24.35-323.891-12.83-323.891-12.83"
          style="fill: none; stroke: #2a4f5a; stroke-width: 4px"
          transform="matrix(0 -.99999 1 0 -3689.649 1446.01)"
        />
      </svg>
    </div>
    <div class="cat">
      <div>Waiting for something to happen? Then keep scrolling</div>
      <img src="./assets/images/cat.webp" alt="A grumpy cat" />
    </div>
  </section>
  <section id="projects-section">
    <div class="line-container">
      <svg
        viewBox="0 0 722 816"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: square;
          stroke-linejoin: round;
          stroke-miterlimit: 1.5;
        "
      >
        <path
          id="computer-path"
          d="M2946.56 4320v350.64s-12.6 211.35 66.3 221.21c78.89 9.86 88.54 13.81 0 31.77-88.56 17.95-271.5 39.8 24.34 72.67s616.34 110.12 154.49 118.34c-461.84 8.22-483.21 14.79-483.21 14.79"
          style="fill: none; stroke: #fffdf0; stroke-width: 4px"
          transform="matrix(1 0 0 .99999 -2705.658 -4317.17)"
        />
      </svg>
    </div>
  </section>
  <section id="knowledge-section"></section>
  <section id="contacts-section"></section>
</template>

<style scoped>
#home-hero {
  width: 100vw;
  min-height: 100vh;
}
.home-name,
.home-last-name,
.hero-img {
  position: absolute;
}

.home-name {
  top: 20%;
  left: 15%;
}

.home-last-name {
  bottom: 10%;
  right: 10%;
}

#home-hero .hero-big-letter {
  font-size: 25rem;
  font-family: 'Keystone';
  display: block;
  line-height: 10rem;
}
#home-hero .hero-small-letter {
  font-size: 10rem;
  font-family: 'Keystone';
  display: block;
  color: var(--white);
  text-stroke: 3px var(--dark-green);
  -webkit-text-stroke: 3px var(--dark-green);
}

.hero-img {
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.hero-img img {
  width: 100%;
}

@media only screen and (max-width: 1400px) {
  #home-hero .hero-big-letter {
    font-size: 20rem;
  }
  #home-hero .hero-small-letter {
    font-size: 8rem;
  }
}
@media only screen and (max-width: 1020px) {
  .home-name,
  .home-last-name,
  .hero-img {
    position: static;
  }
  .home-name,
  .home-last-name {
    display: flex;
    align-items: end;
    width: fit-content;
    margin: 8ch auto;
  }

  #home-hero .hero-big-letter {
    font-size: 10rem;
  }
  #home-hero .hero-small-letter {
    font-size: 5rem;
  }

  .hero-img {
    width: 60%;
    margin: 1ch auto;
    transform: none;
  }
}

#abstract-section {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
}

#abstract-section .abstract-left,
#abstract-section .abstract-right {
  overflow: hidden;
  position: relative;
  width: 50%;
  display: flex;
  align-items: end;
}

#abstract-section .abstract-left {
  justify-content: right;
}

#abstract-section .img-container {
  height: 85vh;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
  z-index: 100;
}

#abstract-section .img-container img {
  height: 100%;
  object-fit: contain;
}

#abstract-section .abstract-right .img-container {
  transform: translate(-35%);
}
#abstract-section .abstract-left .img-container {
  transform: translate(25%);
}
#abstract-section .abstract-left .img-container:hover {
  transform: translate(10%);
}
#abstract-section .abstract-right .img-container:hover {
  transform: translate(-20%);
}

#abstract-section .dev-description,
#abstract-section .design-description,
#abstract-section .dev-title,
#abstract-section .design-title {
  position: absolute;
}

#abstract-section .dev-title,
#abstract-section .design-title {
  font-family: 'Avigea';
  font-size: 9rem;
  bottom: 10%;
}
#abstract-section .dev-title {
  left: 45%;
  transform: translate(-50%);
}
#abstract-section .design-title {
  left: 55%;
  transform: translate(-50%);
}

#abstract-section .dev-description {
  font-size: 1.5rem;
  width: 20ch;
  border-left: 2px solid var(--dark-green);
  padding-left: 1ch;
  transform: translate(-50%);
  left: 45%;
  top: 30%;
}
#abstract-section .design-description {
  font-size: 1.5rem;
  width: 20ch;
  border-left: 2px solid var(--dark-green);
  padding-left: 1ch;
  transform: translate(50%);
  right: 40%;
  top: 30%;
}

@media only screen and (max-width: 1600px) {
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 6.5rem;
  }
}
@media only screen and (max-width: 1460px) {
  #abstract-section .abstract-left,
  #abstract-section .abstract-right {
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    align-items: end;
  }
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 9rem;
  }
  #abstract-section {
    display: block;
    height: auto;
  }
}
@media only screen and (max-width: 900px) {
  #abstract-section .abstract-left,
  #abstract-section .abstract-right {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 7rem;
    bottom: 50%;
  }

  #abstract-section .dev-title {
    transform: rotateZ(-90deg) translateY(-50%);
    left: 20%;
  }
  #abstract-section .design-title {
    transform: rotateZ(-90deg) translateY(50%);
    right: 20%;
  }
  #abstract-section .abstract-left .img-container,
  #abstract-section .abstract-right .img-container {
    transform: translate(50%);
    width: 65%;
    height: auto;
    overflow: visible;
  }
  #abstract-section .abstract-right .img-container {
    transform: translate(-50%);
    width: 65%;
    height: auto;
  }
  #abstract-section .abstract-left .img-container img,
  #abstract-section .abstract-right .img-container img {
    width: 100%;
  }

  #abstract-section .dev-description,
  #abstract-section .design-description {
    width: 70%;
    position: static;
    transform: none;
    margin-right: 20%;
    margin-left: 20%;
    margin: 5rem 20%;
  }

  #abstract-section .abstract-left .img-container:hover {
    transform: translate(50%);
  }
  #abstract-section .abstract-right .img-container:hover {
    transform: translate(-50%);
  }
}

#experience-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: end;
}

#experience-section .line-container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
}

#experience-section svg {
  display: inline-block;
  height: 100%;
}

.cat {
  margin-right: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.cat div {
  text-align: left;
  font-size: 1.2rem;
  width: 20ch;
  margin-bottom: 3rem;
  position: relative;
}

.cat div::after {
  content: '';
  width: 1px;
  height: 2rem;
  background-color: var(--dark-green);
  position: absolute;
  bottom: -50%;
  left: 40%;
}

#projects-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--dark-green);
}

#projects-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: var(--dark-green);
}

#projects-section .line-container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
}

#projects-section svg {
  display: inline-block;
  height: 70%;
  transform: translate(16%);
}

#knowledge-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--white);
}
</style>
