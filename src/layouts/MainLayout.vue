<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <navbar></navbar>
      
        <q-footer elavated>
          <q-toolbar class = "bg-black" >
            <q-toolbar-title  reveal = "true" style = "bg-secondary"> Mo and Austin </q-toolbar-title>
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
