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
        <div
          class="col q-pa-xs bg-transparent text-primary"
          align="center"
          id="breath-mint"
        >
          <h2 id = "our-services">About us</h2>
        </div>
  </div>
  
  <q-card class="q-pa-md my-card q-ma-sm bg-primary" id="about-me-container">
    <!--container for card and carousel medium padding all sides -->
    <q-card-section class="row" horizontal align="right" size="30">
      <q-card-section class="q-pa-md col text-black" align="left">
        <q-card-actions
          class="center"
          id="card-actions-container"
          align="space-between"
        >
          <q-avatar rounded size="85px">
            <q-img src="~assets/FABlogo.png" />
          </q-avatar>
          <h4 class="text-weight-medium">
            Felix Atienza Gorman
          </h4>
        </q-card-actions>
      <q-separator class="bg-secondary"/>

        <div class="q-mt-md" id="about-me-summary">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and   more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
      </q-card-section>
      <div class="col" id="pic-container">
        <Carousel2 id="about-me-car"></Carousel2>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
  import { defineComponent } from "@vue/composition-api";
  import Carousel2 from "src/components/Carousel2.vue";

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
#about-me-container {
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border-radius: 10px;
/* box-shadow: rgb(247, 3, 3) 1.95px 1.95px 1.95px 2.6px; */
}

#about-me-car{
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
} 
#pic-container {
  padding-left: 2vh;
  size: 100vh;
  flex-direction: column;
} 
#card-actions-container {
  padding: 1%;
  margin-left: 0%;
}

#card-actions-container h4{
  margin-left: 3%;
}

#card-actions-container div{
  margin-right: 3%;
}
</style>
