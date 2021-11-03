<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary glossy text-white">
        <q-breadcrumbs align = "center" active-color="white" style="font-size: 17px" gutter="xl">
          <q-breadcrumbs-el 
            label="Home"
            icon="home"
            href="src/pages/index.vue"
          />
          <q-separator dark vertical inset />
          <q-breadcrumbs-el 
            label="About"
            icon="widgets"
            href="src/pages/index.vue"
          />
          <q-separator dark vertical inset />
          <q-breadcrumbs-el align = "left"
            label="Services"
            icon="build"
            href="src/pages/services.vue"
          />
          <!-- <q-separator dark vertical inset /> -->
          <q-avatar size="70px">
            <img
              class="rounded-circle align-self-start mr-3"
              src="../assets/FABlogo.png"
  <q-layout class="bg-white" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar id="nav">
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
                     <q-breadcrumbs active-color="none" gutter ="lg" align="right">

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
          </q-avatar>
        </q-breadcrumbs>
        <q-toolbar-title> </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
        <q-footer elavated>
          <q-toolbar class = "bg-secondary glossy" >
            <q-toolbar-title  reveal = "true" style = "bg-secondary"> Mo and Austin </q-toolbar-title>
              </q-toolbar>
        </q-footer>
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
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";
// import navbar from "../components/navbar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<<<<<<< HEAD
=======

<style lang="scss" scoped>
#nav{
  background-color: white;
  color: black;
}
</style>
>>>>>>> e2825f406d59cc9a4082a5939c42c0345cbbdd30
