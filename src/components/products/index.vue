<template>
    <div class="lg:container mx-auto md:px-4 px-2 py-2">
        <div class="hidden lg:flex">
            <div class="grow relative" style="width:calc(100% - 180px);margin:20px auto;">
                <Carousel :items-to-show="2.5" :wrap-around="false">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="carousel__item">
                            <product-card></product-card>          
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>

            <div class="hidden lg:block w-[180px]"> </div>

        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:hidden px-2 md:px-4 gap-2">
            <router-link to="/product">
                <product-card></product-card>          
            </router-link>
            <product-card></product-card>          
            <product-card></product-card>          
            <product-card></product-card>          
        </div>
    </div>
</template>


<script>
import 'vue3-carousel/dist/carousel.css'
import ProductCard from './ProductCard.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

export default {
    components: {
        ProductCard,
        Carousel,
        Slide,
        Navigation,
    },
    data(){
        return {
           
        }
    }
}

</script>