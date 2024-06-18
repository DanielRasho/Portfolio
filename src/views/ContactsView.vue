<template>
  <section id="contacts-section">
    <div class="contacts-section__tv">
      <img src="@/assets/images/tv.webp" alt="" />
    </div>
    <footer class="contacts-section__footer">
      <div class="contacts-section__wrapper">
        <div class="contacts-section__category">
          <div><span>PRINCIPAL</span></div>
          <div class="category-links">
            <ContactLink
              text="Linkedln"
              href="https://www.linkedin.com/in/daniel-alfredo-rayo-rold%C3%A1n-38727a303/"
              icon-id="fa-solid fa-paperclip"
            />
            <ContactLink
              text="Mail"
              href="mailto: drayoroldan@gmail.com"
              icon-id="fa-solid fa-paperclip"
            />
            <ContactLink
              text="Github"
              href="https://github.com/DanielRasho"
              icon-id="fa-solid fa-paperclip"
            />
          </div>
        </div>
        <div class="contacts-section__category">
          <div><span>OTHERS</span></div>
          <div class="category-links">
            <ContactLink
              text="DEV Blogs"
              href="https://dev.to/danielrasho"
              icon-id="fa-solid fa-paperclip"
            />
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup>
import ContactLink from '@/components/ContactLink.vue'
</script>
<style scoped>
#contacts-section {
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

.contacts-section__tv {
  height: 75%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: end;
}

.contacts-section__footer {
  height: 25%;
  background-color: var(--dark-green);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacts-section__footer span {
  color: var(--white);
  font-family: 'IBM Plex Mono';
}

.contacts-section__wrapper {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
}

.contacts-section__category {
  display: flex;
}

.contacts-section__category > div {
  width: 20ch;
}
.contacts-section__category .category-links {
  display: flex;
  flex-direction: column;
}
</style>
