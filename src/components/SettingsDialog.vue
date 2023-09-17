<template>
    <div>
      <!-- Settings Dialog -->
      <div v-if="dialog" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal">
          <div class="bg-slate-900 p-8 rounded-lg shadow-md">
            <h1 class="text-2xl font-semibold mb-4">Settings</h1>
            <div v-for="(timer, i) in timers" :key="i">
              <label class="block mb-2">{{ timer.name }} Duration (minutes)</label>
              <input
                v-model="updatedTimers[i]"
                type="number"
                class="border rounded-md px-2 py-1 w-full text-black mb-4"
              />
            </div>
            <div class="mt-4 flex justify-end">
              <button
                @click="closeDialog"
                class="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-md mr-2"
              >
                Close
              </button>
              <button
                @click="saveSettings"
                class="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dialog: {
        type: Boolean,
        required: true,
      },
      closeDialog: {
        type: Function,
        required: true,
      },
      timers: {
        type: Array,
        required: true,
      },
      save: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        updatedTimers: [],
      };
    },
    watch: {
      timers: {
        handler(newVal) {
          this.updatedTimers = newVal.map((timer) => {
            return timer.minutes.toString();
          });
        },
        deep: true,
      },
    },
    methods: {
      saveSettings() {
        this.updatedTimers = this.updatedTimers.map((timer) => parseInt(timer));
        this.$emit('save-settings', this.updatedTimers);
        localStorage.setItem('timers', JSON.stringify(this.updatedTimers));
        // this.$emit('save-settings', this.updatedTimers);
        this.closeDialog();
      },
    },
    emits:['save-settings']
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  