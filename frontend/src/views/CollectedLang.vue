<template>
    <div class="collectedLang-form">
      <h1>Contribute to Bassa and Bamileke Translation</h1>
      
      <!-- Text Input Section -->
      <div class="input-section">
        <textarea v-model="userInput" placeholder="Type in Bassa or Bamileke"></textarea>
        <button class="translate-btn" @click="submitText">Submit Text</button>
      </div>
  
      <!-- Voice Input Section -->
      <div class="voice-section">
        <button class="voice-btn" @click="startVoiceInput">🎙️ Record Voice</button>
        <p v-if="voiceInput">Detected: {{ voiceInput }}</p>
      </div>
  
      <!-- Language Selection and Translation -->
      <div class="output-section">
        <select v-model="selectedLanguage">
          <option value="bassa">Bassa</option>
          <option value="bamileke">Bamileke</option>
        </select>
        <textarea v-model="translatedText" placeholder="Translation will appear here" readonly></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: '',
        voiceInput: '',
        translatedText: '',
        selectedLanguage: 'bassa',
      };
    },
    methods: {
      // Submit Text to Backend
      submitText() {
        const payload = {
          text: this.userInput,
          language: this.selectedLanguage,
        };
  
        fetch('https://your-backend-domain.com/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
          this.translatedText = data.translation;
        })
        .catch(error => console.error('Error:', error));
      },
  
      // Start Voice Input (Speech-to-Text)
      startVoiceInput() {
        if (!('webkitSpeechRecognition' in window)) {
          alert('Speech Recognition is not supported in this browser.');
          return;
        }
  
        const recognition = new webkitSpeechRecognition();
        recognition.lang = this.selectedLanguage === 'bassa' ? 'bassa-lang' : 'bamileke-lang'; // Replace with actual language codes
        recognition.start();
  
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          this.voiceInput = transcript;
          this.userInput = transcript; // Optionally, update user input with the transcribed voice
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .collectedLang-form {
    width: 50%;
    margin: auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #369b72;
  }
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: white;
  }
  </style>
  