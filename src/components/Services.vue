<template>
    <div class="grid
                                    gap-4
                                    justify-items-center
                                    text-center
                                    md:flex-1
                                    ">
        <div>
            <img :src="getImageUrl()" :alt="serviceDescription" class="w-48 h-48 rounded-full border-2 border-black">
        </div>
        <h3 class="text-xl font-bold">{{ serviceName }}</h3>
        <p>{{ serviceDescription }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    serviceName: String,
    serviceDescription: String,
    imageFilename: String
})

function getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/img/${props.imageFilename}`, import.meta.url)
}

</script>