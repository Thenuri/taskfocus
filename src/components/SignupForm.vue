<template>
    <div>
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-2xl w-50 max-w-md">
            <div class="font-bold self-center text-xl sm:text-3xl text-color-primary">
                Signup Now
            </div>
            <div class="mt-4 font-semibold self-center text-base sm:text-sm text-color-primary-light">
                Enter your credentials to get access account
            </div>
            <div class="mt-10">
                <form action="#">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="mb-1 text-xs tracking-wide text-color-primary-dark font-medium">E-Mail
                            Address:</label>
                        <div class="relative">
                            <div
                                class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                <i class="fas fa-at text-orange-500"></i>
                            </div>
                            <input id="email" type="email" name="email"
                                class="  text-sm  placeholder-gray-500  pl-10  pr-4  rounded-xl  border border-gray-400 text-gray-600 w-full   py-2  focus:outline-none focus:border-orange-400 "
                                placeholder="Enter your email" required v-model="email" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password" class="mb-1 text-xs  tracking-wide text-color-primary-dark font-medium">Password:</label>
                        <div class="relative">
                            <div
                                class="  inline-flex  items-center  justify-center  absolute  left-0  top-0  h-full  w-10  text-gray-400">
                                <span>
                                    <i class="fas fa-lock text-orange-500"></i>
                                </span>
                            </div>

                            <input id="password" type="password" name="password"
                                class="text-sm  placeholder-gray-500  pl-10  pr-4   rounded-xl   border border-gray-400 text-gray-600  w-full  py-2 focus:outline-none focus:border-orange-400"
                                placeholder="Enter your password" v-model="password" />
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button @click="register"
                            class="  flex  mt-2   items-center  justify-center  focus:outline-none  text-white text-sm  sm:text-base  bg-orange-500 hover:bg-orange-600  rounded-xl  py-2  w-full transition  duration-150  ease-in ">
                            <span class="mr-2 uppercase">Sign Up</span>
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div>
                        <p class="text-center mt-4  text-color-primary-dark font-medium">
                            Or
                        </p>
                    </div>
                    <div class="mt-3">
                        <button @click="signInWithGoogle"
                            class=" text-gray-600 flex flex-wrap justify-center w-full border border-gray-400 hover:border-gray-500 px-2 py-1.5 rounded-xl">
                            <img class="w-5 mr-2"
                                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA">
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex justify-center items-center mt-6">
            <router-link to="#" target="_blank" class="inline-flex items-center  font-medium  text-xs text-center">
                <span class="ml-2">Have an account?
                    <router-link to="/login" class="text-xs ml-2 text-orange-500 font-semibold">Login here</router-link></span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter()
const register = (event) => {
    event.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!");
            console.log(auth.currentUser)
            router.push("/Dashboard");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });

};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider)
    .then((result) => {
        console.log(result.user);
        router.push("/Dashboard");
    }).catch((error) => {
        console.log(error.message);
    });

};

</script>

