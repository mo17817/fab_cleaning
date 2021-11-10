<template>
  <head>
     <!-- <link href="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"> -->
      <!-- vuesax link^  -->
       <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    </head>
    <body>
      <!-- <div id="app">
        <vs-button>Hello World</vs-button>
      </div> -->
      <!-- vuesax ^ -->
    </body>
  <q-page class="bg-secondary">
    <div class="q-pa-md q-sm bg-secondary" id="text-container">
       <div class="row">
        <div class="col" align = "center">
          <h3 class="italics text-weight-light">About me</h3>
        </div>
        <!--
        <div class="col" align = "right">
          <Infocard3></Infocard3>
        </div> -->
      </div> 
      <q-card class="q-pa-md my-card q-ma-sm bg-primary" flat>
        <!--container for card and carousel medium padding all sides -->
        <q-card-section class="row" horizontal align="right" size="30">
          <q-card-section class="col text-black" align="left">
            <q-card-actions
              class="center"
              id="card-actions-container"
              align="center"
            >
              <q-space />
              <h3 align="left">- -</h3>
              <q-space />
              <q-avatar rounded size="85px">
                <q-img src="~assets/FABlogo.png" />
              </q-avatar>
              <q-separator class="bg-secondary" vertical />
              <h4 class="text-weight-light">
                My name is felix ....(about him)
              </h4>
            </q-card-actions>
          </q-card-section>
          <q-separator class="bg-secondary" vertical />
          <div class="col" id="pic-container">
            <Carousel2></Carousel2>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Carousel2 from "src/components/Carousel2.vue";
// import Infocard3 from "src/components/Infocard3.vue";
import Vue from 'vue'
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css'
// Vue.use(Vuesax, {
// })
export default defineComponent({
  setup() {},
  components: {
    Carousel2,
    // Infocard3,
  },
});
// new Vue({
//          el: "#app"
//         })
// src="https://unpkg.com/vue/dist/vue.js"
// src="https://unpkg.com/vuesax"
</script>
<style>
#text-container {
  top: 30vh;
  display: flex;
  flex-direction: column;
  font-family: Raleway, serif;
  /* text-shadow: 4px 4px 4px #aaa; */
  bottom: 30vh;
}

#pic-container {
  padding-left: 2vh;
  size: 100vh;
  flex-direction: column;
}
#card-actions-container {
  /* padding-left: 20%; */
  margin-left: 0%;
}
</style>
