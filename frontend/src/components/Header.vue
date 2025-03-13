<template>
    <header class="header">
      <div class = "logo"><marquee><img class="logo" src="@/assets/logo.png" alt="Logo" /></marquee></div>
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
        return localStorage.getItem("user-info") !== null;
      },
    },
    methods: {
      logout() {
        localStorage.removeItem("user-info");
        this.$router.push("/authen"); // Redirect to login page
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    background: #333;
    color: white;
    padding: 15px;
    text-align: left;
  }
  .logo{
    height:20px;
    float:right;
  }
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  button {
    margin-left: 20px;
    padding: 5px 10px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  .img{
    width: 20px;
    align:right;
  }
  </style>
  