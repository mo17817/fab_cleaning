<template>
  <div class="q-pa-md text-primary bg-black full-width border">
    <h3
      align="center"
    >{{this.tier.toString()}}</h3>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
      label="Your city"
      hint="Name of your city"
      filled
      ></q-input>

      <q-input
        filled 
        readonly
        :v-model="tier"
        label = "Service Tier"
        hint = "please enter the type of service"
        lazy-rules
        value = "value"
        :rules ="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
        filled
        v-model = "email"
        label = "Your Email"
        hint = "Enter your email"
        lazy-rules
        :rules = "[ val => val && val.length > 0 || 'Please type something']"
        />

      <q-input
        filled
        type="textarea"
        v-model="age"
        label="Tell us a bit about your service request"
        hint="Car type (sedan, SUV, etc.) and any other details"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <div
        align="center"
      >
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    props:{
      tier: String,
    },
  setup () {
    const $q = useQuasar()
    // let testing = this.props.tier
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const email = ref(null)
    const service = ref(null)
    return {
      name,
      age,
      accept,
      email,
      service,
      // testing,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
        email.value = null
        service.value = null
      }
      
    }
  },
}
</script>