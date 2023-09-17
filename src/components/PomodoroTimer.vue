<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <!-- Settings Button -->
      <button
        @click="openDialog"
        class="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-md mb-4"
      >
        Settings
      </button>
  
      <!-- Timer Display -->
      <div class="bg-slate-600 p-8 rounded-lg shadow-md">
        <h1 class="text-3xl font-semibold mb-4">{{ currentPhase }}</h1>
        <h2 class="text-2xl mb-4">{{ displayMinutes }}:{{ displaySeconds }}</h2>
        <div class="flex space-x-4">
          <button
            @click="start"
            :disabled="isRunning"
            class="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-md"
          >
            Start
          </button>
          <button
            @click="stop"
            :disabled="!isRunning"
            class="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-md"
          >
            Stop
          </button>
          <button
            @click="reset"
            :disabled="!isRunning && totalSeconds === 0"
            class="bg-gray-500 hover:bg-gray-600 text-black px-4 py-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
  
      <!-- Settings Dialog -->
      <SettingsDialog
        v-if="dialog"
        :dialog="dialog"
        :closeDialog="closeDialog"
        :timers="timers"
        @save-settings="save"
      />
    </div>
  </template>
  
  <script>
  import SettingsDialog from "../components/SettingsDialog.vue";
  
  
  export default {
    components: {
      SettingsDialog,
    },
    data() {
        const storedTimers = JSON.parse(localStorage.getItem('timers'));
        
      return {
        isRunning: false,
        timerInstance: null,
        totalSeconds: storedTimers ? storedTimers[0] * 60 : 0.1 * 60, // Use the stored value if available
        currentTimer: 0,
        timers:  [
          {
            name: "Pomodoro",
            minutes: 0.1,
          },
          {
            name: "Short Break",
            minutes: 0.1,
          },
          {
            name: "Long Break",
            minutes: 0.1,
          },
        ],
        dialog: false,
      };
    },
    computed: {
      displayMinutes() {
        const minutes = Math.floor(this.totalSeconds / 60);
        return this.formatTime(minutes);
      },
      displaySeconds() {
        const seconds = this.totalSeconds % 60;
        return this.formatTime(seconds);
      },
      currentPhase() {
        return this.timers[this.currentTimer].name;
      },
    },
    methods: {
      formatTime(time) {
        if (time < 10) {
          return "0" + time;
        }
        return time.toString();
      },
      start() {
        this.stop();
        this.isRunning = true;
        this.timerInstance = setInterval(() => {
          if (this.totalSeconds <= 0) {
            this.stop();
            if (this.currentPhase == 'Short Break'){
              this.currentTimer = 0;
              this.changeCurrentTimer(this.currentTimer)
              this.stop();
              return;
            }
            this.changeCurrentTimer(this.currentTimer+1)
            return;
          }
          this.totalSeconds -= 1;
        }, 1000);
      },
      stop() {
        this.isRunning = false;
        clearInterval(this.timerInstance);
      },
      reset() {
        this.stop();
        this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
      },
      changeCurrentTimer(num) {
        this.currentTimer = num;
        this.reset();
        this.start();
      },
      openDialog() {
        this.dialog = true; // Open the settings dialog
      },
      closeDialog() {
        this.dialog = false; // Close the settings dialog
      },
      save(updatedTimers) {
        this.timers = this.timers.map((timer, i) => {
          return { ...timer, minutes: parseInt(updatedTimers[i]) };
        });
        this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
        this.closeDialog();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  