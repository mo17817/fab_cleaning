<template>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Satisfy&display=swap" rel="stylesheet"/>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
      rel="stylesheet"
    />
    <!-- new font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
  </head>
  <q-header id = "title-container">
    <q-toolbar class="bg-black" id="navbar">
        <div class="col-3" id = "title-container">
          <q-avatar size="56px" class="q-my-sm">
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-white text-center" id="title">
                <b>F&G Detailing</b>
          </div>
        </div>
        <div class="col-3 text-primary" align="right">

          <q-btn icon="menu" class = "bg-black">
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
              <!-- <q-item>
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
              </q-item> -->
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
#navbar{
font-family:'Exo 2', sans-serif;
background: #4B5320;
color: #2D3502;
background: linear-gradient(to bottom, #4B5320 0%, #3C4411 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4B5320), color-stop(100%, #3C4411));
background: -webkit-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -moz-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -o-linear-gradient(top, #4B5320 0%, #3C4411 100%);
background: -ms-linear-gradient(top, #4B5320 0%, #3C4411 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4B5320', endColorstr='#3C4411', GradientType=0);
border: 1px solid #2D3502;
text-shadow: 0 1px 0 #5A622F;
-webkit-text-shadow: 0 1px 0 #5A622F;
-moz-text-shadow: 0 1px 0 #5A622F;
box-shadow: inset 0 1px 0 #5A622F;
-webkit-box-shadow: inset 0 1px 0 #5A622F;
-moz-box-shadow: inset 0 1px 0 #5A622F;
}
#title{
  font-size: xxx-large;
  font-family: 'Poppins', sans-serif;

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

