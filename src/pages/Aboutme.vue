<template>
<head>
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Raleway">
</head>
  <q-page class="bg-secondary">
    <div class="q-pa-md bg-secondary" id="text-container">
      <q-card class="my-card col bg-primary" flat>
        <q-card-section  class = "row" horizontal align="right" size="30">
          <q-card-section class="col text-black" align = "left">
            <q-card-actions class = "center" id ="card-actions-container">
                <q-space  />
             <h3 align = "left"> - About Us -  </h3>
                <q-space />
                <q-avatar rounded size = "85px">
                     <q-img
                     src= "~assets/FABlogo.png"
                     />
                 </q-avatar>
                    <q-separator class = "bg-secondary" vertical />
                    <h6 class = "text-weight-light" >  My name is felix ....(about him)  </h6>
              </q-card-actions>
          </q-card-section>
          <q-separator class = "bg-secondary" vertical />
          <div class="col" id="pic-container">
            <Carousel2></Carousel2>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Carousel2 from "src/components/Carousel2.vue"
export default defineComponent({
  setup() {},
  components: {
    Carousel2,
  },
});
</script>
<style>
#text-container {
  top: 30vh;
  display: flex;
  flex-direction: column;
  font-family: Raleway, serif;
  /* text-shadow: 4px 4px 4px #aaa; */
  bottom: 30vh;
}
#q-card {
  size: 500px;
}
#pic-container {
  padding-left: 2vh;
  size: 100vh;
  flex-direction: column;
}
#card-actions-container{
    /* padding-left: 20%; */
    margin-left: 0%;
}

</style>
