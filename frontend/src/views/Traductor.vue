<template>
    <div class="traductor-container">
      <div class="input-section">
        <textarea v-model="textToTranslate" placeholder="Enter text or use voice"></textarea>
        <!-- Button to start recording voice (speech-to-text) -->
        <button class="translate-btn" @click="startVoiceInput">🎙️ Start Voice Input</button>
      </div>
  
      <div class="output-section">
        <!-- Select dropdown for language selection -->
        <select v-model="selectedLanguage">
          <option value="en-US">English</option>
          <option value="es-ES">Spanish</option>
          <!-- Add more languages as needed -->
        </select>
        <!-- Button to convert text to speech -->
        <button class="translate-btn" @click="convertTextToSpeech">🔊 Convert to Speech</button>
      </div>
  
      <!-- Display the translated text or the original text -->
      <div v-if="translatedText">
        <textarea v-model="translatedText" placeholder="Translated text" readonly></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textToTranslate: '',
        translatedText: '',
        selectedLanguage: 'en-US',
        recognition: null,  // Speech-to-text recognition object
      };
    },
    methods: {
      // Start voice input (speech-to-text)
      startVoiceInput() {
        if (!('webkitSpeechRecognition' in window)) {
          alert('Speech Recognition is not supported in this browser.');
          return;
        }
  
        this.recognition = new webkitSpeechRecognition();
        this.recognition.lang = this.selectedLanguage;  // Set language for recognition
        this.recognition.continuous = true;  // Allow continuous speech input
        this.recognition.interimResults = true; // Allow for interim results
  
        this.recognition.onresult = (event) => {
          const transcript = event.results[event.results.length - 1][0].transcript;
          this.textToTranslate = transcript;  // Update the textarea with the spoken text
        };
  
        this.recognition.onerror = (event) => {
          console.error('Speech Recognition Error:', event.error);
        };
  
        this.recognition.start();  // Start listening
      },
  
      // Convert the text to speech (text-to-speech)
      convertTextToSpeech() {
        if (!window.speechSynthesis) {
          alert('Text-to-Speech is not supported in this browser.');
          return;
        }
  
        const utterance = new SpeechSynthesisUtterance(this.textToTranslate);
        utterance.lang = this.selectedLanguage;
        speechSynthesis.speak(utterance);
      },
    },
  };
  </script>
  
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
  
  .input-section,
  .output-section {
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
  