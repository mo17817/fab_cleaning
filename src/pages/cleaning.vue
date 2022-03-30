<template>
<div class="row q-pa-lg justify-content-center" align="center">
  <div class="col-6">
     <q-parallax id="parallax-1" src="~assets/Ceramics.jpg" size="400px" align="center" bordered >
  </q-parallax>
  </div>
  </div>
  <lb />
  <div class="col-4 q-pa-xl" align="top">
    <Form />
     <h3>
    this is the cleaning Page
  </h3>
  </div>
</template>
<style scoped>

</style>
<script>
import { defineComponent } from '@vue/composition-api';
import Form from 'components/Form';

export default defineComponent({
  setup() {

  },
  components: { Form }
})
</script>
<style>
#parallax-1{
  justify-content: center;
  padding-left: 25%;
  margin-left: 45%;
}
</style>
