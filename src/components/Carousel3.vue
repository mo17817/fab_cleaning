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
      dark
      class = "bg-black"
    >
      <q-carousel-slide :name="object.name" rounded v-for="object in carouselSlides" :key="object">
        <q-card class="my-card bg-grey-10 text-primary" id="card-parent">
          <q-separator color="primary" />
            <q-card-actions vertical align="center">
              <q-avatar rounded>
                <q-img src = "~assets/5-star.png"/>
              </q-avatar>
              <h3 id="card">{{object.review}}</h3>
              <h4 id="review-signature"
                class="q-mt-sm"
              >{{object.signature}}</h4>

                <q-btn class="bg-grey-8" align="center">
                    <q-icon name = "star_rate" color = "primary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                </q-btn>
              <h4 id="card-comment"> Let us know what you think!</h4>
            </q-card-actions>
          <q-separator color="primary" />
        </q-card>
      </q-carousel-slide>
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
  },
  data(){
    return{
        carouselSlides: [{
        id: "first-slide",
        name: 1,
        review: "We had a great experience at Fab Cleaning 5 stars!",
        signature: "Austin Hallett from Portland, ME",
      },
      {
        id: "second-slide",
        name: 2,
        review: "I had a great experience, friendly staff. Would definitely come again!",
        signature: "Mo from Portland, ME",

      }]
    }
  },
}
</script>

<style lang="css">

#card{
  font-size: xx-large;
}
#card-comment{
  font-size: medium;
}
#review-signature{
  font-size: medium;
}
@media screen and (max-width: 400px) {
  #card{
    font-size: large;
  }
  #card-comment{
    font-size: small;
  }
  #review-signature{
    font-size: small;
  }

}
@media screen {

}
</style>
