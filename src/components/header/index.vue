<template>
    <div class="md:hidden border-b drop-shadow-md bg-white">
        <div class="flex justify-between items-center py-4 px-4">
            <div><font-awesome-icon icon="fa-bars" /></div>
            <a @click.prevent href="/"><img src="/logo.svg" alt="logo"></a>
            <div class="flex">
                <div class="mr-2"><font-awesome-icon icon="fa-magnifying-glass" /></div>
                <div><font-awesome-icon icon="fa-cart-shopping" /></div>
            </div>
        </div>
    </div>
    <div class="hidden md:block bg-tal-gray-100">
        <div class="flex justify-between lg:container mx-auto px-4 py-3 tal-text ">
            <div class="flex items-center">
                <a @click.prevent href="/"><img src="/logo.svg" alt="logo" class="mr-5"></a>
                <ul class="flex">
                    <li class="list-none"><a @click.prevent class="tal-link lg:tal-border-r" href="#"> Help Center</a></li>
                    <li class="list-none hidden lg:block"><a @click.prevent class="tal-link" href="#">Sell on Takealot</a></li>
                </ul>
            </div>
            <div class="flex items-center">
                <ul class="flex">
                    <li><a @click.prevent class="tal-link tal-border-r" href="#">Login</a></li>
                    <li><a @click.prevent class="tal-link tal-border-r" href="#">Register</a></li>
                    <li><a @click.prevent class="tal-link tal-border-r hidden lg:block" href="#">Orders</a></li>
                    <li><a @click.prevent class="tal-link" href="#">My Account</a></li>
                </ul>

                <div class="flex items-center">
                    <a class="h-[32px] w-[32px] rounded-[50%] flex justify-center items-center bg-tal-pink-200 mr-2" href="#"><font-awesome-icon icon="fa-heart" /></a>
                    <button class="h-[32px] w-[54px] rounded-[16px] flex justify-center items-center bg-tal-green-200"><font-awesome-icon icon="fa-cart-shopping" /></button>
                </div>
            </div>
        </div>
    </div>

    <secondary-header></secondary-header>
</template>


<script>
    import SecondaryHeader from './SecondaryHeader.vue'


    export default {
        props: ['showHero'],
        provide(){
            return {
                showHero: this.showHero
            }
        },
        components: {
            SecondaryHeader
        }
    }
</script>
