<template>
    <div class=" flex flex-col justify-center gap-2 items-center rounded-2xl border-2 border-black shadow bg-stp-secondary w-40 h-40 ">
        <i :class="[serviceIcon, 'text-5xl']"></i>
        <h3 class="text-xl font-semibold text-center" >{{ serviceName }}</h3>
    </div>
</template>

<script setup>
    
    const props = defineProps({
        serviceIcon: String,
        serviceName: String 
    })
</script>
