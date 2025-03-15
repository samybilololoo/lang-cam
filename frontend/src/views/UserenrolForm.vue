<script setup>
import { ref } from "vue";
import axios from "axios";
import { defineEmits } from "vue";
const emit = defineEmits(["saved"]);


const user = ref({
  firstname: "",
  lastname: "",
  email: "",
  BornedCountry: "",  // Match backend expected field
  BornedCity: "",     // Match backend expected field
  ResidentCountry: "", // Match backend expected field
  ResidentCity: "",    // Match backend expected field
  Password: "",        // Match backend expected field
  Role: "",            // Match backend expected field
  PreferentLanguage: "", // Match backend expected field
  image: "",
});

const message = ref(""); // For success/error messages

const createUser = async () => {
  if (!validateForm()) {
    message.value = "Please fill all required fields!";
    return;
  }

  try {
    const response = await axios.post("http://localhost:4000/api/users", user.value);
    message.value = "User created successfully!";
    console.log(response.data);
    emit("saved");
  } catch (error) {
    message.value = "Error creating user: " + (error.response?.data?.message || error.message);
    console.error(error);
  }
};

const validateForm = () => {
  return (
    user.value.firstname &&
    user.value.lastname &&
    user.value.email &&
    user.value.BornedCountry &&
    user.value.BornedCity &&
    user.value.ResidentCountry &&
    user.value.ResidentCity &&
    user.value.Password &&
    user.value.Role &&
    user.value.PreferentLanguage
  );
};
</script>

<template>
  <div class="container">
    <h2>Enregistrer-vous</h2>
    <form @submit.prevent="createUser">
      <input type="text" v-model="user.firstname" placeholder="First Name" required />
      <input type="text" v-model="user.lastname" placeholder="Last Name" required />
      <input type="email" v-model="user.email" placeholder="Email" required />
      <input type="text" v-model="user.BornedCountry" placeholder="Borned Country" required />
      <input type="text" v-model="user.BornedCity" placeholder="Borned City" required />
      <input type="text" v-model="user.ResidentCountry" placeholder="Resident Country" required />
      <input type="text" v-model="user.ResidentCity" placeholder="Resident City" required />
      <input type="password" v-model="user.Password" placeholder="Password" required />

      <select v-model="user.Role" required>
        <option value="" disabled>Select User Type</option>
        <option value="admin">Admin</option>
        <option value="guest">Guest</option>
        <option value="customer">Customer</option>
      </select>

      <input type="text" v-model="user.PreferentLanguage" placeholder="Preferred Language" required />
      <input type="text" v-model="user.image" placeholder="Image URL (optional)" />

      <button type="submit">Accepter</button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input,
select {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}

button:hover {
  background: #369f75;
}

.message {
  margin-top: 10px;
  font-weight: bold;
}
</style>
