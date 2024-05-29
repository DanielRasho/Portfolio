import './assets/styles/03-main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// ANIMATION LIBRARY
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { TextPlugin } from 'gsap/TextPlugin'
// SMOOTH SCROLL
import Lenis from 'lenis'

// GSAP INITIALIZATION
gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin)

// SMOOTH SCROLL INITIALIZATION
const lenis = new Lenis()
//lenis.on('scroll', (e) => {
//  console.log(e)
//})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// APP CREATION
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
