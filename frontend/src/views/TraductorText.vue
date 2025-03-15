<script setup>
import { ref } from "vue";

const languages = ["Bassa", "Bamileke", "Ewondo", "Bulu", "Sawa", "Toupouri"];
const inputLanguage = ref("Bassa");
const outputLanguage = ref("Bamileke");
const inputText = ref("");
const outputText = ref("");

const translateText = () => {
  // Translation logic (Replace with actual API call or NLP model)
  if (inputText.value.trim() === "") {
    outputText.value = "Please enter text to translate.";
  } else {
    outputText.value = `Translated: ${inputText.value} (${inputLanguage.value} → ${outputLanguage.value})`;
  }
};
</script>

<template>
  <div class="traductor-container">
    <!-- Input Section -->
    <div class="input-section">
      <select v-model="inputLanguage">
        <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
      </select>
      <textarea v-model="inputText" placeholder="Enter text..."></textarea>
    </div>

    <!-- Translate Button -->
    <button class="translate-btn" @click="translateText">Translate</button>

    <!-- Output Section -->
    <div class="output-section">
      <select v-model="outputLanguage">
        <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
      </select>
      <textarea v-model="outputText" placeholder="Translation will appear here..." readonly></textarea>
    </div>
  </div>
</template>

<style scoped>
.traductor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 50%;
  margin: auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.input-section, .output-section {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: white;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: none;
}

textarea:focus {
  outline: none;
  border-color: #42b983;
}

.translate-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

.translate-btn:hover {
  background: #369b72;
}
</style>
