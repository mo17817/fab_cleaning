<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
  </head>
  <div class="q-pa-sm bg-black">
    <div
      class="col q-pa-xs bg-transparent text-primary"
      align="center"
      id="breath-mint"
    >
      <h2 id="our-services">Our Services</h2>
    </div>
    <div class="q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="~assets/cleaning1.jpeg">
          <div align="center">
            <h2 id="tier-header" class="text-black">There's levels to this</h2>
          </div>
        </q-parallax>
      </div>
      <q-separator />

      <!--card section-->
      <!-- REMOVE .reverse() method to fix re-render on button click -->
      <q-card v-for="(value, key) in cardList" :key="key" id ="cards">
        <!-- silver tier conditional -->
        <div v-if="key % 2 !== 0">
          <q-card :class="value.class" flat bordered height="250px" id="tier">
            <div class="col justify-content-center" align="center" id = "card-title">
              {{ value.title }} <q-icon name="military_tech" size="35px" />
            </div>
            <q-card-section horizontal id="img-title" align="center">
              <div>
                <h5 id = "booking-title">
                  Book a service today
                  <q-btn
                    id="booking"
                    value="gold"
                    :label="value.btn"
                    hint="Email and Phone number required"
                    :color="value.color"
                    @click="tierButton((this.value = value.title))"
                  />
                </h5>
              </div>
              <h6 id = "description">
                {{ value.description }}
              </h6>

              <q-img class="col-5" :src="value.imgsrc" id="img" align="right" />
            </q-card-section>
          </q-card>
        </div>
        <!-- other tiers (gold, bronze) -->
        <div v-else>
          <q-card :class="value.class" flat bordered height="250px" id="tier">
            <div class="col justify-content-center" align="center" id = "card-title">
              {{ value.title }} <q-icon name="military_tech" size="35px" />
            </div>
            <q-card-section horizontal id="img-title" align="center">
              <q-img class="col-5" :src="value.imgsrc" id="img" align="right" />
              <h6 id = "description">
                {{ value.description }}
              </h6>
              <div>
                <h5 id = "booking-title">
                  Book a service today
                  <q-btn
                    id="booking"
                    value="gold"
                    :label="value.btn"
                    hint="Email and Phone number required"
                    :color="value.color"
                    @click="tierButton((this.value = value.title))"
                  />
                </h5>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card>

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </div>
    <q-dialog v-model="dialog">
      <Form :tier="value"></Form>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
import { defineComponent } from "@vue/composition-api";
import { Parallax } from "components/Parallax.vue";
import Form from "components/Form.vue";

export default {
  components: { Form },
  setup() {
    return {
      dialog: ref(false),
      tier: ref("Gold"),
      value: "",
    };
  },
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
  },
  methods: {
    tierButton: function (button) {
      this.dialog = true;
    },
  },
};
</script>
<style>
#tier-header {
  font-family: "Lobster";
}
#title {
  font-family: "Lobster", cursive;
  font-size: 35px;
  position: relative;
}
#img-title {
  font-family: Raleway, serif;
  font-size: 40px;
  /* padding-left: 20%; */
  /* position: relative; */
  /* z-index: 1; */
}
#tier {
  align-self: right;
  font-size: 40px;
  font-family: Raleway, serif;
  margin-top: 3%;
  font-weight: bold;
}

#bronze-img-title {
  font-family: Raleway, serif;
  font-size: 40px;
}
#silver-img-title {
  font-family: Raleway, serif;
  font-size: 40px;
}
#gold-img-title {
  font-family: Raleway, serif;
  font-size: 40px;
}
#our-services {
  font-family: "Lobster";
  font-size: 35px;
}
#booking {
  position: inline;
}
/* #cards {
  contain: inline;
} */
@media screen and (max-width: 400px) {
  #cards{
    position: flex;
    width: 359px;
    grid-template-columns: 2fr 1fr;
  }
  #img{
    size: small;
    position: flex;
  }
  #description{
    font-size: small;
    font-weight: bold;
  }
  #booking-title{
    font-size: small;
    font-weight: bold;
  }
  #booking{
    font-size: small;
    font-weight: bold;
  }
  #card-title{
    font-size: xx-large;
    font-weight: bold;
  }
}
</style>
