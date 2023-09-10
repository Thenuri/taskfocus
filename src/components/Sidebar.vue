<template>
    <div class="relative flex min-h-screen ">
        <div class="bg-color-primary-light w-64 px-8 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0"
            :class="{ 'relative -translate-x-0 ': showSidebar }">
            <div class="flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path fill="#f97316"
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                    <rect width="2" height="7" x="11" y="6" fill="#f97316" rx="1">
                        <animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate"
                            values="0 12 12;360 12 12" />
                    </rect>
                    <rect width="2" height="9" x="11" y="11" fill="#f97316" rx="1">
                        <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                            values="0 12 12;360 12 12" />
                    </rect>
                </svg>
                <a href="/" class="text-3xl font-bold">Task<span class="text-orange-500">Focus</span></a>
            </div>
            <nav class="pt-7 space-y-5">
                <a href="#"
                    class="flex items-center space-x-2 py-1 px-2 hover:bg-orange-500 rounded transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    <span>Create Task</span>
                </a>
                <a href="#"
                    class="flex items-center space-x-2 py-1  px-2 hover:bg-orange-500 rounded transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Promodor Timer</span>
                </a>
                <a href="#"
                    class="flex items-center space-x-2  py-1 px-2 hover:bg-orange-500 rounded transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>

                    <span>Calendar</span>
                </a>
                <div class="flex px-3 space-x-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <button @click="logout">Logout</button>
                </div>
                <div class="align-bottom">
                    <img src="../assets/task1.png" alt="">
                </div>
            </nav>
        </div>
        <div class="flex-1 z-20">
            <div class=" text-orange-500 bg-color-primary-light shadow px-2 py-6">
                <button @click="showSidebar = !showSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>
            <div class="p-8 font-extrabold ">
                <section id="whatCando" class="bg-color-primary-light">
                    <div class="container py-10">

                        <div
                            class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                            <div
                                class="border-2 border-solid border-color-gray bg-orange-500 text-center py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4"> Todays Tasks</h3>
                                <p class="text-7xl">20</p>

                            </div>
                            <div
                                class="border-2 border-solid border-color-gray bg-orange-500 text-center py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4">Completed Tasks</h3>
                                <p class="text-7xl">20</p>
                            </div>
                            <div
                                class="border-2 border-solid border-color-gray text-center bg-orange-500  py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4">Incompleted Tasks</h3>
                                <p class="text-7xl">20</p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-10">

                        <div
                            class=" grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                            <div
                                class="border-2 border-solid border-color-gray bg-orange-500 text-center py-10 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4">Tasks</h3>
                                <div
                                    class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                                    <div
                                        class="border-2 border-solid border-color-gray bg-white text-color-primary-light text-center py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                        <p>create figma</p>
                                    </div>
                                    <div
                                        class="border-2 border-solid border-color-gray bg-white text-center  text-color-primary-light py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                        <p>create figma</p>
                                    </div>
                                    <div
                                        class="border-2 border-solid border-color-gray bg-white text-center  text-color-primary-light py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                        <p>create figma</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLogged = ref(false);
const showSidebar = ref(false);
let auth;
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