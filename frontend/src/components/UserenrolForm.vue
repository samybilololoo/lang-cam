<script setup>
import { ref } from "vue";
import axios from "axios";

const user = ref({
  firstname: "",
  lastname: "",
  email: "",
  BornedCountry: "",
  BornedCity: "",
  ResidentCountry: "",
  ResidentCity: "",
  Password: "",
  Role: "",
  PreferentLanguage: "",
  image: "",
});

const message = ref(""); // For success/error messages

const createUser = async () => {
  try {
    const response = await axios.post("http://localhost:4000/api/users", user.value);
    message.value = "User created successfully!";
    console.log(response.data);
  } catch (error) {
    message.value = "Error creating user: " + (error.response?.data?.message || error.message);
    console.error(error);
  }
};
</script>

<template>
  <div class="container">
    <h2>Enregistrer-vous </h2>
    <form @submit.prevent="createUser">
      <input type="text" v-model="user.firstname" placeholder="First Name" required />
      <input type="text" v-model="user.lastname" placeholder="Last Name" required />
      <input type="email" v-model="user.email" placeholder="Email" required />
      <input type="text" v-model="user.BornedCountry" placeholder="Borned Country" required />
      <input type="text" v-model="user.BornedCity" placeholder="Borned City" required />
      <input type="text" v-model="user.ResidentCountry" placeholder="Resident Country" required />
      <input type="text" v-model="user.ResidentCity" placeholder="Resident City" required />
      <input type="password" v-model="user.Password" placeholder="Password" required />
      <input type="text" v-model="user.Role" placeholder="Role" required />
      <input type="text" v-model="user.PreferentLanguage" placeholder="Preferred Language" required />
      <input type="text" v-model="user.image" placeholder="Image URL (optional)" />

      <button type="submit">Accepter</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
