<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <navbar></navbar>
      
        <q-footer elavated>
          <q-toolbar class = "bg-black" >
            <q-toolbar-title class="text-center text-italic text-subtitle2 text-weight-thin">Designed by Mo and Austin. For help building your site email austin4399@gmail.com </q-toolbar-title>
          </q-toolbar>
        </q-footer>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>


import { defineComponent, ref } from "vue";
import navbar from "../components/navbar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    navbar,
  },
});
</script>

<style lang="scss" scoped>
#nav{
  background-color: white;
  color: black;
}
</style>
