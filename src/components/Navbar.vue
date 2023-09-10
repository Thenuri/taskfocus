<template>
  <nav class="container">
    <div class="bg-color-primary text-gray-100 py-3.5  shadow md:flex justify-between items-center">
      <div class="flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#f97316" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="#f97316" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="#f97316" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>
        <a href="/" class="text-3xl font-bold">Task<span class="text-orange-500">Focus</span></a>
      </div>
      <span @click="menuOpen" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
      <ul
        class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-color-primary md:w-auto w-full top-14 duration-700 ease-in z-30"
        :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in links" :key="link.name">
          <a :href="link.link" class="text-xl hover:text-orange-500">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
<script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const open = ref(false);
      const links = [
        {name: 'Dashboard', link: '/Dashboard'},
        { name: 'SignUp', link: '/Signup' },
        { name: 'Login', link: '/Login' },
      ];
  
      function menuOpen() {
        open.value = !open.value;
      }
  
      return {
        links,
        open,
        menuOpen,
      };
    },
  };
</script>
  