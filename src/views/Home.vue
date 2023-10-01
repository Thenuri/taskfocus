<template>
    <div class="home">
        <Navbar />
    </div>
    <section id="home" class="relative">
        <div class="w-80 h-80 bg-purple-500 absolute top-0 -left-5 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div>
        <div class="w-80 h-80 bg-orange-500 absolute bottom-5 right-0 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div>

        <div class="container py-20">
            <div class="flex flex-col items-center z-20 md:flex-row">
                <div class="text-center mb-12  md:text-left md:w-1/2 md:pr-10">
                    <h1  class="text-3xl text-color-secondary md:text-4xl font-bold  leading-snug mb-4">
                    Manage your work efficiently.
                    </h1>
                    <p class="text-white leading-relaxed  mb-10">TaskFocus empowers you to effortlessly manage your daily tasks and ad-hoc functions. Say goodbye to chaos and hello to efficiency. With TaskFocus, you can stay sharp, work smarter, and maintain unwavering focus at the touch of a button. Let TaskFocus be your trusted companion in conquering your daily challenges and achieving your goals.</p>
                    <btn class="mt-2">Get Started</btn>
                </div>
                <div class="md:w-1/2 ">
                    <img src="../assets/web12.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <section id="whatCando" class="bg-color-primary-light">
        <div class="container py-20">
            <div>
                <h1 class="text-3xl md:text-4xl  text-center font-bold mb-10">Functionalities TaskFocus have?</h1>
            </div>
            <div class=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div  class="box align-middle">
                        <svg viewBox="-2 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>timer</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-521.000000, -362.000000)" fill="#829af0"> <path d="M534,382 C532.343,382 531,380.657 531,379 C531,377.695 531.838,376.597 533,376.184 L533,371 C533,370.448 533.447,370 534,370 C534.553,370 535,370.448 535,371 L535,376.184 C536.162,376.597 537,377.695 537,379 C537,380.657 535.657,382 534,382 L534,382 Z M534.99,366.05 L535,364 L539,364 C539.553,364 540,363.553 540,363 C540,362.447 539.553,362 539,362 L529,362 C528.447,362 528,362.447 528,363 C528,363.553 528.447,364 529,364 L533,364 L533,366 L533.01,366.05 C526.295,366.558 521,372.154 521,379 C521,386.18 526.82,392 534,392 C541.18,392 547,386.18 547,379 C547,372.154 541.705,366.558 534.99,366.05 L534.99,366.05 Z" id="timer" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Timer</h3>
                    <p class="leading-relax">This app has a promodor timer for you to manage your time</p>
                </div>
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div  class="box">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.29289 9.29289C3 9.58579 3 10.0572 3 11V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289Z" fill="#f97316"></path> <path opacity="0.4" d="M17.2929 2.29289C17 2.58579 17 3.05719 17 4V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17V4C21 3.05719 21 2.58579 20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289Z" fill="#f97316"></path> <path opacity="0.7" d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" fill="#f97316"></path> <path d="M3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z" fill="#f97316"></path> </g></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Progress</h3>
                    <p class="leading-relax">You can messure your progress through this website</p>
                </div>
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div class="box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="100"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#829af0" stroke-width="2" d="M12,20 L24,20 M12,12 L24,12 M12,4 L24,4 M1,19 L4,22 L9,17 M1,11 L4,14 L9,9 M9,1 L4,6 L1,3"></path> </g></svg>
                      </div>
                    <h3 class="text-xl font-bold py-4">Add Tasks</h3>
                    <p class="leading-relax">You can add task to the task list,aslo u can manage them by deleteing them & marking them as complete</p>
                </div>
                <div class="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
                    <div class="box">
                  <svg fill="#f97316" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="100"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path><path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z"></path><path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z"></path></g></svg>
                    </div>
                    <h3 class="text-xl font-bold py-4">Calender</h3>
                    <p class="leading-relax">You can check your daily task form the calender, once you have add a task it will be displayed in the current date.</p>
                </div>
            </div>
        </div>
    </section>
    <Foot/>
</template>

<script>
import Foot from '../views/Foot.vue'
import btn from "../components/btn.vue";
import Navbar from  "../components/Navbar.vue";
export default {
 
  components: {
    Navbar,
    btn,
    Foot
  }
};
</script>

<style>
.box{
margin-left: 95px;
}
</style>