<template>
<div>
  <navbar></navbar>
  <q-page>
    <!-- <q-img
        id="banner"      
        src="~assets/cleaning1.jpeg"
      >

    </q-img> -->
  
  

  <div class="q-pa-md row">

    <div class="col">
      <h3 class="text-h3 text-weight-thin text-center">FAB cleaning</h3>
    </div>
  </div>
  </q-page>
</div>
</template>



<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.q-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
}
.my-card{
  width: 100%;
  max-width: 400px;
  height: 800px;
}
</style>
