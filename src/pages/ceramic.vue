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
<q-parallax src="~assets/rari.jpg">
 <h2 class="bg-transparent text-white" align = "center" id ="title"><b>Exterior-Detailing</b></h2>
 <lb />
</q-parallax>
</div>
<lb />
<div class = "col-3 q-pa-sm q-ma-sm" align = "center">
  <h3 id = "title">Give your car the protection it needs</h3>
  <lb />
  <lb />
  <div class = "text-white" align = "center" >

  <h4 id="para">
    From the everyday elements in the roads that it encounters in New England
  </h4>
  </div>
  <q-separator color = "primary" />
  <div class = "text-white" align = "center" >
    <h4 id = "para">
      Schedule an appointment and see what we can do for you !
    </h4>
  </div>
  <q-card
  v-for="objects in ceramicList" :key="objects"
  flat
  :class="objects.class"
  :title="objects.title"
  >
  <q-card-section horizontal class="justify-center">
    <q-avatar  align="center" size="399px" id = "img" class="justify-center">
    <q-img id="img" fit="contain" :src="objects.imgsrc" />
    </q-avatar>
  </q-card-section>
  </q-card>
  <Form> </Form>


</div>
</template>
<script>
import { ref } from "vue";
import Form from "components/Form.vue"
export default {
  components: { Form },
  data(){
    return{
         ceramicList: [
        {
          id: "bronze",
          title: "Bronze",
          btn: "Book Bronze tier service",
          description:
            "we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design",
          class: "my-card bg-black text-brown-7",
          color: "brown-7",
          imgsrc: [require("../assets/ceramics223.jpg")],
        },
        {
          id: "silver",
          title: "Silver",
          btn: "Book Silver tier service",
          description:
            "we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design",
          class: "my-card bg-black text-grey-13",
          color: "grey-13",
          imgsrc: [require("../assets/ceramics224.jpg")],
        },
      ],
    };
  },
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
#img{
  resize: horizontal;
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

