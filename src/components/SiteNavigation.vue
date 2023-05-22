<template>
    <header class=" h-16 md:h-20 flex flex-row justify-center bg-stp-secondary border-y-2 border-black">
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <RouterLink :to="{ name: 'inicio' }">
                <div class="flex items-center gap-1 flex-1">
                    <i class="fa-solid fa-scissors text-2xl"></i>
                    <p class="text-2xl font-bold">Barber Shop</p>
                </div>
            </RouterLink>
            <div
                :class="[navLinks, 'md:static', 'absolute bg-stp-secondary',  'md:min-h-fit',  'min-h-[60vh]', 'left-0', 'top-[-100%]', 'md:w-auto', 'w-full', 'flex', 'items-center', 'px-5', 'z-50']">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li><a class="font-bold hover:text-stp-primary" href="/">Inicio</a></li>
                    <li><a class="font-bold hover:text-stp-primary" href="/#servicios">Servicios</a></li>
                    <li><a class="font-bold hover:text-stp-primary" href="/#nosotros">Nosotros</a></li>
                    <li><a class="font-bold hover:text-stp-primary" href="/#locacion">Locación</a></li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <RouterLink :to="{ name: 'login' }">
                    
                    <button class="bg-stp-primary font-bold px-5 py-2 rounded-full border-2 border-black hover:bg-stp-primary-opacity drop-shadow-lg">Acceder</button>
                </RouterLink>
                <i @click="changeIcon" :class="[icon, 'fa-solid', 'text-3xl', 'cursor-pointer', 'md:hidden']"></i>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";


let icon = ref('fa-bars');
let navLinks = '';

function changeIcon() {
    icon.value = icon.value === 'fa-bars' ? 'fa-xmark' : 'fa-bars';
    navLinks = icon.value === 'fa-xmark' ? 'top-[8%] sm:top-[10%] md:top-[10%]' : '';
}

</script>