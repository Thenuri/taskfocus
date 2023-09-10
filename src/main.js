import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlBKWmRtNr3WRGjxwObCJcQV9E-OCamrY",
  authDomain: "taskfocus-bde0a.firebaseapp.com",
  projectId: "taskfocus-bde0a",
  storageBucket: "taskfocus-bde0a.appspot.com",
  messagingSenderId: "935546258704",
  appId: "1:935546258704:web:b70106c1477faa2c8e5195"
};

 initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');
