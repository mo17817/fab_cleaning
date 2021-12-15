<template>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Satisfy&display=swap" rel="stylesheet"/>
  </head>
  <q-header>
    <q-toolbar class="bg-black" id="navbar">
        <div class="col-2">
          <q-avatar size="56px">
            <img src="~assets/FABlogo.png" alt="Fab Logo" id="logo"/>
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-primary text-center" id="title">
                FAB Cleaning
          </div>
        </div>
        <div class="col-2 text-primary" align="right">
          <q-btn-dropdown class="text-primary bg-black"  color="primary" label= "Pages" id = "Dropdown">
          <q-list class="bg-black" align="center">
            <q-item>
              <div class="col">
                <q-btn
                  name = "Home"
                  class="text-primary"
                  flat
                  to="/"
                  @click="updateDropdown(this.value)"
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
                @click="updateDropDown(this.value)"
                >
                About Me 
                </q-btn>
              </div>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style>
#Dropdown {
  
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
      updateDropDown(value) {
       alert(value);
     }
    }
  }
  function test() {
    console.log("test");
  }
</script>

