<template>
  <div class="q-pa-md text-primary bg-black full-width border">
    <h3 align="center">{{ this.tier.toString() }}</h3>
    <form class="q-gutter-md" @submit.prevent="sendEmail" ref="serviceForm">
      <q-input
        filled
        name="name"
        :color="this.color"
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        required
      />
      <q-input
        filled
        name="email"
        v-model="email"
        label="Your Email"
        hint="Enter your email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        required
      />

      <q-input
      filled
      name="number"
      v-model="number"
      label="Your phone number"
      hint="enter your phone number"
      required
      />

      <q-input
        name="city"
        label="Your city"
        hint="Name of your city"
        filled
        v-model="city"
        required
      ></q-input>

      <q-input
        filled
        readonly
        name="tier"
        v-model="tierSelected"
        label="Service Tier"
        hint="please enter the type of service"
        lazy-rules
        value="value"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        class="text-white"
        v-model="datetime"
        type="datetime-local"
        value="2021-12-12T19:30"
        min="2021-12-07T00:00"
        max="2021-14-14T00:00"
        name="datetime"
        hint="Please select the date and time of your appointment"
        required
      />

      <q-input
        filled
        type="textarea"
        class="text-white"
        v-model="moreInfo"
        name="moreInfo"
        hint="Please provide more info regarding vehicle type (SUV, sedan, coupe, etc.) and specific service requirements."
      >
      </q-input>

      <div align="center">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="yellow-4"
          flat
          class="q-ml-sm"
        />
      </div>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
import { ref } from "vue";

export default {
  props: {
    tier: {
      type: String,
      default: "check out our rates",
    },
    color: {
      type: String,
      default: "Primary",
    },
  },
  data() {
    return {
      tieroptions: [{
        Bronze: "Bronze-Tier",
        Silver: "Silver-Tier",
        Gold: "Gold-Tier"
      }],
      tierSelected: this.tier,
    };
  },
  setup() {
    // let testing = this.props.tier
    const name = ref(null);
    const age = ref(null);
    const city = ref(null);
    const email = ref(null);
    const service = ref(null);
    const moreInfo = ref(null);
    const datetime = ref(null);
    const number = ref(null);

    return {
      name,
      age,
      city,
      email,
      service,
      moreInfo,
      datetime,
      number,
      // testing,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_du5178k",
          "template_e5r7if7",
          this.$refs.serviceForm,
          "MgRWH6gIETRDl3mYE"
        )
        .then(
          (res) => {
            console.log(res.text);
            if (res.text == "OK") {
              window.location.href = "success";
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  },
};
</script>
