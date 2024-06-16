<template>
  <section id="home-hero" @click="executeAnimationCycle">
    <HomeContainer class="home__container--base" theme="LIGHT" :img-path="coverHuman" />
    <!-- 
      THIS ARE THE LAYERS FOR THE HOLE TRANSITION EFFECT 
      THERE ARE ALWAYS 2 OF THEM. BEING THE TOP ONE THE ONE WITH CLIPPING.
       ┌──────┐
       └──────┘ <- TOP
       ┌──────┐
       └──────┘ <- BOTTOM
       WHEN THE TRANSITION HAPPEN THE BOTTOM LAYER DISAPPEARS FROM 
       THE DOM, AND A NEW LAYER IS POSITIONED OVER THE TOP LAYER.
    -->
    <HomeContainer
      id="home__container-A"
      :theme="containerAModel.theme"
      :img-path="containerAModel.imgPath"
      class="home__container--absolute"
    />
    <HomeContainer
      id="home__container-B"
      :theme="containerBModel.theme"
      :img-path="containerBModel.imgPath"
      class="home__container--absolute"
    />
  </section>
</template>

<script setup>
import HomeContainer from '@/components/HomeContainer/HomeContainer.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { coolDownFn } from '@/utils/CoolDown'
import { getCursorRelativeCoordinates } from '@/utils/CursorCoordinates'
import gsap from 'gsap'

const SHOW_CLIP_ANIMATION_DURATION = 0.8
const SHOW_HOLE_AGAIN_TIME = 0.5
const COOLDOWN_MOVE_ANIMATION_TIME = 0.1
const COOLDOWN_ANIMATION_TIME = SHOW_CLIP_ANIMATION_DURATION + 0.5
const TOP_Z_INDEX = '20'
const BOTTOM_Z_INDEX = '10'

// CONTAINER IMAGES
import coverHuman from '@/assets/images/coverHuman.webp'
import coverRobot from '@/assets/images/coverRobot.webp'

// CONTAINER VALUES
const homeContainers = [
  {
    imgPath: coverHuman,
    theme: 'LIGHT'
  },
  {
    imgPath: coverRobot,
    theme: 'DARK'
  },
  {
    imgPath: 'https://s1.zerochan.net/Shenhe.600.4133369.jpg',
    theme: 'LIGHT'
  },
  {
    imgPath:
      'https://slm-assets.secondlife.com/assets/26869682/view_large/me%20la%20pelan.jpg?1594932106',
    theme: 'DARK'
  }
]

// ============================
//    CONTAINER STATE
// ============================

// DOM CONTAINERS REFERENCES
const parentContainerDOM = ref(null)
const containerADOM = ref(null)
const containerBDOM = ref(null)

// VIRTUAL CONTAINERS, contain info
// of the current state of each container
const containerAModel = ref({
  contentIndex: 0,
  class: '.home__container-A',
  imgPath: homeContainers[0].imgPath,
  theme: homeContainers[0].theme
})

const containerBModel = ref({
  contentIndex: 1,
  class: '.home__container-B',
  imgPath: homeContainers[1].imgPath,
  theme: homeContainers[1].theme
})

onMounted(() => {
  let parentContainer = document.getElementById('home-hero')
  let containerA = document.getElementById('home__container-A')
  let containerB = document.getElementById('home__container-B')

  parentContainerDOM.value = parentContainer
  containerADOM.value = containerA
  containerBDOM.value = containerB

  parentContainer.topContainer = containerB
  parentContainer.addEventListener('mousemove', moveClipAnimation)
})

// ====================================
//    MANAGER VIRTUAL CONTAINERS STATE
// ====================================

function setContainerStyle({
  containerDOM = undefined,
  zIndex = undefined,
  transition = undefined,
  clipPath = undefined,
  visibility = undefined
} = {}) {
  if (!containerDOM) return
  if (zIndex) containerDOM.style.zIndex = zIndex
  if (visibility) containerDOM.style.visibility = visibility
  if (transition) containerDOM.style.transition = transition
  if (clipPath) {
    containerDOM.style.clipPath = clipPath
    containerDOM.style.webkitClipPath = clipPath
  }
}

function toogleHeight() {
  if (containerADOM.value.style.zIndex === TOP_Z_INDEX) {
    containerADOM.value.style.zIndex = BOTTOM_Z_INDEX
    containerBDOM.value.style.zIndex = TOP_Z_INDEX
    setNextContainerContent(containerBModel)
  } else {
    containerADOM.value.style.zIndex = TOP_Z_INDEX
    containerBDOM.value.style.zIndex = BOTTOM_Z_INDEX
    setNextContainerContent(containerAModel)
  }
}

function setNextContainerContent(containerModel) {
  let newIndex = (containerModel.value.contentIndex + 2) % homeContainers.length
  console.log(homeContainers[newIndex])
  containerModel.value.contentIndex = newIndex
  ;({ imgPath: containerModel.value.imgPath, theme: containerModel.value.theme } =
    homeContainers[newIndex])
}

function getContainerPosition() {
  if (containerADOM.value.style.zIndex === TOP_Z_INDEX)
    return {
      topContainer: containerAModel.value,
      topContainerDOM: containerADOM.value,
      bottomContainer: containerBModel.value,
      bottomContainerDOM: containerBDOM.value
    }
  else
    return {
      topContainer: containerBModel.value,
      topContainerDOM: containerBDOM.value,
      bottomContainer: containerAModel.value,
      bottomContainerDOM: containerADOM.value
    }
}

// ============================
//    ANIMATION
// ============================

const executeAnimationCycle = coolDownFn((event) => {
  let { relativeTop, relativeLeft } = getCursorRelativeCoordinates(event, parentContainerDOM.value)

  const { topContainerDOM, bottomContainerDOM } = getContainerPosition()

  // Remove move eventlistener
  parentContainerDOM.value.removeEventListener('mousemove', moveClipAnimation)
  parentContainerDOM.value.topContainer = topContainerDOM

  // THIS SHOULD BE ON A TIMELINE

  let tl = gsap.timeline({ paused: true })

  // Animate
  tl.add(() => {
    console.log('CREATE CLIP')
    setContainerStyle({
      containerDOM: topContainerDOM,
      transition: `${SHOW_CLIP_ANIMATION_DURATION}s`,
      clipPath: `circle(160% at ${relativeTop}px ${relativeLeft}px)`
    })
  }, 0)

  // -- 0.8s latter
  tl.add(() => {
    console.log('HIDE LAST BOTTOM CONTAINER')
    setContainerStyle({
      containerDOM: bottomContainerDOM,
      transition: '0s',
      visibility: 'hidden',
      clipPath: 'circle( 0 at 50% 50% )'
    })
    toogleHeight()
  }, `+=${SHOW_CLIP_ANIMATION_DURATION}`)

  // -- 0.1 s latter
  tl.add(() => {
    console.log('MADE NEW TOP CONTAINER ON TOP')
    setContainerStyle({
      containerDOM: bottomContainerDOM,
      transition: `${SHOW_HOLE_AGAIN_TIME}s`,
      visibility: 'visible',
      clipPath: `circle( 10% at 50% 50% )`
    })
  }, `+=${0.1}`)

  // -- 0.5 s latter
  tl.add(() => {
    console.log('ADD AGAIN THE EVENT LISTENER')
    parentContainerDOM.value.topContainer = bottomContainerDOM
    parentContainerDOM.value.addEventListener('mousemove', moveClipAnimation)
  }, `+=${SHOW_HOLE_AGAIN_TIME}`)

  // -- CLEAN TIMELINE AT THE END
  tl.call(() => {
    tl.kill
  })

  tl.play()
}, SHOW_CLIP_ANIMATION_DURATION + SHOW_HOLE_AGAIN_TIME)

const moveClipAnimation = coolDownFn((event) => {
  let { relativeLeft, relativeTop } = getCursorRelativeCoordinates(event, parentContainerDOM.value)

  let clipStyle = `circle(10% at ${relativeLeft}px ${relativeTop}px)`

  setContainerStyle({
    containerDOM: parentContainerDOM.value.topContainer,
    transition: '0.3s',
    clipPath: clipStyle
  })
}, COOLDOWN_MOVE_ANIMATION_TIME)
</script>

<style scoped>
#home-hero {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.home__container--base::after {
  content: '';
  background-color: var(--white);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.home__container--absolute {
  position: absolute;
  top: 0;
}

#home__container-A {
  z-index: 10;
  clip-path: circle(160% at 0 0);
}

#home__container-B {
  z-index: 20;
  clip-path: circle(10% at 50% 50%);
}

@media only screen and (max-width: 1020px) {
  #home-hero {
    height: fit-content;
  }
}
</style>
