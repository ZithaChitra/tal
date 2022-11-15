<template>
    <div class="lg:container mx-auto md:px-4 px-2 py-2">
        <div class="lg:flex">
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

            <div class="hidden lg:block w-[180px]"> me too </div>

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