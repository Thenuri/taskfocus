<template>
    <div>
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
            <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                Login Now
            </div>
            <div class="mt-4 self-center text-xl sm:text-sm sm:text-center text-gray-800">
                Enter your credentials to get access account
            </div>
            <div class="mt-10">
                <form action="#">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="mb-1 text-xs tracking-wide text-gray-600">E-Mail
                            Address:</label>
                        <div class="relative">
                            <div
                                class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                <i class="fas fa-at text-orange-500"></i>
                            </div>
                            <input id="email" type="email" name="email" v-model="email" 
                                class="  text-sm  placeholder-gray-500  pl-10  pr-4  text-gray-600 rounded-2xl  border border-gray-400  w-full   py-2  focus:outline-none focus:border-orange-400 "
                                placeholder="Enter your email" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                        <div class="relative">
                            <div
                                class="  inline-flex  items-center  justify-center  absolute  left-0  top-0  h-full  w-10  text-gray-400">
                                <span>
                                    <i class="fas fa-lock text-orange-500"></i>
                                </span>
                            </div>

                            <input id="password" type="password" name="password" v-model="password"
                                class="text-sm  placeholder-gray-500  pl-10  pr-4  text-gray-600  rounded-2xl   border border-gray-400   w-full  py-2 focus:outline-none focus:border-orange-400  "
                                placeholder="Enter your password" />
                        </div>
                    </div>
                    <p v-if="errMsg" class="text-red-800 text-center">{{errMsg}}</p>

                    <div class="flex w-full">
                        <button   @click="login"
                            class="  flex  mt-2   items-center  justify-center  focus:outline-none  text-white text-sm  sm:text-base  bg-orange-500 hover:bg-orange-600  rounded-2xl  py-2  w-full transition  duration-150  ease-in ">
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
            <a href="#" target="_blank" class="inline-flex items-center text-gray-700  font-medium  text-xs text-center">
                <span class="ml-2">You have an account?
                    <a href="#" class="text-xs ml-2 text-orange-500 font-semibold">Login here</a></span>
            </a>
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

