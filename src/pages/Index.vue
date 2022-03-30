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
    <!-- Poppins font-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
      rel="stylesheet"
    />
  </head>

  <div class="q-pa-sm bg-black">
    <div class="col q-pa-xs bg-black" align="center" id="breath-mint">
      <h2 id="breath-mint-text" class="text-primary">
        Like a breath mint for the whip
      </h2>
    </div>

    <div id="carousel-container">
      <div class="col" id="text-container"></div>

      <q-separator color="black" size="8px" />
      <div class="row justify-between">
        <q-parallax id="parallax" src="~assets/cleaning4.jpeg"> </q-parallax>
      </div>
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
          id="card"
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
      <!-- <q-page-scroller
        position="bottom-right"
        :scroll-offset="200"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller> -->
    </div>

    <!-- third card -->
    <div class="flex flex-center q-pa-sm" id="first-card">
      <q-card
        v-for="object in serviceCards.ceramicCoating"
        :key="object"
        :class="object.class"
        flat
        bordered
        :id="object.id"
      >
        <q-space />
        <q-card-section horizontal>
          <q-card-section align="center">
            <div class="col">
              <h3 class="text-black" align="center" id="first-para">
                <q-btn
                  id="button"
                  hint="click for more"
                  :to="object.to"
                  class="bg-accent"
                  rounded
                  bordered
                  size="25px"
                >
                  {{ object.title }}
                </q-btn>
              </h3>
              <div class="col q-ma-sm" align="center"></div>

              <q-separator horizontal color="primary" />
              <h6 class="text-weight-heavy" id="first-para">
                <lb />
                {{ object.description }}
              </h6>
              <div class="col q-my-sm">
                <q-space />
                <q-parallax>
                  <template v-slot:media>
                    <img :src="object.img" />
                  </template>
                  <!-- <q-img class="col-3" :src="object.img" height="600px" fit="fill" /> -->
                </q-parallax>
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
  <!-- <div class="col" align="center" style="font-family: 'Exo 2', sans-serif">
    <h1 class="text-primary" id="review-header">
      Hear from our loyal patrons!
    </h1>
    <Carousel3> </Carousel3>
  </div> -->
</template>

<script>
import { ref } from "vue";
import Carousel from "src/components/Carousel.vue";
import Carousel3 from "components/Carousel3.vue";
import Parallax from "components/Parallax.vue";

export default {
  components: {  },
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
            title: "Auto-Detailing",
            description:
              "Exterior car detailing is not just a quick wash of the exterior components of a car. A good car detailer will make the car gleam, minimize surface scratches, and should always apply a shielding paint sealant",
            class: "my-card",
            imgsrc1: [require("../assets/before4.jpeg")],
            imgsrc2: [require("../assets/after17.jpeg")],
          },
        ],
        ceramicCoating: [
          {
            id: "ceramics",
            title: "Exterior-Detailing",
            description:
              "Ceramic coating for your car and all your glossy needs",
            class: "my-card q-ma-lg q-pa-xl text-black",
            img: [require("../assets/Ceramics.jpg")],
            to: "src/pages/ceramic",
          },
          {
            id: "tint",
            title: "Tinting Services",
            description: "Tinting servcies offered as well",
            class: "my-card q-ma-lg q-pa-xl bg-dark text-primary",
            img: [require("../assets/bmw.jpg")],
            to: "src/pages/tints",
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
#button {
  font-size: 25px;
}
#button.grow {
  transition: all 0.2s ease-in-out;
}
#button.hover {
  transform: scale(5.1);
}
#parallax {
  object-fit: fill;
}
#cleaning {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  max-width: 700px;
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
  object-fit: contain;
}
#tint {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  max-width: 700px;
  background: #242711;
  color: #708015;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
  object-fit: fill;
}
#ceramics {
  max-width: 700px;
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
  object-fit: contain;
}
#card {
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
}
#Interior-Car {
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
  font-weight: 600;
}
#title {
  font-family: "Poppins", Helvetica, Arial, sans-serif;

  font-size: 50px;
  font-weight: bold;
  /* position:sticky; */
}
#breath-mint {
  font-family: "Exo 2", sans-serif;
  /* font-weight: bold; */
  font-size: 30px;
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
  font-weight: bold;

  /* position: fixed; */
  /* font-weight: initial; */
}
#breath-mint-text {
  font-size: 30px;
  font-style: italic;
  font-weight: 500;
}
#first-para {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-weight: bolder;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
#second-para {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 15px;
  background: #4b5320;
  color: #2d3502;
  background: linear-gradient(to bottom, #4b5320 0%, #3c4411 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #4b5320),
    color-stop(100%, #3c4411)
  );
  background: -webkit-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -moz-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -o-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  background: -ms-linear-gradient(top, #4b5320 0%, #3c4411 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
  border: 1px solid #2d3502;
  text-shadow: 0 1px 0 #5a622f;
  -webkit-text-shadow: 0 1px 0 #5a622f;
  -moz-text-shadow: 0 1px 0 #5a622f;
  box-shadow: inset 0 1px 0 #5a622f;
  -webkit-box-shadow: inset 0 1px 0 #5a622f;
  -moz-box-shadow: inset 0 1px 0 #5a622f;
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
#Exterior-Car {
  font-weight: 500;
}

@media screen and (max-width: 400px) {
  #review-header {
    font-size: x-large;
  }
  #ceramics {
    padding: 1px;
    margin: 1px;
    font-size: small;
    object-fit: contain;
    align-content: center;
    size: 100px;
    display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  }
  #tint {
    padding: 1px;
    margin: 1px;
    font-size: small;
    object-fit: contain;
    align-content: center;
    size: 100px;
    display: inline-flex;
    margin-top: 15px;
  }
  #cleaning {
    padding: 1px;
    margin: 1px;
    font-size: small;
    object-fit: contain;
    align-content: center;
    size: 100px;
    display: inline-flex;
    margin-top: 15px;
  }
}
</style>
