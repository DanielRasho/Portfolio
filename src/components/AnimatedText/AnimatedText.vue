<template>
  <div :style="styles" class="slide-text-container">
    <span class="slide-text" :id="id">{{ text }}</span>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import SplitType from 'split-type'
import { gsap } from 'gsap/gsap-core'

const displayText = ref([])

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
    default: 'Some text'
  },
  splitText: {
    type: String,
    required: true,
    default: 'WORD' // WORD, LETTERS, LINES, ALL
  },
  animationDirection: {
    type: String,
    required: true,
    default: 'UP' // UP, DOWN, LEFT, RIGHT'
  },
  duration: {
    type: Number,
    required: true,
    default: 1
  },
  stagger: {
    type: Number,
    required: true,
    default: 0.2
  }
})

onMounted(() => {
  let textElements = new SplitType(`#${props.id}`)
  if (props.splitText === 'WORD') {
    displayText.value = textElements.words
    console.log(textElements.words)
  } else if (props.splitText === 'LETTERS') {
    displayText.value = textElements.chars
  } else if (props.splitText === 'LINES') {
    displayText.value = textElements.lines
  } else if (props.splitText === 'ALL') {
    return
  }

  gsap.from(displayText.value, {
    yPercent: 100,
    duration: props.duration,
    stagger: { amount: props.stagger },
    ease: 'ease'
  })
})
</script>

<style scoped>
.slide-text {
  font-kerning: none;
}
.slide-text-container {
  overflow: hidden;
}
</style>
