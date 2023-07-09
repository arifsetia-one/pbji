<template>
    <!-- form login -->
    <section>
        <div class="flex items-center justify-center min-h-screen bg-gray-100 pr-4 pl-4">
            <div class="px-10 py-8 text-left bg-white shadow-lg">
                <h3 class="text-2xl mt-4 font-bold text-center">Masuk ke Akun Atlet</h3>
                <form action="">
                    <div class="mt-4 sm:w-96">
                        <div>
                            <label class="block" for="email">Username</label>
                            <input type="text" id="username" placeholder="Username"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600">
                        </div>
                        <div class="mt-4">
                            <label class="block">Password</label>
                            <input type="password" id="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600">
                        </div>
                        <div class="flex items-start mb-2 mt-4">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingat
                                saya</label>
                        </div>
                        <a href="" id="loginAdmin"
                            class="flex justify-center text-sm mt-4 font-medium text-red-600 hover:underline">Login
                            sebagai admin</a>
                        <div class="flex items-baseline justify-between">
                            <button class="w-full px-6 py-2  mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900"
                                id="login">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>