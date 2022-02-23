<template>
    <q-card class="my-card bg-grey-10 text-black" rounded>
      <q-separator color="primary" inset />
      <q-card-actions vertical align="center">
        <q-avatar rounded>
          <q-img src = "~assets/5-star.png"/>
        </q-avatar>
        <h3>"We had a great experience at Fab Cleaning 5 stars! {{review.name}}"</h3>

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
</template>

<script>

export default {
  data() {
    return {
      review: {
        name: "test",
        email: "",
        rating: "",
        review: ""
      }
    };
  },
}
</script>


<style lang="scss" scoped>
  .my-card {
    width: 50%;
  }
</style>
