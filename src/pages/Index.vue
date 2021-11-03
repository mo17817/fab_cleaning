<template>
  <navbar></navbar>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/FABlogo.png"
      style="width: 200px; height: 200px"
    >
  </q-page>
  <!-- <div class="q-pa-md">

      <div class="fit">
        <q-img
          src="~src/assets/cleaning1.jpeg"
          fit="cover"
        >

        </q-img>
            <div class="q-pa-md">
              <q-carousel
                animated
                v-model="slide"
                arrows
                navigation
                infinite
                class="rounded-borders"
              >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
              </q-carousel>
            </div>
    </div> -->
</template>



<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>
