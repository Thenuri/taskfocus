<template>
    <!-- Header -->


    <!-- Header -->
    <div class="fixed w-full flex items-center bg-color-primary-light justify-between h-14 text-white z-10 ">
        <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 dark:bg-gray-800 border-none">
        </div>
        <div class="flex justify-between items-center h-14 dark:bg-gray-800 header-right">
            <!--  -->
            <ul class="flex items-center">
                <li>
                    <router-link @click="checkTimer('/Settings')" to="/Settings"
                        class="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center  ">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </span>
                       
                    </router-link>
                </li>
                <li>
                    <div
                        class="relative flex flex-row items-center h-11 focus:outline-none   border-l-4 border-transparent  dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </span>
                        <button @click="logout" class="ml-2 text-sm tracking-wide truncate">Logout</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- ./Header -->
    <!-- ./Header -->



    <!-- Sidebar -->
    <div
        class="fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-color-primary-light dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">

        <div class="overflow-y-auto  overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
                <li>
                    <router-link @click="checkTimer('/')" to="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none border-l-4 border-transparent  pr-6">
                        <span class="inline-flex justify-center items-center ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path fill="#f97316"
                                    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                                <rect width="2" height="7" x="11" y="6" fill="#f97316" rx="1">
                                    <animateTransform attributeName="transform" dur="9s" repeatCount="indefinite"
                                        type="rotate" values="0 12 12;360 12 12" />
                                </rect>
                                <rect width="2" height="9" x="11" y="11" fill="#f97316" rx="1">
                                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                                        type="rotate" values="0 12 12;360 12 12" />
                                </rect>
                            </svg>
                        </span>
                        <span class="ml-2 text-3xl font-bold tracking-wide truncate">Task<span
                                class="text-orange-500">Focus</span></span>
                    </router-link>
                </li>
                <li class="px-5 hidden md:block">
                    <div class="flex flex-row items-center h-8">
                        <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                    </div>
                </li>
                <li>
                    <router-link @click="checkTimer('/dashboard')" to="/dashboard"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-500   rounded dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                    </router-link>
                </li>

                <li>
                    <router-link @click="checkTimer('/task')" to="/task"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-500 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent rounded  dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Create Task</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Timer"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-500 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent rounded  dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Pomodoro Timer</span>
                    </router-link>
                </li>
                <!-- <li class="px-5 hidden md:block">
                    <div class="flex flex-row items-center mt-5 h-8">
                        <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                    </div>
                </li> -->
                <!-- <li>
                    <router-link to="#"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-500 rounded  border-l-4 border-transparent  dark:hover:border-gray-800 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
                    </router-link>
                </li> -->



            </ul>
            <!-- Check if timer is running and show warning -->
            <!-- <div v-if="timerIsRunning" class="mt-4 px-5 text-sm text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Timer is still running. Please pause it before switching tabs.
            </div> -->
            <div class="align-bottom">
                <img src="../assets/web15.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { computed } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLogged = ref(false);
const timerAlertDisplayed = ref(false);
const showSidebar = ref(false);
let auth;

async function checkTimer(location) {
    const timerIsRunning = localStorage.getItem("timer_is_runing");
    if (timerIsRunning === 'runing') {
        if(!timerAlertDisplayed.value){
            timerAlertDisplayed.value = true;
            await new Promise((resolve) => {
                alert("Timer is still running. Please pause it before switching tabs.");
                resolve();
            });
            timerAlertDisplayed.value = false;
            router.push("/Timer");
        }
    } else {
        router.push(location);
    }
}
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLogged.value = true;
        } else {
            isLogged.value = false;
        }
    })

});

const logout = () => {
    signOut(auth).then(() => {
        router.push("/");
    });
};
</script>