<template>
    <div class="home">
        <Navbar />
    </div>
    <section id="home" class="relative">
        <div class="w-80 h-80 bg-purple-500 absolute top-0 -left-5 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div>
        <div class="w-80 h-80 bg-color-secondary absolute bottom-5 right-0 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div>

        <div class="container py-20">
            <div class="flex flex-col items-center z-20 md:flex-row">
                <div class="text-center mb-12  md:text-left md:w-1/2 md:pr-10">
                    <h1  class="text-3xl text-color-secondary md:text-4xl font-bold  leading-snug mb-4">
                    Manage your work efficiently.
                    </h1>
                    <p class="text-white leading-relaxed  mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde atque commodi consequuntur voluptatem aut id amet. Modi non at, quisquam voluptates quam quidem architecto rerum id, nihil illo magnam?</p>
                    <btn class="mt-2">Get Started</btn>
                </div>
                <div class="md:w-1/2">
                    <img src="../assets/task1.png" alt="">
                </div>
            </div>
 
        </div>
    </section>
    <section id="whatCando" class="bg-color-primary-light">
        <div class="container py-20">
            <div>
                <h1 class="text-3xl md:text-4xl  text-center font-bold mb-10">What can you do with TaskFocus?</h1>
            </div>
            <div class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div  class="ml-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#d116ef" d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Include a Timer</h3>
                    <p class="leading-relax">This app has a promodor timer for you to manage your time</p>
                </div>
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div class=" ml-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"><path fill="#d116ef" d="M15 8h9v2h-9z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#d116ef" d="M15 12h9v2h-9z" class="clr-i-outline clr-i-outline-path-2"/><path fill="#d116ef" d="M15 16h9v2h-9z" class="clr-i-outline clr-i-outline-path-3"/><path fill="#d116ef" d="M15 20h9v2h-9z" class="clr-i-outline clr-i-outline-path-4"/><path fill="#d116ef" d="M15 24h9v2h-9z" class="clr-i-outline clr-i-outline-path-5"/><path fill="#d116ef" d="M11 8h2v2h-2z" class="clr-i-outline clr-i-outline-path-6"/><path fill="#d116ef" d="M11 12h2v2h-2z" class="clr-i-outline clr-i-outline-path-7"/><path fill="#d116ef" d="M11 16h2v2h-2z" class="clr-i-outline clr-i-outline-path-8"/><path fill="#d116ef" d="M11 20h2v2h-2z" class="clr-i-outline clr-i-outline-path-9"/><path fill="#d116ef" d="M11 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-10"/><path fill="#d116ef" d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 30H8V4h20Z" class="clr-i-outline clr-i-outline-path-11"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Add Tasks</h3>
                    <p class="leading-relax">You can add your tasks</p>
                </div>
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div class=" ml-28">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48"><path fill="none" stroke="#d116ef" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h15.857v15.857H5.5zm19.07 7.928l10-10l10 10l-10 10zM5.5 26.643h15.857V42.5H5.5zm21.143 0H42.5V42.5H26.643z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Manage Tasks</h3>
                    <p class="leading-relax">After finishing the task you can tick it as done</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import btn from "../components/btn.vue";
import Navbar from  "../components/Navbar.vue";
export default {
 
  components: {
    Navbar,
    btn
  }
};
</script>
