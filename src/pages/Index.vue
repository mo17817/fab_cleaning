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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap"
      rel="stylesheet"
    />

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
<!-- <q-layout  container style="height: 75%;" class="flex shadow-2 rounded-borders"> -->\
  <!--first q-card-->
  <div class="row q-pa-sm bg-container flex flex-center justify-center" style="align-items: center; width: 100%; display: center;">
    <div class="col flex flex-center q-gutter-sm" style="height: 450px; alignment: center; display: center;">
      <q-img src="~assets/jackscover1.jpg" height="450px" style="width: 750px" id="main-img">

      </q-img>
    </div>
  </div>
  <!-- add a construction cleanup page for residential and commercial construction -->
  <!-- wait for Jax to populate text on services and what we offer and lazy load images -->
  <q-separator color="black" horizontal inset />

  <div class="row-2 q-pa-sm">
    <div class="col-4">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      autoplay
      infinite
      animated
      control-color="secondary"
      navigation
      padding
      height="400px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic1.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic2.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic3.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic4.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic5.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic8.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic9.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="~assets/pic10.jpg" />
        </div>
      </q-carousel-slide>
      </q-carousel>
      <q-separator color="black" horizontal />
    </div>
  </div>

  <div class="row flex flex-center">
    <div class="col">
      <q-layout view="hHh Lpr lFr" container style="height: 350px; width: auto; padding-top: 25%;" class="flex flex-column">
    <div
      class="col-4 flex flex-column"
      style="padding: 5%; fit: contain"
      id="first-card"
      align="left"
    >
      <q-card
        v-for="object in serviceCards.interiorDetailing"
        :key="object"
        :class="object.class"
        class="flex col-4"
        style="fit: contain"
        flat
        bordered
        id="card"
      >
        <q-card-section>
          <q-card-section>
            <div class="col">
              <h3 class="text-black" align="center" id="first-para">
                {{ object.header }}
                  <h5>
                    (scroll)
                  </h5>
              </h3>
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
    </q-layout>
  </div>
</div>

  <div class="row">
    <div class="col">
      <q-seperator color="black" style="font-size: 35px;"/>
    </div>
  </div>
<div class="flex row flex-center bg-white">
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
                class="bg-secondary"
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
              <q-img size="150px" :src="object.img">
                <template v-slot:media>
                  <img :src="object.img" />
                </template>
                <!-- <q-img class="col-3" :src="object.img" height="600px" fit="fill" /> -->
              </q-img>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</div>

  <div class="flex flex-center q-pa-sm">
    <q-card
      v-for="object in serviceCards.yardWork"
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
                class="bg-secondary"
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
              <q-img :src="object.img">
                <template v-slot:media>
                  <img :src="object.img" />
                </template>
                <!-- <q-img class="col-3" :src="object.img" height="600px" fit="fill" /> -->
              </q-img>
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
    <q-btn fab icon="keyboard_arrow_up" color="secondary" />
  </q-page-scroller>
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
  components: {},
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      serviceCards: {
        yardWork: [
          {
            title: "Yard Work/Lawn Care",
            description: " Will keep it clean, keep it neat, remove the junk, mop the floors. So you’re able to eat off the floors if necessary",
            id: "yard-work",
            class: "my-card bg-white text-black",
            img: [require("assets/pic5.jpg")],
          },
        ],
        interiorDetailing: [
          {
            id: "Interior-Car",
            header: "What we offer",
            title: "Who We Are",
            description:"Jaxs dump. It’s Your junk, and we need it now. Your junk your problems and we dump the solutions. A clean environment equals a clear mind. Jaxs dump is a family and team who decided to walk through a path. Where there is no path, make a trail. Turn nothing into something. Believe in a vision and make it into a reality. Our mission is to give that helping hand and put a smile on your face once the job is done. We believe time and providing good services is a valuable assets. From junk removal to handyman, landscape, and more. Not about getting to the destination but more like enjoying the journey and watching it grow. It’s an adventure. Jaxs dump call us. ",
            price: "350 dollars",
            class: "my-card bg-white",
            imgsrc1: [require("../assets/painting.jpg")],
            imgsrc2: [require("../assets/jacksbodypic.jpg")],
          },
        ],
        exteriorDetailing: [
          {
            id: "Exterior-Car",
            title: "Jumk Removal",
            description:
              " It’s your junk, and we need it now. You junk it, we dump it",
            class: "my-card bg-white",
            imgsrc1: [require("../assets/before4.jpeg")],
            imgsrc2: [require("../assets/after17.jpeg")],
          },
        ],
        ceramicCoating: [
          {
            id: "ceramics",
            title: "Junk Removal",
            description: "It’s your junk, and we need it now. You junk it, we dump it",
            class: "my-card q-ma-lg q-pa-xl bg-white text-black",
            img: [require("../assets/pic10.jpg")],
            to: "src/pages/ceramic",
          },
          {
            id: "tint",
            title: "Power-Washing",
            description:
              "We want you to look at your reflection afterward, and be like damm I look good",
            class: "my-card q-ma-lg q-pa-xl bg-white text-primary",
            img: [require("../assets/powerwashing-3.jpg")],
            to: "src/pages/powerwash",
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
.bg-image {
  background-image: url("../~assets/jackscover1.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  position: center;
  display: flex;
}
#jackscover {
  font-family: "Roboto", sans-serif;
}
#jacks-header {
  object-fit: fill;
}
#button {
  font-size: 25px;
}
#first-logo {
  size: 305px;
  object-fit: cover;
  width: 500px;
  height: 250px;
}
#logo {
  border-radius: 45px;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  max-width: 700px;

  object-fit: contain;
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
  object-fit: contain;
  /* font-weight: bold; */
  font-size: 30px;
  font-weight: bold;
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

@media screen and (max-width: 300px) {
  #main-img{
    width: 350px;
    height: 400px;
  }
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
  #first-logo {
    size: 305px;
    font-size: 305px;
    object-fit: cover;
    border-radius: 35px;
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
  .bg-container{
    align-content: center;
    align-items: center;
    display: flex;
    padding-top: 20%;
    margin-top: 5%;
    object-fit: fill;
    column-width: 120px;
    width: auto;
    column-count: 1;
  }
}
</style>
