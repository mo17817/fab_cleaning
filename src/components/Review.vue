<template>
  <div align="center">
    <h1 class="text-white">Hear from our loyal patrons!</h1>
    <q-card class="q-ma-lg q-pa-md my-card bg-grey-10 text-primary" rounded>
      <q-separator color="primary" inset />
      <q-card-actions vertical align="center">
        <q-avatar rounded size="100px">
          <q-img src = "~assets/5-star.png"/>
        </q-avatar>
        <h3>"We had a great experience at Fab Cleaning 5 stars!"</h3>
      
          <q-btn class="bg-grey-8" align="center">
              <q-icon name = "star_rate" color = "secondary"/>
              <q-icon name = "star_rate" color = "secondary"/>
              <q-icon name = "star_rate" color = "secondary"/>
              <q-icon name = "star_rate" color = "secondary"/>
              <q-icon name = "star_rate" color = "secondary"/>
          </q-btn>
        <h3> Let us know what you think!</h3>
        </q-card-actions>
      <q-separator color="primary" inset />
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
  .my-card {
    width: 50%;
  }
</style>