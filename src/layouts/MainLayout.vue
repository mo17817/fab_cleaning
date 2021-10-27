<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary glossy text-white">
          <div class="col">
            <div class="row">
                <q-avatar>
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
<!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> **commented out the drawer**-->
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
