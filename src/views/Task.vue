<template>
    <div class="task">
        <Sidebar />
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiase dark:bg-gray-700 text-black dark:text-white">
            <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
                <!-- Statistics Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 mt-1 gap-4">
                    <div
                        class="bg-gray-700-900  dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group">
                        <div class="container">
                            <div class="task-list">
                                <h2>Task List<img src="../assets/list.png"></h2>
                                <div class="row bg-gray-800">
                                    <input type="text" v-model="taskInput" placeholder="Add Task" @keyup.enter="addTask">
                                    <button class="w-20  bg-color-secondary " @click="addTaskWithVibration">Add</button>
                                </div>
                                <ul>
                                    <li v-for="(task, index) in tasks" :key="index"
                                        @click="toggleTask(index), sendTaskCompletedNotification(index)"
                                        :class="{ checked: task.completed }">
                                        {{ task.text }}

                                        <span @click="removeTask(index)">×</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="calendar"></div>
            </div>
        </div>
    </div>
</template>
  
<script>

import Sidebar from "../components/Sidebar.vue";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

// Create a function to convert HTML code to emoji
function htmlToEmoji(htmlCode) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlCode;
    const emoji = tempDiv.textContent;
    return emoji;
}

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            taskInput: "",
            tasks: [],
            posts: {
                htmlCode: []
            }
        };
    },
    methods: {
        async getData() {
            try {
                const response = await this.$http.get(
                    "https://emojihub.yurace.pro/api/random/group/face-positive"
                );
                if (response.data) {
                    console.log(response.data);
                    this.posts = response.data;
                    this.sendTaskCompletedNotification();
                } else {
                    console.log('API response is empty.');
                    this.sendHardcodedNotification();
                }
            } catch (error) {
                console.error(error);
                console.log('API call failed.');
                // this.sendHardcodedNotification();
            }
        },
        addTask() {
            if (this.taskInput === "") {
                alert("You must write something!");
            } else {
                const createdDate = new Date();
                this.tasks.push({ text: this.taskInput, completed: false, createdDate });
                this.taskInput = "";
                this.saveData();
            }
        },
        toggleTask(index) {
            if (this.tasks[index]) {
                this.tasks[index].completed = !this.tasks[index].completed;
                this.saveData();
                // Check if the task is completed and notifications are enabled
                if (this.tasks[index].completed && this.$store.getters.notificationEnabled) {
                    // Check if the API response is available
                    if (this.posts && this.posts.htmlCode && this.posts.htmlCode[0]) {
                        // API response is available, send API-based notification
                        this.sendTaskCompletedNotification(index);
                    } else {
                        // API response is not available, send hardcoded notification
                        this.sendHardcodedNotification();
                    }
                }
            }
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
            this.saveData();
        },
        saveData() {
            localStorage.setItem("data", JSON.stringify(this.tasks));
        },
        showTask() {
            const data = localStorage.getItem("data");
            if (data) {
                this.tasks = JSON.parse(data);
            }
        },
        initCalendar() {
            const calendarEl = this.$el.querySelector('#calendar');
            const calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',
                events: this.tasks.map((task) => ({
                    title: task.text,
                    start: task.createdDate, // Use createdDate for the event start
                    allDay: true,
                    backgroundColor: task.completed ? '#6B7280' : '#F59E0B',
                })),
            });

            calendar.render();
        },

        sendTaskCompletedNotification(index) {
            if (this.$store.getters.notificationEnabled && this.tasks[index] && this.tasks[index].completed) {
                // Check if the Notification API is supported
                if ('Notification' in window) {
                    // Request permission to show notifications
                    Notification.requestPermission().then((permission) => {
                        if (permission === 'granted') {
                            if (this.posts && this.posts.htmlCode && this.posts.htmlCode[0]) {
                                // Convert the emoji HTML code to an actual emoji
                                const emoji = htmlToEmoji(this.posts.htmlCode[0]);

                                // Use it in your notification message
                                let body = `Your task is complete ${emoji}`;

                                const options = {
                                    body,
                                };

                                // Use ServiceWorkerRegistration.showNotification() to display the notification
                                navigator.serviceWorker.ready.then((registration) => {
                                    registration.showNotification('Task Completed', options);
                                });
                            } else {
                                console.warn('Emoji data not available in the API response.');
                            }
                        } else {
                            console.warn('Notification permission denied or ignored.');
                        }
                    });
                } else {
                    console.warn('Notification API not supported.');
                }
            }
        },
        sendHardcodedNotification() {
            if (this.$store.getters.notificationEnabled) {
                // Check if the Notification API is supported
                if ('Notification' in window) {
                    // Request permission to show notifications
                    Notification.requestPermission().then((permission) => {
                        if (permission === 'granted') {
                            // Create a hardcoded notification message
                            let body = 'Your Task is completed 😊🎁🥳';

                            const options = {
                                body,
                            };

                            // Use ServiceWorkerRegistration.showNotification() to display the notification
                            navigator.serviceWorker.ready.then((registration) => {
                                registration.showNotification('Hardcoded Task Notification', options);
                            });
                        } else {
                            console.warn('Notification permission denied or ignored.');
                        }
                    });
                } else {
                    console.warn('Notification API not supported.');
                }
            }
        },

        addTaskWithVibration() {
            this.addTask(); // Call the existing addTask method
            // Check if vibration is supported
            if ('vibrate' in navigator) {
                // Trigger a short vibration
                navigator.vibrate(500);
                console.log('Vibration added');
            }
        },
    },
    mounted() {
        this.initCalendar();
        this.showTask();
    },
    created() {
        this.showTask();
        this.getData();
    },
};
</script>

  
  
<style scoped>
.task-list h2 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.task-list img {
    width: 50px;
    margin-left: 10px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 20px;
    padding-left: 20px;
    margin-bottom: 25px;

}

input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    font-weight: 14px;
    border-radius: 20px;

}

button {
    border: none;
    outline: none;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 20px;

}

ul li {
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    user-select: none;
    cursor: pointer;
    position: relative;
}

ul li::before {
    content: '';

    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: url(../assets/unchecked.png);
    background-size: cover;
    background-position: center;
    left: 12px;
    top: 15px;
}

ul li.checked {
    color: rgb(223, 143, 24);
    text-decoration: line-through;
}

ul li.checked::before {
    background-image: url(../assets/checked.png);
}

ul li span {
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    font-size: 22px;
    color: rgb(185, 114, 15);
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
}

ul li span:hover {
    background: white;

}

#calendar {
    color: white;
}
</style>
