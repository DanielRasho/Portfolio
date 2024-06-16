<template>
  <a class="important-btn" :href="href" target="_blank">
    <span :style="`--content: \'${text}\';`">{{ text }}</span>
  </a>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Some Text'
  },
  href: {
    type: String,
    required: false
  }
})
</script>
<style scoped>
.important-btn {
  align-self: end;

  display: inline-block;
  overflow: hidden;
  margin-top: 3rem;
  margin-right: 3ch;
  padding: 0.5rem 5ch 0.5rem 2ch;
  border: 1px solid var(--light-red);
  clip-path: polygon(
    12px 0%,
    calc(100% + 1px) 0,
    calc(100% + 1px) calc(100% + 1px),
    0 calc(100% + 1px),
    0 12px
  );
  background-color: var(--light-red);
  cursor: pointer;
}

.important-btn span {
  color: var(--darkest-green);
  display: inline-block;
  width: fit-content;
  text-align: center;
  position: relative;

  font-size: 1.2rem;
  font-weight: bolder;

  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.1s;
}

.important-btn:hover span {
  color: var(--dark-green);
  transform: translateY(200%);
}

.important-btn span::before {
  content: var(--content);
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(-200%);
}
</style>
