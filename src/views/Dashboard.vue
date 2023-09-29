<template>
    <div class=" ">
            <Sidebar />
        </div>
<!-- component -->
<!-- <style>
  /* Compiled dark classes from Tailwind */
  .dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
    border-color: rgba(55, 65, 81);
  }
  .dark .dark\:bg-gray-50 {
    background-color: rgba(249, 250, 251);
  }
  .dark .dark\:bg-gray-100 {
    background-color: rgba(243, 244, 246);
  }
  .dark .dark\:bg-gray-600 {
    background-color: rgba(75, 85, 99);
  }
  .dark .dark\:bg-gray-700 {
    background-color: rgba(55, 65, 81);
  }
  .dark .dark\:bg-gray-800 {
    background-color: rgba(31, 41, 55);
  }
  .dark .dark\:bg-gray-900 {
    background-color: rgba(17, 24, 39);
  }
  .dark .dark\:bg-red-700 {
    background-color: rgba(185, 28, 28);
  }
  .dark .dark\:bg-green-700 {
    background-color: rgba(4, 120, 87);
  }
  .dark .dark\:hover\:bg-gray-200:hover {
    background-color: rgba(229, 231, 235);
  }
  .dark .dark\:hover\:bg-gray-600:hover {
    background-color: rgba(75, 85, 99);
  }
  .dark .dark\:hover\:bg-gray-700:hover {
    background-color: rgba(55, 65, 81);
  }
  .dark .dark\:hover\:bg-gray-900:hover {
    background-color: rgba(17, 24, 39);
  }
  .dark .dark\:border-gray-100 {
    border-color: rgba(243, 244, 246);
  }
  .dark .dark\:border-gray-400 {
    border-color: rgba(156, 163, 175);
  }
  .dark .dark\:border-gray-500 {
    border-color: rgba(107, 114, 128);
  }
  .dark .dark\:border-gray-600 {
    border-color: rgba(75, 85, 99);
  }
  .dark .dark\:border-gray-700 {
    border-color: rgba(55, 65, 81);
  }
  .dark .dark\:border-gray-900 {
    border-color: rgba(17, 24, 39);
  }
  .dark .dark\:hover\:border-gray-800:hover {
    border-color: rgba(31, 41, 55);
  }
  .dark .dark\:text-white {
    color: rgba(255, 255, 255);
  }
  .dark .dark\:text-gray-50 {
    color: rgba(249, 250, 251);
  }
  .dark .dark\:text-gray-100 {
    color: rgba(243, 244, 246);
  }
  .dark .dark\:text-gray-200 {
    color: rgba(229, 231, 235);
  }
  .dark .dark\:text-gray-400 {
    color: rgba(156, 163, 175);
  }
  .dark .dark\:text-gray-500 {
    color: rgba(107, 114, 128);
  }
  .dark .dark\:text-gray-700 {
    color: rgba(55, 65, 81);
  }
  .dark .dark\:text-gray-800 {
    color: rgba(31, 41, 55);
  }
  .dark .dark\:text-red-100 {
    color: rgba(254, 226, 226);
  }
  .dark .dark\:text-green-100 {
    color: rgba(209, 250, 229);
  }
  .dark .dark\:text-blue-400 {
    color: rgba(96, 165, 250);
  }
  .dark .group:hover .dark\:group-hover\:text-gray-500 {
    color: rgba(107, 114, 128);
  }
  .dark .group:focus .dark\:group-focus\:text-gray-700 {
    color: rgba(55, 65, 81);
  }
  .dark .dark\:hover\:text-gray-100:hover {
    color: rgba(243, 244, 246);
  }
  .dark .dark\:hover\:text-blue-500:hover {
    color: rgba(59, 130, 246);
  }

  /* Custom style */
  .header-right {
      width: calc(100% - 3.5rem);
  }
  .sidebar:hover {
      width: 16rem;
  }
  @media only screen and (min-width: 768px) {
      .header-right {
          width: calc(100% - 16rem);
      }        
  } -->
<!-- </style> -->
<div x-data="setup()" :class="{ 'dark': isDark }">
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiase dark:bg-gray-700 text-black dark:text-white">
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        
        <!-- Statistics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 mt-1 gap-4">
          <div class="bg-gray-900 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-color-secondary rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="stroke-current text-white dark:text-gray-800 transform transition-transform duration-500 ease-in-out" ><path fill="white"  d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2ZM7 8v2h10V8H7Zm0 4v2h10v-2H7Z"/></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">1,257</p>
              <p>Tasks to be done</p>
            </div>
          </div>
          <!-- <div class="bg-gray-900 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14  bg-color-secondary rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">557</p>
              <p>Orders</p>
            </div>
          </div> -->
          <div class="bg-gray-900 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14  bg-color-secondary rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-white dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">$11,257</p>
              <p>Completed Tasks</p>
            </div>
          </div>
          <div class="bg-gray-900 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-color-secondary dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14  bg-color-secondary rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"  class="stroke-current  dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="m12.66 16.49l7.5 7.5L35.38 8.77L43 16.39L20.17 39.23L5 24.06Zm-.12 15.12l7.62-7.62"/></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">$75,257</p>
              <p>Remaining Tasks</p>
            </div>
          </div>
        </div>
        <!-- ./Statistics Cards -->
    
       
         
    
       
    
      
        
      </div>
    </div>
  </div>    
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import PauseBefore from "../components/ui/warning_ui/PauseBefore.vue";
export default {
    name: "Dashboard",
    components: {
        Sidebar,
        PauseBefore
        // Footer

    },
}
// components: {
//     Sidebar,
//     PauseBefore
//     // Footer

// }


</script>