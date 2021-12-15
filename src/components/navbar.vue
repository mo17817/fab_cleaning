<template>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Satisfy&display=swap" rel="stylesheet"/>
  </head>
  <q-header>
    <q-toolbar class="bg-black" id="navbar">
        <div class="col-3">
          <q-avatar size="56px" class="q-my-sm">
            <img src="~assets/FABlogo.png" alt="Fab Logo" id="logo"/>
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-primary text-center" id="title">
                FAB Cleaning
          </div>
        </div>
        <div class="col-3 text-primary" align="right">
          
          <q-btn icon="menu">
            <q-menu class="bg-black">
              <q-list align="center">
                <q-item class="text-primary">
                  <div class="col">
                    <q-btn
                    to="/"
                  >
                    Home
                  </q-btn>
                  </div>
                  
                </q-item>
                <q-item>
                <div class="col">
                  <q-btn
                    class="text-primary"
                    flat
                    to="/services"
                  >
                    Services
                  </q-btn>
                </div>
              </q-item>
              <q-item>
                <div class="col">
                  <q-btn
                  class="text-primary"
                  flat 
                  to = "/about"
                  value="About"
                  >
                  About Me 
                  </q-btn>
                </div>
              </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- <q-icon color="primary">

          <q-btn-dropdown class="text-primary bg-black"  color="primary" dropdown-icon="menu" id = "Dropdown">
            <q-list class="bg-black" align="center">
              <q-item>
                <div class="col">
                  <q-btn
                    name = "Home"
                    class="text-primary"
                    flat
                    to="/"
                  >
                    Home
                  </q-btn>
                </div>
              </q-item>
              <q-item>
                <div class="col">
                  <q-btn
                    class="text-primary"
                    flat
                    to="/services"
                  >
                    Services
                  </q-btn>
                </div>
              </q-item>
              <q-item>
                <div class="col">
                  <q-btn
                  class="text-primary"
                  flat 
                  to = "/about"
                  value="About"
                  >
                  About Me 
                  </q-btn>
                </div>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          </q-icon> -->
      </div>
    </q-toolbar>
  </q-header>
</template>

<style lang="css" scoped>
#title{
  font-size: xxx-large;
}
@media screen and (max-width: 400px) {
  #title{
    font-size: xx-large;
  }
}

#Dropdown{
  color: yellow;
}
</style>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
       currentPage: "",
       value: ""
      }
    },
    methods: {
    }
  }
</script>

