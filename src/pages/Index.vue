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
     <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
      href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap"
      rel="stylesheet"
    />
  </head>

  <div class="q-pa-sm bg-black">
    <div class="col q-pa-xs bg-black" align="center" id="breath-mint">
      <h2 id = "breath-mint-text" class = "text-primary">Like a breath mint for the whip</h2>
    </div>

    <div id="carousel-container">
      <div class="col" id="text-container"></div>

      <q-separator color="black" size="8px" />

      <carousel></carousel>
    </div>
    <q-separator color="black" size="8px" />
    <!-- first card -->
    <div class="row q-ma-sm bg-black text-primary">
      <div class="row q-ma-sm" id="first-card">
        <!--first q-card-->

        <q-card
          v-for="object in serviceCards.interiorDetailing"
          :key="object"
          :class="object.class"
          flat
          bordered
          id = "card"
        >
          <q-card-section horizontal>
            <q-card-section>
              <div class="col">
                <h3 class="text-black" align="center" id="first-para">
                  {{ object.header }}
                </h3>
                <div class="col q-ma-sm" align="center">
                  <q-avatar rounded size="70px">
                    <q-img align="center" src="~assets/FABlogo.png" />
                  </q-avatar>
                </div>

                <q-separator horizontal color="black" />
                <h6 class="text-black text-weight-heavy" id="first-para">
                  <h3>{{ object.title }}</h3>
                  <lb />
                  {{ object.description }}
                </h6>
                <div class="col q-my-sm">
                  <q-img class="col-3" :src="object.imgsrc1" height="600px" />
                </div>
                <div class="col q-my-sm">
                  <q-img class="col-3" :src="object.imgsrc2" height="600px" />
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!--page scroller-->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="200"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </div>

    <!-- second card -->
    <div class="row q-ma-sm bg-black text-primary">
      <div class="row q-ma-sm bg-black text-primary" id="second-card">
        <q-card
          v-for="objects in serviceCards.exteriorDetailing"
          :key="objects"
          id="Interior-Car"
          class="my-card bg-black text-primary"
          flat
        >
          <q-card-section horizontal>
            <q-card-section>
              <div class="col-6 bg-black" id = "second-para">
                <h6 class="text-primary">
                  <h3 id="Exterior-Car">{{ objects.title }}</h3>
                  <lb />
                  "Outer beauty is nothing compared to inner beauty. Therefore,
                  it comes as no surprise that interior car detailing requires
                  more effort and time than exterior detailing. A dirty interior
                  cabin not only has a bad odor, but also adds to operational
                  complications. Dirty air exhaust spreads allergens about the
                  cabin; stain and grit causes switches to fail; and hazy
                  windows can obscure the view of a driver. In that case,
                  cleaning a car’s interior is more than just washing with water
                  and soap."
                </h6>
                <div class="col q-my-sm">
                  <q-img
                    class="col-3"
                    src="~assets/before4.jpeg"
                    height="350px"
                  />
                </div>
                <div class="col q-my-sm">
                  <q-img
                    class="col-3"
                    src="~assets/after17.jpeg"
                    height="350px"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!--page scroller-->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="200"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </div>
    <div class="col" align="center" style = "font-family:'Exo 2', sans-serif">
      <h1 class="text-primary" id="review-header">
        Hear from our loyal patrons!
      </h1>
      <Carousel3> </Carousel3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Carousel from "src/components/Carousel.vue";
import Carousel3 from "components/Carousel3.vue";

export default {
  components: { Carousel, Carousel3 },
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      serviceCards: {
        interiorDetailing: [
          {
            id: "Interior-Car",
            header: "What we offer",
            title: "Interior Car Detailing",
            description:
              "interior car detailing requires more effort and time than exterior detailing. A dirty interior cabin not only has a bad odor, but also adds to operational complications.Dirty air exhaust spreads allergens about the cabin; stain and grit causes switches to fail; and hazy windows can obscure the view of a driver. In that case, cleaning a car’s interior is more than just washing with water and soap.",
            price: "350 dollars",
            class: "my-card",
            imgsrc1: [require("../assets/before1.jpeg")],
            imgsrc2: [require("../assets/after1.jpeg")],
          },
        ],
        exteriorDetailing: [
          {
            id: "Exterior-Car",
            title: "Exterior Car Detailing",
            description:
              "Exterior car detailing is not just a quick wash of the exterior components of a car. A good car detailer will make the car gleam, minimize surface scratches, and should always apply a shielding paint sealant",
            class: "my-card",
            imgsrc1: [require("../assets/before4.jpeg")],
            imgsrc2: [require("../assets/after17.jpeg")],
          },
        ],
      },
    };
  },

  methods: {
    prev() {
      this.slide.value--;
    },
  },
};
</script>

<style>
#card{
  background: #4B5320;
color: #2D3502;
background: linear-gradient(to bottom, #4B5320 0%, #3C4411 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4B5320), color-stop(100%, #3C4411));
background: -webkit-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -moz-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -o-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -ms-linear-gradient(top, #4B5320 0%, #3C4411 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
border: 1px solid #2D3502;
text-shadow: 0 1px 0 #5A622F;
-webkit-text-shadow: 0 1px 0 #5A622F;
-moz-text-shadow: 0 1px 0 #5A622F;
box-shadow: inset 0 1px 0 #5A622F;
-webkit-box-shadow: inset 0 1px 0 #5A622F;
-moz-box-shadow: inset 0 1px 0 #5A622F;
}
#Interior-Car{
  background: #4B5320;
color: #2D3502;
background: linear-gradient(to bottom, #4B5320 0%, #3C4411 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4B5320), color-stop(100%, #3C4411));
background: -webkit-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -moz-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -o-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -ms-linear-gradient(top, #4B5320 0%, #3C4411 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
border: 1px solid #2D3502;
text-shadow: 0 1px 0 #5A622F;
-webkit-text-shadow: 0 1px 0 #5A622F;
-moz-text-shadow: 0 1px 0 #5A622F;
box-shadow: inset 0 1px 0 #5A622F;
-webkit-box-shadow: inset 0 1px 0 #5A622F;
-moz-box-shadow: inset 0 1px 0 #5A622F;
font-weight: 600;
}
#title {
  font-family: "Exo 2", sans-serif;
  font-size: 50px;
  /* font-weight: bold; */
  /* position:sticky; */
}
#breath-mint {
  font-family: "Exo 2", sans-serif;
  font-size: 30px;
  background: #4B5320;
color: #2D3502;
background: linear-gradient(to bottom, #4B5320 0%, #3C4411 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4B5320), color-stop(100%, #3C4411));
background: -webkit-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -moz-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -o-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -ms-linear-gradient(top, #4B5320 0%, #3C4411 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
border: 1px solid #2D3502;
text-shadow: 0 1px 0 #5A622F;
-webkit-text-shadow: 0 1px 0 #5A622F;
-moz-text-shadow: 0 1px 0 #5A622F;
box-shadow: inset 0 1px 0 #5A622F;
-webkit-box-shadow: inset 0 1px 0 #5A622F;
-moz-box-shadow: inset 0 1px 0 #5A622F;
font-weight: bold;

  /* position: fixed; */
  /* font-weight: initial; */
}
#breath-mint-text{
  font-size: 30px;
  font-style: italic;
  font-weight: 500;
}
#first-para {
  font-family: "Exo 2", sans-serif;

}
#second-para {
  font-family: "Exo 2", sans-serif;
  font-size: 15px;
    background: #4B5320;
color: #2D3502;
background: linear-gradient(to bottom, #4B5320 0%, #3C4411 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4B5320), color-stop(100%, #3C4411));
background: -webkit-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -moz-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -o-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -ms-linear-gradient(top, #4B5320 0%, #3C4411 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
border: 1px solid #2D3502;
text-shadow: 0 1px 0 #5A622F;
-webkit-text-shadow: 0 1px 0 #5A622F;
-moz-text-shadow: 0 1px 0 #5A622F;
box-shadow: inset 0 1px 0 #5A622F;
-webkit-box-shadow: inset 0 1px 0 #5A622F;
-moz-box-shadow: inset 0 1px 0 #5A622F;
}
#second-card {
  margin: 7px;
}
#header {
  position: relative;
  padding-top: 0%;
  padding-bottom: 0%;
  margin-top: 0%;
  margin-bottom: 0%;
}
#First-Object {
  size: 45px;
  color: "yellow";
}
#Exterior-Car{
  font-weight: 500;
}
@media screen and (max-width: 400px) {
  #review-header {
    font-size: x-large;
  }
}
</style>
