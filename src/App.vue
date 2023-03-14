<template>
  <!-- Navbar -->
  <nav class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a to="/" href="#" class="flex items-center">
        <img src="https://pbjisurabaya.or.id/images/logo/pbji.png" class="h-0 mr-3 sm:h-9" alt="PBJI Logo" />
        <span class="self-center text-xl font-bold whitespace-nowrap ">PBJI-DIY</span>
      </a>
      <div class="flex items-center md:order-2 text-white">
        <button class="bg-[#eb1728] py-2 px-6 rounded-[8px] text-sm hover:scale-105 transition-all duration-300">
          <a class="text-white" target="_blank" href="https://www.instagram.com/arifsetia_one/?hl=id">Masuk</a>
        </button>
      </div>
      <div class="items-center justify-center flex hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
          <li class="font-semibold hover:text-[#eb1728]" v-for="menu in menuNavbar" :key="menu.title" @click="onRouteClick(menu)">{{ menu.title }}</li>
          <!-- <RouterLink class="font-semibold hover:text-[#eb1728]" to="/">Home</RouterLink>
          <RouterLink class="font-semibold hover:text-[#eb1728]" to="/profil">Profil</RouterLink>
          <RouterLink class="font-semibold hover:text-[#eb1728]" to="/Info">Informasi PBJI</RouterLink>
          <RouterLink class="font-semibold hover:text-[#eb1728]" to="/Berita">Berita</RouterLink>
          <RouterLink class="font-semibold hover:text-[#eb1728]" to="/Event">Event</RouterLink> -->
        </ul>
      </div>
    </div>
  </nav>
  <!-- End of Navbar -->
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";


const $router = useRouter()

const menuNavbar = [
  { title: 'Home', route: { name: 'home' } },
  { title: 'Profile', route: { name: 'profile' } },
  { title: 'Info', route: { name: 'info' } },
  { title: 'Berita', route: { name: 'berita' } },
  { title: 'Event', route: { name: 'event' } }
]


const onRouteClick = (menu) => {
  if (menu.route) {
    $router.push(menu.route)
  } else if (menu.callback) {
    menu.callback()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FF0066;
}
</style>