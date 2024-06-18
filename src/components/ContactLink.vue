<template>
  <a class="contact-link" :href="href" target="_blank">
    <span>{{ text }} <i :class="iconId"></i> </span>
    <span>{{ text }} <i :class="iconId"></i> </span>
  </a>
</template>
<script setup>
const props = defineProps({
  text: String,
  href: String,
  iconId: String
})
</script>
<style scoped>
.contact-link {
  color: var(--white);
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0 0.2rem 0;
  width: fit-content;
}
.contact-link span {
  font-family: 'IBM Plex Mono';
  color: var(--white);
  width: 100%;
  display: inline-block;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
}
.contact-link i {
  font-family: 'Font Awesome 6 Free';
  color: var(--white);
  margin-right: 1ch;
}
.contact-link span:nth-child(2) {
  position: absolute;
  left: 100%;
}
.contact-link:hover span {
  transform: translateX(-100%);
}
</style>
