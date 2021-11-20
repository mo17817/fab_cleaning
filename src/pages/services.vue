<template>
  <!-- <q-page> -->
    <!--parallax needs to have a scroll parent element in it-->
    <q-page>
      <div class="q-pa-md q-gutter-md">
        <q-page-scroller>
        <div class="row justify-between">
          <q-page-scroller>
          <q-parallax
           src="https://cdn.quasar.dev/img/parallax2.jpg"
          
           >
            <h1 class="text-white">Basic</h1>
          </q-parallax>
        </div>
      </q-page-scroller>
      </div>
  </q-page>
  <!-- </q-page> -->
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { Parallax } from "components/Parallax.vue";
export default defineComponent({
  setup() {},
  components: {
    // Parallax,
  },
});
</script>
