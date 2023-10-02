<template>
    <div class="login">
        <Navbar />
        <section id="Signup">
            <div class="container py-20 relative">
                <div class="flex flex-col items-center justify-between md:flex-row">
                    <div class="mb-12 md:w-1/2">
                        <img src="../assets/web14.png" alt="">
                    </div>
                    <div>
                        <LoginForm/>
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
import LoginForm from "../components/LoginForm.vue";
export default {
    components: {
        Navbar,
        LoginForm,
        Foot
    }
};
</script>