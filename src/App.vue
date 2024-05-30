<script setup>
import SideBar from './components/SideBar/SideBar.vue'

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
  <section id="abstract-section"></section>
  <section id="experience-section"></section>
  <section id="projects-section"></section>
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

#abstract-section {
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-green);
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
</style>
