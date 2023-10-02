// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    wakeLockEnabled: false,
    notificationEnabled: localStorage.getItem('notificationEnabled') === 'true' || false,
    vibrationEnabled: localStorage.getItem('vibrationEnabled') === 'true' || false,
    wakeLock: null,
  },
  mutations: {
    setVibrationEnabled(state, enabled) {
        state.vibrationEnabled = enabled;
        localStorage.setItem('vibrationEnabled', enabled); // Store in localStorage
    },
    setWakeLockEnabled(state, enabled) {
      state.wakeLockEnabled = enabled;
      localStorage.setItem('wakeLockEnabled', enabled ? '1' : '0');
    },
    setWakeLock(state, wakeLock) {
      state.wakeLock = wakeLock;
    },
    setNotificationEnabled(state, enabled) {
        state.notificationEnabled = enabled;
        localStorage.setItem('notificationEnabled', enabled); 
      },
  },
  actions: {
    requestWakeLock({ commit, state }) {
      if (state.wakeLockEnabled && 'wakeLock' in navigator) {
        navigator.wakeLock
          .request('screen')
          .then((wakeLock) => {
            wakeLock.addEventListener('release', () => {
              console.log('Wake Lock was released');
              commit('setWakeLock', null);
            });
            console.log('Wake Lock is active');
            commit('setWakeLock', wakeLock);
          })
          .catch((error) => {
            console.error(`${error.name}, ${error.message}`);
          });
      }
    },
    toggleNotification({ commit, state }) {
        commit('setNotificationEnabled', !state.notificationEnabled);
      },

    releaseWakeLock({ commit, state }) {
      if (state.wakeLock) {
        state.wakeLock.release();
        commit('setWakeLock', null);
        console.log('Wake Lock was released');
      }
    },
    
    // async sendNotification({ commit }, message) {
    //     try {
    //       // Check if the Notification API is available
    //       if ('Notification' in window) {
    //         // Request permission to show notifications
    //         const permission = await Notification.requestPermission();
            
    //         if (permission === 'granted') {
    //           // Create and show the notification
    //           const notification = new Notification('Task Notification', { body: message });
              
    //           // Handle notification click event (e.g., navigate to the task)
    //           notification.addEventListener('click', () => {
    //             console.log('Notification clicked');
    //             // You can add navigation logic here if needed
    //           });
    //         } else if (permission === 'denied') {
    //           console.warn('Notification permission denied.');
    //         } else {
    //           console.warn('Notification permission ignored.');
    //         }
    //       } else {
    //         console.warn('Notification API not supported.');
    //       }
    //     } catch (error) {
    //       console.error('Error sending notification:', error);
    //     }
    //   },

    // sendNotification({ commit, state }, message) {
    //     if (state.notificationEnabled && 'Notification' in window) {
    //       // Check if notifications are enabled and if the Notification API is available
    //       Notification.requestPermission().then((permission) => {
    //         if (permission === 'granted') {
    //           // Permission is granted, so we can show the notification
    //           console.log('Notification permission granted');
    //           const notification = new Notification(message);
    
    //           // You can also customize the notification further, e.g., add an icon or a click handler
    //           // notification.icon = 'path/to/icon.png';
    //           // notification.onclick = () => {
    //           //   // Handle notification click
    //           // };
    
    //           // You can also close the notification after a certain time (e.g., 5 seconds)
    //           // setTimeout(() => {
    //           //   notification.close();
    //           // }, 5000);
    //         } else if (permission === 'denied') {
    //           // Permission is denied
    //           console.log('Notification permission denied');
    //         } else {
    //           // Permission has not been decided by the user yet
    //           console.log('Notification permission not decided yet');
    //         }
    //       });
    //     }
    // }

    requestNotificationPermission({ commit }) {
        if ('Notification' in window) {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              commit('setNotificationEnabled', true);
              console.log('Notification permission granted');
            } else if (permission === 'denied') {
              commit('setNotificationEnabled', false);
              console.log('Notification permission denied');
            } else {
              console.log('Notification permission not decided yet');
            }
          });
        } else {
          console.warn('Notification API not supported.');
        }
      },
  },
  getters: {
    wakeLockEnabled: (state) => state.wakeLockEnabled,
    wakeLockActive: (state) => !!state.wakeLock,
    // notificationEnabled: (state) => state.notificationEnabled,
    notificationEnabled(state) {
        return state.notificationEnabled;
      },
    vibrationEnabled(state) {
        return state.vibrationEnabled;
      },
  },
});
