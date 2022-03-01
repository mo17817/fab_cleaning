<template>
<q-carousel id ="carousel"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="400px"
      dark
      arows
    >
      <q-carousel-slide :name="1" fit="contain" img-src="~assets/bmw.jpg"  />
      <q-carousel-slide :name="2" img-src="~assets/after5.jpeg" />
      <q-carousel-slide :name="3" img-src="~assets/after1.jpeg" />
      <q-carousel-slide :name="4" img-src="~assets/cleaning4.jpeg" />
    </q-carousel>
  </template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
<style>
#carousel{
  object-fit: contain;
}

</style>

