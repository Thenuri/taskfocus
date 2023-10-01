<template>
    <div>
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-2xl w-50 max-w-md">
            <div class="font-bold self-center text-3xl sm:text-3xl text-color-primary">
                Login Now
            </div>
            <div class="mt-4  self-center text-base sm:text-xs sm:text-center text-color-primary-light">
                Enter your credentials to get access to your account
            </div>
            <div class="mt-10">
                <form action="#">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="mb-1 text-sm tracking-wide text-color-primary-dark font-medium">E-Mail
                            Address:</label>
                        <div class="relative">
                            <div
                                class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                <i class="fas fa-at text-orange-500"></i>
                            </div>
                            <input id="email" type="email" name="email" v-model="email" 
                                class="  text-sm  placeholder-gray-500  pl-5  pr-4  text-gray-600 rounded-xl  border border-gray-400  w-full   py-2  focus:outline-none focus:border-orange-400 "
                                placeholder="Enter your email" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password" class="mb-1 text-sm sm:text-sm tracking-wide text-color-primary-dark font-medium">Password:</label>
                        <div class="relative">
                            <div
                                class="  inline-flex  items-center  justify-center  absolute  left-0  top-0  h-full  w-10  text-gray-400">
                                <span>
                                    <i class="fas fa-lock text-orange-500"></i>
                                </span>
                            </div>

                            <input id="password" type="password" name="password" v-model="password"
                                class="text-sm  placeholder-gray-500  pl-5  pr-4  text-gray-600  rounded-xl   border border-gray-400   w-full  py-2 focus:outline-none focus:border-orange-400  "
                                placeholder="Enter your password" />
                        </div>
                    </div>
                    <p v-if="errMsg" class="text-red-800 text-center">{{errMsg}}</p>

                    <div class="flex w-full">
                        <button   @click="login"
                            class="  flex  mt-2   items-center  justify-center  focus:outline-none  text-white text-sm  sm:text-base  bg-orange-500 hover:bg-orange-600  rounded-xl  py-2  w-full transition  duration-150  ease-in ">
                            <span class="mr-2 uppercase">Sign In</span>
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex justify-center items-center mt-6">
            <router-link to="#" target="_blank" class="inline-flex items-center  font-medium  text-xs text-center">
                <span class="ml-2">Don't have an account?
                    <router-link to="/signup" class="text-xs ml-2 text-orange-500 font-semibold">Signup here</router-link></span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'vue-router'
const email = ref("")
const password = ref("")
const errMsg = ref()
const router = useRouter()
const login =(event)=>{
    event.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!");
        console.log(auth.currentUser)
        router.push("/Dashboard");
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email address format.";
                break;
            case "auth/wrong-password":
                errMsg.value = "Wrong password.";
                break;
            case "auth/user-not-found":
                errMsg.value = "User not found.";
                break;
            default:
                errMsg.value = "Email or password was incorrect.";
                break;
        }
    });
}


</script>

