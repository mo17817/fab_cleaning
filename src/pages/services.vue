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
  <div class="q-pa-xs bg-black">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders bg-black"
    >
      <q-header bordered class="bg-black text-primary">
        <q-toolbar>
          <div class="col q-pa-xs">
            <q-toolbar-title class="text-center" id="title">
              Our Services
            </q-toolbar-title>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-pa-md q-gutter-md">
            <div class="row justify-between">
              <q-parallax src="~assets/cleaning4.jpeg">
                <h1 class="text-white">Tiers</h1>
              </q-parallax>
            </div>
<<<<<<< HEAD
          <q-card-section horizontal id = "img-title" align = "center">
           <h6> we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design </h6>
            <q-card-section> </q-card-section>
            <q-img
            class = "col-5"
              src="~assets/goldtier.png"
              id = "img"
              align = "right"
            />
          </q-card-section>
        </q-card>
      </div>
        <!--end card setion-->
        <!--silver tier-->
        <div class ="col-5">
        <q-card class="my-card bg-black text-grey-13" flat bordered height="250px">
          <div class = "col justify-content-center text-grey-13" align = "center" id = "silver-tier">
             Silver <q-icon name = "military_tech" color="grey-13" size = "35px"/>
            </div>
          <q-card-section horizontal id = "silver-img-title">
             <h6> we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design </h6>
            <q-card-section> </q-card-section>
            <q-img
            class = "col-5 justify-around"
              src="~assets/silvertier.png"
              id = "img"
              align = "left"
            />
          </q-card-section>
        </q-card>
        </div>
        <!--end silver start bronze-->
         <div class ="col-5">
        <q-card class="my-card bg-black text-brown-7" flat bordered height="250px">
          <div class = "col justify-content-center text-brown-7" align = "center" id = "bronze-tier">
             Bronze <q-icon name = "military_tech" color="brown-7" size = "35px"/>
            </div>
          <q-card-section horizontal id = "bronze-img-title">
             <h6> we offer a series of different options if you decide to choose our gold tier membership as well as top class trim, top qaulity interior design </h6>
            <q-card-section> </q-card-section>
            <q-img
            class = "col-5 justify-around"
              src="~assets/bronzetier.png"
              id = "img"
              align = "left"
            />
          </q-card-section>
        </q-card>
        </div>
      <q-page-scroller position="bottom-right">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
      </div>
      </q-page>
=======
            <q-separator />
            <!--card section-->

              <q-card
                class="my-card bg-black text-primary"
                flat
                bordered
                height="250px"
              >

                <div
                  class="col justify-content-center"
                  align="center"
                  id="gold-tier"
                >
                  Gold <q-icon name="military_tech" size="35px" />
                </div>
                <q-card-section horizontal id="img-title" align="center">
                  <q-img
                    class="col-5"
                    src="~assets/goldtier.png"
                    id="img"
                    align="right"
                  />
                  <h6>
                    we offer a series of different options if you decide to
                    choose our gold tier membership as well as top class trim,
                    top qaulity interior design
                  </h6>
                  
                </q-card-section>
              </q-card>
            <!--end card setion-->
            <!--silver tier-->
              <q-card
                class="my-card bg-black text-grey-13"
                flat
                bordered
                height="250px"
              >
                <div
                  class="col justify-content-center text-grey-13"
                  align="center"
                  id="silver-tier"
                >
                  Silver
                  <q-icon name="military_tech" color="grey-13" size="35px" />
                </div>
                <q-card-section horizontal id="silver-img-title" align="center">
                  <h6>
                    we offer a series of different options if you decide to
                    choose our gold tier membership as well as top class trim,
                    top qaulity interior design
                  </h6>
                  <q-img
                    class="col-5 justify-around"
                    src="~assets/silvertier.png"
                    id="img"
                    align="left"
                  />
                </q-card-section>
              </q-card>
            <!--end silver start bronze-->
              <q-card
                class="my-card bg-black text-brown-7"
                flat
                bordered
                height="250px"
              >
                <div
                  class="col justify-content-center text-brown-7"
                  align="center"
                  id="bronze-tier"
                >
                  Bronze
                  <q-icon name="military_tech" color="brown-7" size="35px" />
                </div>
                <q-card-section horizontal id="bronze-img-title" align="center">
                  <q-img
                    class="col-5 justify-around"
                    src="~assets/bronzetier.png"
                    id="img"
                    align="left"
                  />
                  <h6>
                    we offer a series of different options if you decide to
                    choose our gold tier membership as well as top class trim,
                    top qaulity interior design
                  </h6>
                  
                </q-card-section>
              </q-card>
            <q-page-scroller position="bottom-right">
              <q-btn fab icon="keyboard_arrow_up" color="accent" />
            </q-page-scroller>
          </div>
        </q-page>
>>>>>>> be7ad4730ea07606cef0fd9d940b2556a39bcb21
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { Parallax } from "components/Parallax.vue";
export default defineComponent({
  setup() {},
  components: {
    // Parallax,
  },
});
</script>
<style>
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
#gold-tier {
  align-self: right;
  font-size: 40px;
  font-family: Raleway, serif;
  margin-top: 3%;
  font-weight: bold;
}
#silver-tier {
  align-self: left;
  font-size: 40px;
  font-family: Raleway, serif;
  margin-top: 3%;
  font-weight: bold;
}
#bronze-tier {
  align-self: left;
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
</style>
