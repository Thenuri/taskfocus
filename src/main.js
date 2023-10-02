import { createApp } from 'vue'
import axios from 'axios';

import './style.css'
import App from './App.vue'
import router from './router'
import TheTimer from'./components/ui/TheTimer.vue'
// import { wakeLockDirective } from './wakeLockDirective.js';
import store from './store';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Vue.prototype.$axios = axios;
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

const wakeLockEnabled = localStorage.getItem('wakeLockEnabled') === '1';
const app = createApp(App);
app.component('the-timer', TheTimer);
app.use(router);
app.mount('#app');
app.config.globalProperties.$http = axios;
// app.directive('wake-lock', wakeLockDirective, { appInstance: app });
app.use(store);
// app.use(axios);
// Set the wake lock state from localStorage
store.commit('setWakeLockEnabled', wakeLockEnabled);

// Request or release the wake lock based on the state
if (wakeLockEnabled) {
  store.dispatch('requestWakeLock');
}