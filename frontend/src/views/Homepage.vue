<script setup>
import { ref } from "vue";
import UserenrolForm from "./UserenrolForm.vue";
import AuthenForm from "./AuthenForm.vue";

const enrolled = ref(false); // Track if the user has enrolled

const handleEnrollment = () => {
  enrolled.value = true; // Replace UserenrolForm with AuthenForm
};
</script>

<template>
  <div class="container">
    <!-- Show UserenrolForm first -->
    <UserenrolForm v-if="!enrolled" @enrolled="handleEnrollment" />

    <!-- Show AuthenForm after enrollment -->
    <AuthenForm v-else />
  </div>
</template>

<style scoped>
.container {
  width:100%;
  margin: auto;
  padding: 20px;
  text-align: center;
}
</style>
