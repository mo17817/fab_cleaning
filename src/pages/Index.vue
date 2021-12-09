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
  </head>
  <div class="q-pa-sm bg-black">
    <button
      @click="testEmailjs()"
    >
      Send Email
    </button>
    <div
      class="col q-pa-xs text-primary"
      align="center"
      id="breath-mint"
    >
      <h2 id = "breath-mint">Like a breath mint for the whip</h2>
    </div>
       
    <div id="carousel-container">
      <div class="col" id="text-container"></div>

      <q-separator color = "secondary" size = "8px" /> 

      <carousel></carousel>
    </div>
      <q-separator color = "secondary" size = "8px" />
    <!-- first card -->
    <div class="row q-ma-sm bg-primary">
      <div class="row q-ma-sm">
        <q-card class="my-card bg-black" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              <div class="col-6">
                <q-toolbar-title
                  elevated
                  class="q-pt-md bg-black text-primary"
                  id="first-para"
                  align="center"
                >
                  <h3>
                    What we offer
                    <q-avatar rounded size = "70px">
                      <q-img src="~assets/FABlogo.png" />
                    </q-avatar>
                  </h3>
                  <q-separator horizontal color="yellow-7" />
                </q-toolbar-title>
                <h6 class="text-primary" id="second-para">
                  <h3>Interior Car Detailing</h3>
                  <lb />
                  Outer beauty is nothing compared to inner beauty. Therefore,
                  it comes as no surprise that interior car detailing requires
                  more effort and time than exterior detailing. A dirty interior
                  cabin not only has a bad odor, but also adds to operational
                  complications. Dirty air exhaust spreads allergens about the
                  cabin; stain and grit causes switches to fail; and hazy
                  windows can obscure the view of a driver. In that case,
                  cleaning a car’s interior is more than just washing with water
                  and soap.
                </h6>
              </div>
            </q-card-section>
            <!-- before and after pics -->
            <q-img class="col-3" src="~assets/before1.jpeg" height="600px" />
            <q-space vertical />
            <q-img class="col-3" src="~assets/after2.jpeg" height="600px" />
            <!-- before and after pics -->
          </q-card-section>
        </q-card>
      </div>
    </div>



    <!-- second card -->
    <div class="row q-ma-sm bg-secondary">
      <div class = "row q-ma-sm" id = "second-card">
        <q-card class="my-card bg-black" flat >
        <q-card-section horizontal>
          <q-card-section>
            <div class="col-6">
              <h6 class="text-primary" id="second-para">
                <h3>Exterior Car Detailing</h3>
                <lb/>
                Outer beauty is nothing compared to inner beauty. Therefore,
                it comes as no surprise that interior car detailing requires
                more effort and time than exterior detailing. A dirty interior
                cabin not only has a bad odor, but also adds to operational
                complications. Dirty air exhaust spreads allergens about the
                cabin; stain and grit causes switches to fail; and hazy
                windows can obscure the view of a driver. In that case,
                cleaning a car’s interior is more than just washing with water
                and soap.
              </h6>
                <q-img class="col-3" src="~assets/before4.jpeg" height="350px" />
                <q-img class="col-3" src="~assets/after17.jpeg" height="350px" />
            </div>
          </q-card-section>
        </q-card-section>
        </q-card>
      </div>
      
      <!--page scroller-->
      <q-page-scroller position="bottom-right" :scroll-offset="200" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </div>
    <div class="col" align="center">
      <h1 class="text-white">Hear from our loyal patrons!</h1>
      <Carousel3> </Carousel3>
      <Form></Form>
      <!-- <Review></Review>
      <Review></Review>
      <Review></Review> -->
    </div>




    <!--  -->
    <!-- <form ref="form">
      <input type="text" ref="name" placeholder="Name" />
      <input type="text" ref="email" placeholder="Email" />
    </form> -->
  </div>
</template>

<script>
import { ref } from "vue";
import Carousel from "src/components/Carousel.vue";
// import Review from "src/components/Review.vue";
import Carousel3 from "components/Carousel3.vue";
import emailjs from "emailjs-com";
import Form from "components/Form.vue";
export default {
  components: { Carousel,  Carousel3, Form },
  setup() {
    return {
      slide: ref(1),
    };
  },
  methods: {

    testEmailjs() {
      alert("function called");

      emailjs.send("service_pymn93q", "template_enk29gg", this.ref.form , "user_2PwSHZeOnQt3MqFWKqaKx")
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    },
    prev() {
    this.slide.value--;
  },
},
}
</script>

<style>
#title {
  font-family: "Lobster";
  font-size: 50px;
  /* font-weight: bold; */
  /* position:sticky; */
}
#breath-mint {
  font-family: "Lobster";
  font-size: 35px;
  /* position: fixed; */
  /* font-weight: initial; */
}
#first-para {
  font-family: "Raleway";
  font-size: 40px;
}
#second-para {
  font-family: "Raleway";
  font-size: 15px;
}
#second-card{
  margin: 7px;
}
#header{
  position: relative;
  padding-top: 0%;
  padding-bottom: 0%;
  margin-top:0%;
  margin-bottom: 0%;
}
</style>
