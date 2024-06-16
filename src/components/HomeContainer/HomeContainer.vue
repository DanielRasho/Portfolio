<template>
  <div
    class="home__container"
    :class="{ 'home__container--light': isThemeLight, 'home__container--dark': !isThemeLight }"
  >
    <div class="home__name">
      <span
        class="home__big-letter"
        :class="{
          'home__big-letter--dark': isThemeLight,
          'home__big-letter--light': !isThemeLight
        }"
        >D</span
      >
      <span
        class="home__small-letter"
        :class="{
          'home__small-letter--dark': isThemeLight,
          'home__small-letter--light': !isThemeLight
        }"
        >aniel</span
      >
    </div>
    <div class="home__img">
      <img :src="imgPath" alt="" />
    </div>
    <div class="home__last-name">
      <span
        class="home__big-letter"
        :class="{
          'home__big-letter--dark': isThemeLight,
          'home__big-letter--light': !isThemeLight
        }"
        >R</span
      >
      <span
        class="home__small-letter"
        :class="{
          'home__small-letter--dark': isThemeLight,
          'home__small-letter--light': !isThemeLight
        }"
        >ayo</span
      >
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  imgPath: {
    type: String,
    required: true
  },
  theme: {
    type: String, // LIGHT or DARK
    required: false,
    default: 'LIGHT'
  }
})

const isThemeLight = computed(() => {
  return props.theme === 'LIGHT' ? true : false
})
</script>
<style>
.home__container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home__container--dark {
  background-color: var(--dark-green);
}

.home__container--light {
  background-color: var(--white);
}

.home__name,
.home__last-name,
.home__img {
  position: absolute;
}

.home__name {
  top: 20%;
  left: 15%;
}

.home__last-name {
  bottom: 10%;
  right: 10%;
}

.home__big-letter {
  font-size: 25rem;
  font-family: 'Keystone';
  display: block;
  line-height: 10rem;
}
.home__small-letter {
  font-size: 10rem;
  font-family: 'Keystone';
  display: block;
}

.home__small-letter--dark {
  color: var(--white);
  text-stroke: 3px var(--dark-green);
  -webkit-text-stroke: 3px var(--dark-green);
}

.home__small-letter--light {
  color: var(--dark-green);
  text-stroke: 3px var(--white);
  -webkit-text-stroke: 3px var(--white);
}

.home__big-letter--dark {
  color: var(--dark-green);
}

.home__big-letter--light {
  color: var(--white);
}
.home__img {
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.home__img img {
  width: 100%;
}

@media only screen and (max-width: 1400px) {
  .home__big-letter {
    font-size: 20rem;
  }
  .home__small-letter {
    font-size: 8rem;
  }
}
@media only screen and (max-width: 1020px) {
  #home-hero {
    height: fit-content;
  }

  .home__name,
  .home__last-name,
  .home__img {
    position: static;
  }
  .home__name,
  .home__last-name {
    display: flex;
    align-items: end;
    width: fit-content;
    margin: 8ch auto;
  }

  .home__big-letter {
    font-size: 10rem;
  }
  .home__small-letter {
    font-size: 5rem;
  }

  .home__img {
    width: 60%;
    margin: 1ch auto;
    transform: none;
  }
}
</style>
