<template>
    <section class="flex flex-col justify-center items-center h-full">
        <div class="image w-1/2 md:h-52 md:w-44 m-10">
            <img src="../assets/img/icon.png" alt="Barber Icon">
        </div>

        <form class="bg-stp-primary pt-6 w-56">
            <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="identificacion">
                    Numero de identificación:
                </label>
                <input
                    class="shadow appearance-none rounded-full border-2 border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="identificacion" type="text" placeholder="Ejem: 111242145 ">
            </div>
            <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="password">
                    Contraseña:
                </label>
                <input
                    class="shadow appearance-none rounded-full border-2 border-black w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> 
                    classes: border border-red-500

                -->
            </div>
            <div class="flex items-center justify-center">
                <RouterLink :to="{ name: 'control-panel'}">
                    <button
                        class="bg-stp-secondary hover:bg-slate-300 font-bold py-2 px-4 rounded-full border-2 border-black focus:outline-none focus:shadow-outline"
                        type="button">
                        Log in
                    </button>
                </RouterLink>
            </div>
        </form>
    </section>
</template>
