<template>
<<<<<<< HEAD
  <navbar></navbar>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/FABlogo.png"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
// import navbar from '../components/navbar.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { }

})
=======

      <div class="q-pa-md">
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
    </div>
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
>>>>>>> 34be5ea58b8aa1f9b8ee88561e6f81579da33ff0
</script>
