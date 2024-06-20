<template>
  <div class="pc-icon">
    <div class="icon-container">
      <img class="icon" :src="icon" alt="" />
    </div>
    <span class="text">{{ text }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  icon: String,
  text: String
})
</script>
<style scoped>
.pc-icon {
  width: 15ch;
  aspect-ratio: 1 / 1.4;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-left: 3rem;
}
.pc-icon :hover {
  cursor: pointer;
  opacity: 0.9;
}
.icon-container {
  width: 90%;
}
.icon-container img {
  width: 100%;
  object-fit: contain;
}
.pc-icon span {
  display: block;
  line-break: anywhere;
  font-family: 'IBM Plex Mono';
  text-align: center;
}
@media only screen and (max-width: 900px) {
  .pc-icon {
    margin-left: 0;
  }
}
</style>
