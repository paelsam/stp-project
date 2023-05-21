<template>
    <SiteNavigation />
    <div class="flex flex-col items-center justify-center h-full">
        <div class="my-4 text-center">
            <h1 class="font-bold text-2xl">Bienvenido USER</h1>
            <p class="font-semibold text-lg">¿Qué deseas hacer?</p>
        </div>
        <div class="flex flex-row justify-center flex-wrap gap-2 px-10 w-full">
            <IconOption service-icon="fa-solid fa-scissors" service-name="Asignar Cita" />
            <IconOption service-icon="fa-solid fa-x" service-name="Cancelar Cita" />
            <IconOption service-icon="fa-solid fa-calendar" service-name="Horarios" />
        </div>
    </div>
    <Footer />
    
</template>

<script setup>
    import Footer from '../components/Footer.vue';
    import SiteNavigation from '../components/SiteNavigation.vue';
    import IconOption from '../components/IconOption.vue';

</script>

