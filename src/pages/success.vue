
<template>
  <head>
     <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet">
  </head>

  <div class = "col" align = "center">
    <q-avatar size= "300px" align = "center">
    <q-img src="~assets/FGlogo.jpg" id="img" align="center" type = "button" href = "/home" />
    </q-avatar>
    <h3 align = "center" id = "service-req">
      Your service request has been submitted. We will get back to you shortly
    </h3>
      <q-btn
        to = "/"
        label = "click here for home page"
        rounded
        class = "text-black bg-primary"
        />
  </div>
</template>

<script>
export default {};
</script>
<style>
#service-req{
  font-family: Raleway;
}

</style>
