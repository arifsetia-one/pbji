<template>
  <div class="home">
    <!-- Personal Info -->

    <div id="controls-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/logo.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src="https://www.rmoljatim.id/uploads/images/2022/08/image_750x_630aeff087039.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.rmoljatim.id/uploads/images/2022/08/image_750x_630aeff087039.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.rmoljatim.id/uploads/images/2022/08/image_750x_630aeff087039.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://www.rmoljatim.id/uploads/images/2022/08/image_750x_630aeff087039.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>



    <!-- Edukasi -->
    <section class="w-full">
      <div class="ml-[10%] mr-[10%] mt-[5%] mb-[6%]">
        <h1 class="font-bold text-2xl text-[#2F333F]">Education</h1>
        <div class="grid grid-cols-1 gap-2 justify-center p-4 md:grid-cols-3 md:gap-6">
          <div>
            <h2 class="font-bold text-[#444853]">SMP N 1 BAMBANGLIPURO</h2>
            <p class="text-base">(Tahun 2013 - 2016)</p>
          </div>
          <div>
            <h2 class="font-bold text-[#444853]">SMK N 1 BANTUL</h2>
            <p class="text-base">(Tahun 2016 - 2019)</p>
          </div>
          <div>
            <h2 class="font-bold text-[#444853]">UNIVERSITAS AMIKOM YOGYAKARTA</h2>
            <p class="text-base">(Tahun 2020 - Sekarang)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Card -->
    <section class="bg-[#F0F0F0]">
      <div class="flex flex-col items-center p-12">
        <h1 class="font-bold md:text-3xl text-2xl text-[#2F333F]">View My Portfolio</h1>
        <p class="font-semibold text-slate-600">Take a look at some of my dummy portfolios.</p>
      </div>
      <div class="grid grid-cols-1 gap-2 justify-center pl-[10%] pr-[10%] pb-[10%] pt-0 md:grid-cols-3 md:gap-6">
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
        <div
          class="max-w-full rounded overflow-hidden shadow-lg bg-white mt-4 justify-end hover:scale-105 transition-all duration-300">
          <img class="w-full" src="https://vocasia.id/blog/wp-content/uploads/2021/12/website-layout-design.jpg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2 text-gray-600">Website Design</h2>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae mollitia cumque! Iure fuga alias hic.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

