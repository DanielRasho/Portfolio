<template>
  <section id="knowledge-section">
    <div class="files-container">
      <PCIcon
        v-for="(item, index) in icons"
        :key="index"
        :text="item.text"
        :icon="item.icon"
        @click="handleOpenWindow(event, index)"
      />
    </div>
    <PCWindow
      :title="currentWindowContent.title"
      :images="currentWindowContent.images"
      :open="isWindowOpen"
      @close-window="handleCloseWindow"
    />
  </section>
</template>
<script setup>
import PCWindow from '@/components/PCWindow.vue'
import PCIcon from '@/components/PCIcon.vue'
import { icons, windows } from '@/assets/json/KnowledgeInfo'
import { computed, ref } from 'vue'

const isWindowOpen = ref(false)

const currentWindowIndex = ref(0)

const currentWindowContent = computed(() => {
  let newIndex = currentWindowIndex.value
  return { ...windows[newIndex] }
})

function handleOpenWindow(event, index) {
  currentWindowIndex.value = index
  isWindowOpen.value = true
}

function handleCloseWindow() {
  isWindowOpen.value = false
}
</script>
<style scoped>
#knowledge-section {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--white);
  border-bottom: 1px solid var(--dark-green);
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 8rem;
}
.files-container {
  width: fit-content;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

@media only screen and (max-width: 900px) {
  #knowledge-section {
    padding: 5;
  }
  .files-container {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 450px) {
  #knowledge-section {
    padding: 3rem;
  }
}
</style>
