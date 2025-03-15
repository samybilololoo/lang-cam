<template>
    <header class="header">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/enrolment">Enrollment</router-link>
        <button v-if="isAuthenticated" @click="logout">Logout</button>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    computed: {
      isAuthenticated() {
        return localStorage.getItem("user-info"); // Simplified check
      },
    },
    methods: {
      logout() {
        localStorage.removeItem("user-info");
        this.$router.push("/authen");
      },
    },
  };
  </script>
  
 