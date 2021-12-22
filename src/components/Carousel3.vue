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
      <q-carousel-slide :name="1" rounded>
        <q-card class="my-card bg-grey-10 text-primary" id="first-card-parent">
          <q-separator color="primary" />
            <q-card-actions vertical align="center">
              <q-avatar rounded>
                <q-img src = "~assets/5-star.png"/>
              </q-avatar>
              <h3 id="first-card">"We had a great experience at Fab Cleaning 5 stars!"</h3>
              <h4 id="first-review-signature"
                class="q-mt-sm"
              >-Austin Hallett from Portland, ME</h4>
            
                <q-btn class="bg-grey-8" align="center">
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                </q-btn>
              <h4 id="first-card-comment"> Let us know what you think!</h4>
            </q-card-actions>
          <q-separator color="primary" />
        </q-card>
      </q-carousel-slide>
      <!--  -->
      <q-carousel-slide :name="2">
        <q-card class="my-card bg-grey-10 text-primary">
          <q-separator color="primary" />
            <q-card-actions vertical align="center">
              <q-avatar rounded>
                <q-img src = "~assets/5-star.png"/>
              </q-avatar>
              <h3>"We had a great experience at Fab Cleaning 5 stars!"</h3>
            
                <q-btn class="bg-grey-8" align="center">
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                    <q-icon name = "star_rate" color = "secondary"/>
                </q-btn>
              <h4> Let us know what you think!</h4>
            </q-card-actions>
          <q-separator color="primary" />
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </template>
<script lang='text/javascript'>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
}
</script>
<style lang="css">


@media screen and (max-width: 400px) {
  #first-card{
    font-size: large;
  }
  #first-card-comment{
    font-size: small;
  }
  #first-review-signature{
    font-size: small;
  }
  
}
@media screen {
  
}
</style>