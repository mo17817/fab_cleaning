<template>
  <!-- <q-page> -->
  <!--parallax needs to have a scroll parent element in it-->
  <q-page>
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div>
      <q-card class="my-card" flat bordered>
        <q-card-section>

            <q-img
              class="col-5"
              src="~assets/goldtier.jpg"
            />
            <q-img
              class="col-5"
              src="~assets/silvertier.png"
            />


          <q-card-section>
            testing the horizontal card section. Here we can see the text will
            wrap in a strange manor
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
  <!-- </q-page> -->
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { Parallax } from "components/Parallax.vue";
// import { Horizontalcard } from "components/Horizontalcard.vue"
export default defineComponent({
  setup() {},
  components: {
    // Parallax,
    // Horizontalcard,
  },
});
</script>
