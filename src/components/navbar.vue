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
     <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet">
    <!-- new font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
  </head>
  <q-header id = "title-container" reveal class="bg-image flex row-3">
    <q-toolbar class="bg-black q-pa-sm bg-image">
        <div class="col" id = "title-container">
          <q-avatar size="56px" class="flex flex-center q-my-sm" round>
            <q-img rounded src="~assets/jackscover1.jpg">

            </q-img>
          </q-avatar>
        </div>
        <q-toolbar-title class="col-8 flex flex-center" style="display: center;">
        <h3 style="font-style: italic;" id="nav-title">
          Jax's Dump LLC
        </h3>
      </q-toolbar-title>
        <div class="col text-white" align="right">
          <q-btn icon="menu" class = "bg-black">
            <q-menu class="bg-black">
              <q-list align="center">
                <q-item class="text-white">
                  <div class="">
                    <q-btn
                    to="/"
                  >
                    Home
                  </q-btn>
                  </div>

                </q-item>
                <q-item>
                <div class="">
                  <q-btn
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
   .bg-image {
  background-image: url("../~assets/jackscover1.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
  .font-style{
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-kerning: auto;
font-size: 24px;
font-stretch: normal;
font-style: normal;
font-variant: normal;
font-variant-ligatures: normal;
font-weight: normal;
  }
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
#title-container{
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    }
#title{
  font-size: xxx-large;
  font-family: 'Roboto', sans-serif;
  font-weight: bold

}
@media screen and (max-width: 450px) {
  #title{
    font-size: xx-large;
  }
  #nav-title{
    font-size: 24px;
    display: flex;
    position: flex;
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

