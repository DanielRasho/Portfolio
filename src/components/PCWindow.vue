<template>
  <div class="window-container">
    <div class="top-bar">
      <i class="fa-solid fa-window-minimize" data-clickable="true"></i>
      <i class="fa-regular fa-window-maximize" data-clickable="true" @click="handleMaximize"></i>
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <div v-for="(image, index) in images" :key="index" class="img-container">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import Draggable from 'gsap/Draggable'

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
  container: {
    type: String,
    required: true
  }
})

const handleMaximize = () => {
  console.log('hello')
}

onMounted(() => {
  Draggable.create('.window-container', {
    bounds: props.container,
    allowContextMenu: true,
    dragClickables: false
  })
})
</script>

<style scoped>
.window-container {
  width: 50ch;
  border: 2px solid var(--dark-green);
  background-color: var(--white);
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
  cursor: pointer;
}
.top-bar i:hover {
  background-color: var(--dark-green);
  color: var(--white);
}
.title {
  font-family: 'Avigea';
  font-size: 2.5rem;
}
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
.img-container {
  width: 100%;
  height: 5rem;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
