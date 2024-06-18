<template>
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
      <img src="../assets/images/cat.webp" alt="A grumpy cat" />
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  let emptyPath = document.getElementById('empty-path')
  let emptyPathLength = () => emptyPath.getTotalLength()
  emptyPath.style.strokeDasharray = emptyPathLength() + ' ' + emptyPathLength()
  emptyPath.style.strokeDashoffset = emptyPathLength()

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
})
</script>
<style scoped>
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
  transform: translateX(2%);
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

@media only screen and (max-width: 850px) {
  .cat {
    display: none;
  }
}
</style>
