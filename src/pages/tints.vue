<template>
<div class = "col" size = "300px" >
  <Carousel />
</div>
<div class = "col flex flex-center">
<q-card
 color = "primary"
 v-for="cards in cardList"
 :key="cards"
 :class = "cards.class" >
    <q-card-actions horizontal align = "center">
      <q-card-section class = "bg-primary col flex justify-content-center text-black" >
        {{cards.description}}
        <q-img :src="cards.imgsrc" size = "300px">
        </q-img>
      <q-btn class = "text-black bg-primary" bordered >
          <Form> </Form>
      </q-btn>
      </q-card-section>
    </q-card-actions>
</q-card>
  <h1>this is the tints page</h1>
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
  components: {Carousel, Form},
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
