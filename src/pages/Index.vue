<template>
<div>
  <navbar></navbar>
  <q-page>
    <q-img
        id="banner"      
        src="~assets/cleaning1.jpeg"
      >

    </q-img>
  
  

  <div class="q-pa-md row">

    <div class="col">
      <q-card class="my-card text-white">
        <q-img src="~assets/felix_headshot.jpeg"
        >
          <div class="absolute-bottom text-h6">
            Felix Gorman
          </div>
        </q-img>

        <q-card-section class="text-white">
          My name is Felix Gorman. I was born and raised in Portland, Maine. I am the founder of FAB cleaning. Detailing cars has always been a passion. Now I want to pass the savings on to youuuuu
        </q-card-section>
      </q-card>
    </div>
  </div>
  </q-page>
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
</script>

<style lang="scss" scoped>
.q-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
}
.my-card{
  width: 100%;
  max-width: 400px;
  height: 800px;
}
</style>
