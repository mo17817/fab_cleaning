<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
  </head>
   <div class="q-pa-sm bg-black">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 90vh"
      class="shadow-2 rounded-borders bg-black"
    >
    <q-header  class="bg-transparent text-white">
      <q-toolbar>
        <div class="col q-pa-xs">
          <q-toolbar-title class="text-center" id="title">
           Fab Cleaning
          </q-toolbar-title>
          <div class = "col bg-transparent text-white" align = "center" id = "breath-mint">
            <h2> Like a breath mint for the whip </h2>
            </div>
        </div>
      </q-toolbar>
    </q-header>
    <div id="carousel-container">
      <div class="col" id="text-container"></div>
      <carousel></carousel>
    </div>
    <div class = "row q-ma-sm">
    <q-card class="my-card bg-black" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          <!-- <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        /> -->
        <div class = "col-6">
          <q-toolbar-title elevated class = "q-pt-md bg-black text-primary">
            <h3> What we offer</h3>
            <!-- <q-separator horizontal color = "bg-primary"/> -->
          </q-toolbar-title>
           <h6 class = "text-primary"> sjsjahf ghjds fjkdk dhsjhfjs ahahhdh ahshaha s ss as d f sjffjsda fhjdrhgsf ahsjhjf sjhshjf ajdfjd sjskkhf hahdhjf dfhfhjdskfn dhsjshsd  fhsh fdhs shjvc shdj </h6>
          </div>
        </q-card-section>
        <q-img
          class="col-5"
          src="~assets/cleaning1.jpeg"
          height = "600px"
        />
      </q-card-section>
    </q-card> 
     </div>
    </q-layout>
   </div>
</template>



<script>
import { ref } from "vue";
import Carousel from "src/components/Carousel.vue";

export default {
  components: { Carousel },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style>
#title {
  font-family: "Lobster";
  font-size: 35px;
  /* position: relative; */
  font-weight: bold;
}
#breath-mint{
  font-family: "Lobster";
  font-size: 35px;
  /* position: relative; */
  font-weight: initial;
}
</style>
