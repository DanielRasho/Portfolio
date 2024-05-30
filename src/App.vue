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
  transition: transform ease 1s;
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
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
</style>
