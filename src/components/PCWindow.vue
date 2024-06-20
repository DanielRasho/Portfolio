<template>
  <div class="window-container" ref="windowContainer">
    <div class="top-bar">
      <i class="fa-solid fa-window-minimize"></i>
      <i class="fa-regular fa-window-maximize"></i>
      <i class="fa-solid fa-xmark window-icon" @click="handleClose"></i>
    </div>
    <div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <div v-for="(image, index) in images" :key="index" class="img-container">
        <img :src="image.url" alt="" />
        <span>{{ image.name }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, defineEmits } from 'vue'

const emit = defineEmits(['closeWindow'])

const handleClose = () => {
  emit('closeWindow')
}

const windowContainer = ref(null)

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'title'
  },
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  open: {
    type: Boolean,
    required: true,
    default: false
  }
})

function maximizeWindow() {
  console.log('maximize')
  const windowElement = windowContainer.value
  windowElement.style.animation = 'openAnimation 0.5s forwards'
  windowElement.classList.add('window-container--open')
}

function minimizeWindow() {
  const windowElement = windowContainer.value
  windowElement.style.animation = 'closeAnimation 0.5s forwards'
  windowElement.classList.remove('window-container--open')
}

watch(props, () => {
  if (props.open == true) maximizeWindow()
  else if (props.open == false) minimizeWindow()
})
</script>

<style scoped>
.window-container {
  border: 2px solid var(--dark-green);
  background-color: var(--white);
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100px;
  height: 50px;
  opacity: 0;
  z-index: 500;
  overflow: scroll;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition:
    width 0.5s,
    height 0.5s,
    opacity 0.5s;
}
.window-container--open {
  width: 80%;
  height: 70%;
  opacity: 1;
}

.top-bar {
  height: 2rem;
  border-bottom: 2px solid var(--dark-green);
  display: flex;
  justify-content: end;
  align-items: center;
}
.top-bar i {
  display: inline-block;
  padding: 0.5rem 2ch;
}
.top-bar .window-icon:hover {
  cursor: pointer;
}
.top-bar .window-icon:hover {
  background-color: var(--dark-green);
  color: var(--white);
}
.title {
  font-family: 'Avigea';
  font-size: 2.5rem;
  margin-left: 1ch;
}
.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.img-container {
  width: 100%;
  height: 8.8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.img-container span {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-family: 'IBM Plex Mono';
}

@keyframes openAnimation {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  100% {
    width: 80%;
    height: 70%;
    opacity: 1;
  }
}

@keyframes closeAnimation {
  0% {
    width: 80%;
    height: 70%;
    opacity: 1;
  }
  100% {
    width: 0;
    height: 0;
    opacity: 0;
  }
}
</style>
