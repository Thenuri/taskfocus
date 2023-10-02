<template>
    <div>
        <Sidebar />
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiase dark:bg-gray-700 text-black dark:text-white">
            <div class="h-full ml-14 mt-40 mb-10 md:ml-64">
                <!-- Statistics Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 p-4 mt-1 gap-4">
                    <div
                        class=" shadow-lg rounded-md flex items-center justify-between p-3 dark:border-gray-600 text-white font-medium group">
                        <div class="container">
                            <div class="settings-container bg-gray-900 rounded-2xl border border-orange-500">
                                <div class="setting">
                                    <span class="mr-10">Turn on Notifications</span>
                                    <label class="toggle">
                                        <input type="checkbox" v-model="notificationEnabled" 
                                            @change="toggleNotifications" />
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                <div class="setting">
                                    <span class="mr-28">Wake Lock</span>
                                    <label class="toggle">
                                        <input type="checkbox" v-model="wakeLockEnabled" @change="toggleWakeLock" />
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Foot/>
</template>
  
<script>
import Foot from '../views/Foot.vue'
import Sidebar from '../components/Sidebar.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        Sidebar,
        Foot
    },
    computed: {
        vibrationEnabled: {
            get() {
                return this.$store.state.vibrationEnabled;
            },
            set(enabled) {
                this.$store.commit('setVibrationEnabled', enabled);
                if (enabled) {
                    this.vibrate(); // Call a method to trigger vibration
                }
            }
        },
        notificationEnabled: {
            get() {
                return this.$store.getters.notificationEnabled;
            },
            set(enabled) {
                this.$store.commit('setNotificationEnabled', enabled);
                // Implement your notification logic here based on the enabled state
                // if (enabled) {
                //     this.sendNotification('You have enabled notification');
                // }
            },
        },
        wakeLockEnabled: {
            get() {
                return this.$store.getters.wakeLockEnabled;
            },
            set(enabled) {
                this.$store.commit('setWakeLockEnabled', enabled);
                // Implement your wake lock logic here based on the enabled state
                if (enabled) {
                    this.requestWakeLock();
                } else {
                    this.releaseWakeLock();
                }
            },
        },
        wakeLockActive() {
            return this.$store.getters.wakeLockActive;
        },
    },
    methods: {
        ...mapActions(['requestNotificationPermission']),

        toggleNotifications() {
            // The notificationEnabled computed property will handle notifications.
        },
        toggleWakeLock() {
            // The wakeLockEnabled computed property will handle wake lock.
        },
        requestWakeLock() {
            // Implement your wake lock request logic using Vuex actions.
            this.$store.dispatch('requestWakeLock');
        },
        releaseWakeLock() {
            // Implement your wake lock release logic using Vuex actions.
            this.$store.dispatch('releaseWakeLock');
        },
        sendNotification(message) {
            // Implement your notification logic using Vuex actions.
            this.$store.dispatch('sendNotification', message);
        },
    },
    created() {
        // Request notification permission on component creation
        this.requestNotificationPermission();
    },
    
};
</script>
  
  

<style scoped>
.settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px;
}

.settings-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0px;
}

.setting {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 16px;
}

.toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
}

.toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #7a6f6f;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #F59E0B;
}

input:focus+.slider {
    box-shadow: 0 0 1px #F59E0B;
}

input:checked+.slider:before {
    transform: translateX(25px);
}
</style>
