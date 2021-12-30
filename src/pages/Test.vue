<template>
  <div id="test-root">
    <form ref="form" @submit.prevent="sendEmail">
      <q-input name="name" label="Name" filled v-model="name" />
      <q-input name="email" label="Email" filled v-model="email" />
      <q-btn label="Submit" type="submit" color="primary" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "emailjs-com";

export default {
  setup() {
    let name = ref(null);
    let email = ref(null);

    return { name, email };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_pymn93q",
          "template_ab123456789",
          this.$refs.form,
          "user_2PwSHZeOnQt3MqFWKqaKx"
        )
        .then(
          (res) => {
            console.log(res.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  },
};
</script>
