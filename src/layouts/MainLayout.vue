<template>
  <q-layout view="lHh lPr lFf bg-white" class="bg-white">
    <div>
    <navbar></navbar>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
    <q-footer id="footer">
      <q-toolbar class="bg-black" id="footer">
        <q-toolbar-title
          class="text-center text-italic text-subtitle2 text-weight-heavy"
          id="footer"
        >
          For help building your site, email
          mo.codes207@gmail.com
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    </div>
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
#nav {
  color: black;
}
@media screen and (max-width: 400){
  #footer {
    font-size: 10px;
  }
}
.bg-image {
  background-image: url(assets/jackscover1.jpg);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
