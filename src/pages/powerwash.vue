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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
  </head>
<div class = "q-pa-sm row justify-between">
<q-parallax src="~assets/cleaning207.jpg">
 <h3 class="bg-transparent text-white" align = "center" id ="title"><b>Power-Washing</b></h3>
 <lb />
</q-parallax>
</div>
<lb />
<div class = "col-3 q-pa-sm q-ma-sm" align = "center">
  <h3 id = "title">Get your car looking like it just came off the lot!</h3>
  <lb />
  <lb />
  <div class = "text-white" align = "center" >

  <h4 id="para">
    With our professional power washing we'll get all the nooks and crannies
  </h4>
  </div>
  <q-separator color = "primary" />
  <div class = "text-white" align = "center" >
    <h4 id = "para">
      Schedule an appointment and see what we can do for you !
    </h4>
  </div>
  <q-card
  class="q-pa-sm"
  >
  <q-img src="~assets/rari.jpg" align="center">
  </q-img>
    <q-img src="~assets/cleaning207.jpg" align="center">
    </q-img>
  </q-card>
  <Form> </Form>


</div>
</template>
<style scoped></style>
<script>
import { defineComponent } from '@vue/composition-api'
import Carousel from "components/Carousel.vue";
import Form from "components/Form.vue";

export default{
  setup() {
  },
  components: {Form},
   data() {
    return {
      cardList: [
        {
          id: "bronze",
          title: "Bronze",
          btn: "Book Bronze tier service",
          description:
            "we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design",
          class: "my-card bg-black text-brown-7",
          color: "brown-7",
          imgsrc: [require("../assets/bronzetier.png")],
        },
        {
          id: "silver",
          title: "Silver",
          btn: "Book Silver tier service",
          description:
            "we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design",
          class: "my-card bg-black text-grey-13",
          color: "grey-13",
          imgsrc: [require("../assets/silvertier.png")],
        },
        {
          id: "gold",
          title: "Gold",
          btn: "Book Gold tier service",
          description:
            "we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design",
          class: "my-card bg-black text-yellow-4",
          color: "yellow-4",
          imgsrc: [require("../assets/goldtier.png")],
        },
      ],
   };
  }
}
</script>
<style>
#title{
  font-family: 'Exo 2', sans-serif;
  display: center;
}
#para{
  font-family: 'Exo 2', sans-serif;
  display: center;
}
@media screen and (max-width: 400px){
  #title{
    font-size: medium;
    font-weight:bold;
  }
  #para{
    font-size: medium;
    font-weight: bold;
  }
  #img{
    size: small;
    position: flex;
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
}
</style>
