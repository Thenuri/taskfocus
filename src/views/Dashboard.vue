<template>
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 ">
            <Sidebar />
        </div>

        <!-- Content -->
        <div class="flex-1 p-4">
            <!-- Your content goes here -->
            <div class="text-2xl  px-8  ">
                Dashboard
            </div>

            <div class="p-8 font-extrabold ">
                <section id="whatCando" class="bg-color-primary-light">
                    <div class="container py-5">

                        <div
                            class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                            <div
                                class="border-2 border-solid border-color-gray bg-color-gray text-center py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4"> Todays Tasks</h3>
                                <p class="text-7xl">20</p>

                            </div>
                            <div
                                class="border-2 border-solid border-color-gray bg-color-gray text-center py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4">Completed Tasks</h3>
                                <p class="text-7xl">20</p>
                            </div>
                            <div
                                class="border-2 border-solid border-color-gray text-center bg-color-gray py-5 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                                <h3 class="text-2xl font-bold py-4">Incompleted Tasks</h3>
                                <p class="text-7xl">20</p>
                            </div>
                        </div>
                    </div>
                    <div class="container py-10">

                        <div
                            class=" grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                            <div
                                class="border-2 border-solid border-color-gray bg-gradient-to-b from-color-primary-light to-blue-950 text-center py-10 px-5 rounded-2xl ">
                                <h3 class="text-3xl text-color-gray font-bold py-4">Tasks</h3>
                                <div
                                    class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                                    <div class="max-w-2xl mx-auto">

                                        <div
                                            class="bg-gray-500 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                            <div class="p-5">
                                                <a href="#">
                                                    <h5
                                                        class="font-bold text-2xl tracking-tight mb-2 dark:text-white">
                                                        Noteworthy technology acquisitions 2021</h5>
                                                </a>
                                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the
                                                    biggest enterprise technology acquisitions of 2021 so far, in reverse
                                                    chronological order.</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
</div></template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
components: {
    Sidebar
}

</script>