<template>
  <div class="project-item">
    <div class="project-item__title">{{ title }}</div>
    <div class="project-item__description">
      {{ description }}
    </div>
    <ImportantButton text="Link to Code" :href="link" />
  </div>
</template>

<script setup>
import ImportantButton from '@/components/ImportantButton.vue'

const props = defineProps({
  title: { type: String },
  description: { type: String },
  link: { type: String }
})
</script>

<style scoped>
.project-item {
  min-width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
}

.project-item * {
  color: var(--white);
}

.project-item__title {
  font-size: 4rem;
  font-family: 'Avigea';
}

.project-item__description {
  font-size: 1.4rem;
  margin-top: 2rem;
}

@media only screen and (max-width: 1040px) {
  .project-item__title {
    font-size: 3rem;
  }
  .project-item__description {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
}
</style>
