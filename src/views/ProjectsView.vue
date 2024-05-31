<template>
  <section id="projects-section">
    <div class="line-container">
      <svg viewBox="0 0 722 816" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="">
        <path
          id="computer-path"
          d="M2946.56 4320v350.64s-12.6 211.35 66.3 221.21c78.89 9.86 88.54 13.81 0 31.77-88.56 17.95-271.5 39.8 24.34 72.67s616.34 110.12 154.49 118.34c-461.84 8.22-483.21 14.79-483.21 14.79"
          style="fill: none; stroke: #fffdf0; stroke-width: 4px"
          transform="matrix(1 0 0 .99999 -2705.658 -4317.17)"
          preserve-aspect-ratio="xMidYMax meet"
        />
      </svg>
    </div>
    <div class="project-images">
      <div class="pc-display">
        <div class="carousel-track">
          <div id="no-signal-overlay" class="image-item">
            <img src="../assets/images/noSignalOverlay.webp" alt="hello" />
          </div>
          <div class="image-item">
            <img src="../assets/images/Jlisp.webp" alt="hello" />
          </div>
          <div class="image-item">
            <img src="../assets/images/WireWiz.webp" alt="hello" />
          </div>
          <div class="image-item">
            <img src="../assets/images/BrushWire.webp" alt="hello" />
          </div>
        </div>
      </div>
      <img class="pc-frame" src="../assets/images/computer.webp" alt="" />
    </div>
    <div class="project-info">
      <div class="track">
        <div class="project-item">
          <div class="project-title">Lisp Interpreter</div>
          <div class="project-description">
            A small implementation of Lisp on Java supporting many operations, and capable of
            detecting syntax errors.
          </div>
          <ImportantButton
            text="Link to Code"
            href="https://github.com/DiegoLinares11/LISP-Project"
          />
        </div>
        <div class="project-item">
          <div class="project-title">WireWiz</div>
          <div class="project-description">
            A simulator for electrons flow through a wire. Made with Vue
          </div>
          <ImportantButton text="Link to Code" href="https://github.com/DanielRasho/wireWiz" />
        </div>
        <div class="project-item">
          <div class="project-title">Brush Wire</div>
          <div class="project-description">
            A cool blog made for artist to share their knoledge. Made with React.
          </div>
          <a class="project-link"><span style="--content: 'Link to Code'">Link to Code</span></a>
          <ImportantButton text="Link to Code" href="https://github.com/DanielRasho/BrushWire" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ImportantButton from '../components/ImportantButton/ImportantButton.vue'
</script>
<style>
#projects-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--dark-green);
  display: flex;
  position: relative;
}

#projects-section .line-container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  z-index: 100;
}

#projects-section svg {
  display: inline-block;
  height: 70%;
  z-index: 100;
  transform: translateX(16%);
}

#projects-section .project-images,
#projects-section .project-info {
  position: relative;
  z-index: 1000;
  width: 50%;
}

#projects-section .project-images {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#projects-section .project-images .pc-frame {
  width: 75%;
  object-fit: contain;
  z-index: 1000;
}

#projects-section .pc-display {
  top: 20%;
  width: 48%;
  height: 33%;

  z-index: 100;
  overflow: hidden;
  position: absolute;
}

@media only screen and (max-width: 1550px) {
  #projects-section .pc-display {
    top: 25%;
    height: 28%;
  }
}
@media only screen and (max-width: 1310px) {
  #projects-section .pc-display {
    top: 30%;
    height: 25%;
  }
}
@media only screen and (max-width: 1040px) {
  #projects-section {
    display: block;
  }
  #projects-section svg {
    display: none;
  }
  #projects-section .project-images,
  #projects-section .project-info {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }

  #projects-section .pc-display {
    top: 10%;
    width: 48%;
    height: 50%;
  }
}

#projects-section .carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  --project-index: 0;
  transform: translateX(calc(var(--project-index) * -100%));
}
.carousel-track .image-item {
  min-width: 100%;
  min-height: 100%;
}
.carousel-track .image-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
#no-signal-overlay {
  position: absolute;
}

#projects-section .project-info {
  padding-top: 5rem;
  overflow: hidden;
}

#projects-section .project-info .track {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

  --project-index: 0;
  transform: translateX(calc(var(--project-index) * -100%));
}

#projects-section .project-item {
  min-width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
}

#projects-section .project-info * {
  color: var(--white);
}

#projects-section .project-title {
  font-size: 4rem;
  font-family: 'Avigea';
}

#projects-section .project-description {
  font-size: 1.4rem;
  margin-top: 2rem;
}

#knowledge-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--white);
}
</style>
