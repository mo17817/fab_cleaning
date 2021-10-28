<template>
  <q-layout class="bg-white" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary glossy text-white ">
          <div class="col">
            <div class="row">
                <q-avatar
                size="xl"
                >
                  <img
                    class="rounded-circle align-self-start mr-3"
                    src="../assets/FABlogo.png"
                  />
              </q-avatar>
            </div>

          </div>
          <div class="col">
            <q-toolbar-title align='center'>
            FAB cleaning
            </q-toolbar-title>
          </div>

          <div class="col flex-break">
                     <q-breadcrumbs active-color="white" gutter ="lg" align="right">

            <!-- <q-separator dark vertical inset /> -->
            <q-breadcrumbs-el
              label="About"
              icon="widgets"
              href="src/pages/index.vue"
            />
            <!-- <q-separator dark vertical inset /> -->
            <q-breadcrumbs-el
              label="Services"
              icon="build"
              href="src/pages/index.vue"
            />
            <!-- <q-separator dark vertical inset /> -->
            
          </q-breadcrumbs>

          </div>
 
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from "vue";
// import navbar from "../components/navbar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {

    return {

    };
  },
});
</script>

<style lang="scss" scoped>
.q-layout {
  background-color: green($color: #000000);
}
</style>
