<template>
  <q-page class="bg-secondary">
    <div class="q-pa-md row" id="text-container">
      <q-card class="my-card bg-black col" flat>
        <q-card-section horizontal align="right" size="30">
          <q-card-section class="text-white" align = "left">
            <q-card-actions class = "center" id ="card-actions-container">
             <h3 align = "left" id = "h3-container"> - About Us -  </h3>
                <q-space />
                <q-avatar rounded size = "75px" >
                     <q-img
                     src= "~assets/FABlogo.png"
                     />
                 </q-avatar>
                <!-- <q-separator horizontal/> -->
                    <q-separator class = "bg-primary" vertical />
                    <h4> My name is felix and welcome to my website and see the services that i have available, check out my services and see what we can do for you  </h4>
              </q-card-actions>
          </q-card-section>
          <q-separator class = "bg-primary" vertical />
          <div class="col-5" id="pic-container">
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
}
#text {
    font-family: Raleway, serif;
    position: left;
}
#card-actions-container{
    /* padding-left: 20%; */
    margin-left: 0%;

}
</style>
