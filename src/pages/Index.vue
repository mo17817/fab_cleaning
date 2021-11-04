<template>
<div>
  <navbar></navbar>
  <q-page class="bg-secondary-5">
    <!-- <q-img
        id="banner"      
        src="~assets/cleaning2.jpeg"
      >

    </q-img> -->
  
  

  <div class="q-pa-md row">

    <div class="col">
      <div class="col" id="banner-text-container">
        <h2 class="text-h3 text-weight-light text-center text-black">FAB cleaning</h2>
      </div>

      <div class="col" id="banner-subtext-container">
        <h3 class="text-h2 text-center text-black">Like a breath-mint for the whip</h3>
          <carousel></carousel>
      <h1 class = "text-h2 text-center text-black"> Check out more of our services and plans below </h1>
        
    </div>

    </div>
  </div>
  </q-page>
</div>
</template>



<script>
import { ref } from 'vue'
// import Infocard from 'src/components/Infocard.vue'
import Carousel from 'src/components/Carousel.vue'

export default {
  components: { Carousel},
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
  height: 60%;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: -1;
}

.q-page{
  z-index: -1;
}
.my-card{
  width: 100%;
  max-width: 400px;
  height: 800px;
}
.index_infocard{
  width: 30%;
  padding: 25%;
  margin: 25%;
}
</style>
