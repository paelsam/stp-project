<template>
    <main class="bg-stp-primary">

        <section id="servicios" class="flex flex-col gap-10 h-max p-5 items-center">
            <h2 class="text-3xl font-extrabold">Servicios</h2>
            <div class="container
                                            mx-auto
                                            max-w-5xl
                                            flex
                                            flex-row
                                            gap-5
                                            flex-wrap
                                            items-start
                                            justify-center
                                            md:justify-between
                                            ">
                <Services service-name="Corte de Cabello" service-description="Tenemos una variedad de cortes para tu gusto"
                    image-filename="cuts.jpg" />
                <Services service-name="Lavado de cabello"
                    service-description="Ofrecemos un lavado de cabello personalizado"
                    image-filename="lavar-cabello.jpeg" />
                <Services service-name="Tratamientos para cabello"
                    service-description="Contamos con una amplia variedad para el tratamiento del cabello"
                    image-filename="tratamiento.webp" />
            </div>
        </section>

        <section id="nosotros" class="flex flex-col gap-10 md:gap-8 h-max p-5 items-center">
            <h2 class="text-3xl font-extrabold">Nosotros</h2>
            <div class="flex flex-col items-center md:justify-center md:flex-row gap-10 text-justify">
                <img class="w-48 h-48 rounded-full border-2 border-black" src="../assets/img/img1.jpg" alt="Peluquería">
                <p class=" md:w-2/5 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iure qui suscipit itaque officia
                    accusantium. Optio quasi recusandae accusamus veritatis. Aperiam, omnis officiis! Sapiente repudiandae
                    minus quasi porro rem assumenda.
                </p>
            </div>
        </section>

        <section id="redes-sociales" class="flex flex-col gap-10 p-5 items-center">
            <h2 id="locacion" class="text-3xl font-extrabold">Locación</h2>
            <div class="border-2 border-black">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037862.1002229203!2d-77.80840721686535!3d3.9793413762329117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a9b0fa3a1703%3A0x4364b39bbf91e45d!2sLa%20%C3%89poca%20Barber%20Shop!5e0!3m2!1sen!2sco!4v1684543689726!5m2!1sen!2sco"
                    class="w-80 h-64" style="border: 0;" allowfullscreen="true" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
import Services from './Services.vue';


</script>