<template>
<q-carousel id ="carousel"
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="600px"
      dark
    >
      <q-carousel-slide :name="1" fit="contain" img-src="~assets/tinting.jpg"  />
      <q-carousel-slide :name="2" img-src="~assets/rari.jpg" />
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

