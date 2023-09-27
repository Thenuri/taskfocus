<template>
    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <p class="text-red-500 text-xl font-semibold mb-4">Warning</p>
            <p class="text-gray-700">You can't switch tabs while the timer is running.</p>
            <button @click="closeWarning" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">OK</button>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        closeWarning() {
            this.$emit('close-warning');
        }
    }
};
</script>
  
<style scoped>
/* Add your styling for the warning message here */
</style>
  