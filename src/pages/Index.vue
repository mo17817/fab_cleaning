<template>
<head>
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Raleway">
</head>
<div>
  <navbar></navbar>
  <q-page class="bg-black">
    <!-- <q-img
        id="banner"      
        src="~assets/cleaning2.jpeg"
      >

    </q-img> -->
  
  <div class="col">
    <div class="col">
      <div id="carousel-container">
          <carousel></carousel>
      </div>
    </div>
  </div>



  <div class="q-pa-md row absolute-center" id="text-container">


    <div class="col">
      <div class="col" id="banner-text-container">
        <h2 class="text-h3 text-weight-light text-center text-white">FAB cleaning</h2>
      </div>

      <div class="col" id="banner-subtext-container">
        <h3 class="text-h2 text-center text-weight-light text-white">Like a breath-mint for the whip</h3>
        <h1 class = "text-h2 text-center text-white"> Come see what we can do for you! </h1>
      
      </div>
    </div>
  </div>

  <div class="col" id="card-container">
    <q-card dark class="bg-grey my-card text-black text-weight-light" id ="qcard">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <q-btn to = "../src/pages/Aboutme" label = "AboutMe" />
      </q-card-section>
    </q-card>
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

#carousel-container{
  padding: 0;
  margin: 0;

}

#text-container{
  top: 30vh;
  display: flex;
  flex-direction: column;
  // align-self: center;
  margin-bottom: 10%;
  font-family: Raleway, serif;
  text-shadow: 4px 4px 4px #aaa;
}

#card-container{
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  
}
#qcard{
  font-family: Raleway, serif;
  text-shadow: 4px 4px 4px #aaa;
}
</style>
