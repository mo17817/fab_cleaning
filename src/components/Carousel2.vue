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
      height="500px"
      dark
      arows
    >
      <q-carousel-slide :name="1" img-src="~assets/felix_baby.jpg"/>
      <q-carousel-slide :name="2" img-src="~assets/felix_headshot.jpeg" />
      <q-carousel-slide :name="3" img-src="https://c.pxhere.com/photos/34/c8/car_mercedes_slk_auto_transport_design_transportation_luxury-1382710.jpg!d"  />
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
        margin-right: 0;
    }

</style>