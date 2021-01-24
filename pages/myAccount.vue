<template>
  <div>
    <h1 class="display-1">Mes informations</h1>
    <div v-if="!changeInfo">
      <ul>
        <li>Nom: {{ informations.name }}</li>
        <li>Prénom: {{ informations.lastname }}</li>
        <li>Email: {{ informations.email }}</li>
        <li>Téléphone: {{ informations.telephone_number }}</li>
      </ul>
      <button @click="onClick">Modifier</button>
    </div>
    <b-form @submit.prevent="onSubmit" v-else>
      <b-form-group id="input-group-1" label="Nom :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="informations.name"
          type="text"
          :placeholder="informations.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Prénom :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="informations.lastname"
          type="text"
          :placeholder="informations.lastname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Votre adresse email :"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="informations.email"
          type="text"
          :placeholder="informations.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Votre numéro de téléphone :"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="informations.telephone_number"
          type="text"
          :placeholder="informations.telephone_number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button @click="onClick" variant="primary">Retour</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      informations: {
        name: "",
        lastname: "",
        email: "",
        telephone_number: ""
      },
      changeInfo: false
    };
  },
  methods: {
    onClick() {
      this.changeInfo = !this.changeInfo;
    },

    onSubmit() {
      const token = localStorage.getItem("auth._token.local")
      console.log(token)
      axios.put(`http://localhost:8080/api/user/4`,
      {
        name: this.informations.name,
        lastname: this.informations.lastname,
        email: this.informations.email,
        telephone_number: this.informations.telephone_number
      },
      { headers: { 'Authorization': token }}
      );
      // .catch(err => console.log(err))
    }
  },
  async asyncData({ $axios }) {
    const informations = await $axios.$get(`/user/4`);
    return { informations };
  }
};
</script>
