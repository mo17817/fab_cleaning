<template>
<q-header>
  <q-toolbar class="bg-black" id="navbar">
      <div class="col">

        <div class="q-avatar" size='xl'>
          <img src="~assets/FABlogo.png" alt="Fab Logo" id="logo"/>
        </div>
        
      </div>
      <div class="col">
        <div class="text-primary text-center" id="title">
              Fab Cleaning
        </div>
      </div>
      <div class="col" align="right">
        <q-btn-dropdown class="bg-black"  color="black" stretch label="Dropdown">
        <q-list class="bg-black">
          <q-item>
            <q-btn
              class="text-white"
              flat
              rounded
              to="/"
            >
              Home
            </q-btn>
          </q-item>
          <q-item>
            <q-btn
              class="text-white"
              flat
              rounded
              to="/services"
            >
              Services
            </q-btn>
          </q-item>
        <q-item>
          <q-btn
          class = "text-white"
          flat 
          rounded 
          to = "/Aboutme"
          >
          About Me 
          </q-btn>
        </q-item>
        </q-list>
      </q-btn-dropdown>
        

        
      </div>
  </q-toolbar>
</q-header>
</template>

<style lang="scss" scoped>
  
</style>
