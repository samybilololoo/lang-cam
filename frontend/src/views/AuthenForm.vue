<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const loginUser = () => {
  if (email.value && password.value) {
    console.log("User logged in:", email.value);
    alert("Login successful!");
  } else {
    alert("Please enter email and password.");
  }
};  
</script>

<template>
  <div class="auth-container">
    <h2>Log in</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 300px;
  margin: auto;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
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
