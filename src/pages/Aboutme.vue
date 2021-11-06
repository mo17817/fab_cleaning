<template>
  <q-page class="bg-secondary">
    <div class="q-pa-md row" id="text-container">
      <q-card class="my-card bg-black col" flat bordered>
        <q-card-section horizontal align="right" size="30">
          <q-card-section class="text-white" align = "center">
              <q-card-actions class = "center" id ="card-actions-container">
             <h4 align = "center"> Information about Us: </h4>
                <q-avatar rounded size = "60px" >
                     <q-img
                     src= "~assets/FABlogo.png"
                     />
                 </q-avatar>
                <q-separator horizontal/>
                    <h4> Blashfjhtjhb ashjfjabcbusf dshj </h4>
              </q-card-actions>
          </q-card-section>
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
  text-shadow: 4px 4px 4px #aaa;
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
    position: center;
}
#card-actions-container{
    padding-left: 20%;

}
</style>
