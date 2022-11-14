<template>
    <header class="hidden md:block bg-tal-blue-200">
        <div class="lg:container mx-auto px-4 py-2 tal-text">
            <div class="lg:flex">
                <div class="hidden lg:block relative w-[180px] mr-5">
                    <button class="bg-tal-black-100 text-white rounded-t-sm w-full p-1">
                        Shop by department
                    </button>
                    <div class="absolute flex">
                        <ul class="bg-white w-[180px] shadow pt-2">
                            <li v-for="dep in titles" :key="dep" 
                                @mouseover="showDepSideNav=true; department=dep;"
                                @mouseleave="showDepSideNav=false"
                                class="px-2 hover:bg-tal-blue-200 hover:text-white">
                                    <a @click.prevent href="#">{{ dep }}</a></li>
                                <img src="/daily_deals.webp" alt="">
                        </ul>
                        <div v-show="showDepSideNav">
                            <shop-by-dep-side-nav :title="department" :meta="departments.department"
                                :subDeps="subDeps" :featuredStores="featuredStores"></shop-by-dep-side-nav>
                        </div>
                    </div>                             
                </div>

                <div class="grow">
                    <div class="flex items-center mb-3">
                        <div class="lg:hidden mr-3"><font-awesome-icon icon="fa-bars" /></div>
                        <div class="flex grow">
                            <input class="grow focus:outline-none p-1 rounded-tl-sm rounded-bl-sm" type="text" placeholder="Search for products, brands...">
                            <select class="w-[180px] focus:outline-none rounded-tr-sm rounded-br-sm" name="" id="" placeholder="All">All Departments</select>
                            <button class="w-[40px] flex justify-center items-center"><font-awesome-icon icon="fa-magnifying-glass" /></button> 
                        </div>        
                    </div>
                    <div>
                        <ul class="flex justify-between rounded-sm border-r bg-tal-gray-100 text-[11px] py-[4px]">
                            <li class="px-2"><a @click.prevent href="#">ALOT for less</a></li>
                            <li class="px-2"><a @click.prevent href="#">Celebrate The Game</a></li>
                            <li class="px-2"><a @click.prevent href="#">Summer Sorted</a></li>
                            <li class="px-2"><a @click.prevent href="#">Takealot Tuesday</a></li>
                            <li class="px-2"><a @click.prevent href="#">Christmas</a></li>
                            <li class="px-2"><a @click.prevent href="#">Deals & Promotions</a></li>
                            <li class="px-2"><a @click.prevent href="#">Brands Store</a></li>
                            <li class="px-2"><a @click.prevent href="#">Clearance</a></li>
                        </ul>
                    </div>                
                </div>
            </div>

        </div>
    </header>
    <div class="bg-white h-hero">
        <div class="lg:container mx-auto md:px-4 py-2">
            <div class="lg:flex">
                <div class="hidden lg:block w-[180px] mr-5">
                    hello
                </div>
                <div class="lg:flex grow">
                    <div class="grow">
                        <div class="w-full overflow-hidden lg:pr-3">
                        <img  src="/heroe_img_2.jpeg" alt="" srcset="">
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <p class="w-[150px] h-[53px] flex justify-center items-center rounded-sm bg-tal-blue-200 text-white px-1">
                            <span>Where's my order ?</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ShopByDepSideNav from './ShopByDepSideNav.vue'
import { departments, subDeps, featuredStores } from '../../data/departments.js'

export default {
    components: {
        ShopByDepSideNav
    },
    data(){
        return {
            showDepSideNav: false,
            titles: Object.keys(departments),
            departments: departments,
            department: '',
            subDeps,
            featuredStores
        }
    },
}
</script>