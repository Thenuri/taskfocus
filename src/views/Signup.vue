<template>
    <div class="signup">
        <Navbar />
        <section id="Signup">
            <!-- <div class="w-80 h-80 bg-purple-500 absolute top-0 -left-5 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div>
            <div class="w-80 h-80 bg-color-secondary absolute bottom-5 right-0 -z-20 blur-2xl opacity-20 overflow-hidden rounded-full"></div> -->
            <div class="container py-20 relative">
                <div class="flex flex-col items-center justify-between md:flex-row">
                    <div class="mb-12 md:w-1/2">
                        <img src="../assets/web13.png" alt="">
                    </div>
                    <div>
                        <SignupForm/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Foot/>
</template>

<script>
import Foot from '../views/Foot.vue'
import Navbar from "../components/Navbar.vue";
import SignupForm from "../components/SignupForm.vue";
export default {
    components: {
        Navbar,
        SignupForm,
        Foot
    }
};
</script>