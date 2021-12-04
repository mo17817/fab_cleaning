<template>
  <q-header>
    <q-toolbar class="bg-black" id="navbar">
        <div class="col-2">
          <div class="q-avatar" size='xl'>
            <img src="~assets/FABlogo.png" alt="Fab Logo" id="logo"/>
          </div>
        </div>
        <div class="col">
          <div class="text-primary text-center" id="title">
                FAB Cleaning
          </div>
        </div>
        <div class="col-2" align="right">
          <q-btn-dropdown class="bg-black"  color="black" label="Home">
          <q-list class="bg-black" align="center">
            <q-item>
              <div class="col">
                <q-btn
                  class="text-white"
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
                  class="text-white"
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
                class = "text-white"
                flat 
                to = "/about"
                value="About"
                @onclick="updateDropDown(this)"
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

<style lang="scss" scoped>
  
</style>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
       currentPage: ""
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

