<template>
    <div class="md:mb-5">
        <comp-header></comp-header>
    </div>
    <div class="lg:container mx-auto md:px-4 py-2">
        <div class="lg:grid grid-cols-12 gap-2 items-start">
            <div class="lg:bg-white lg:shadow px-2 mb-2 lg:flex col-span-9">
                <div class="bg-white shadow lg:drop-shadow-none mb-2 lg:mb-0"><img src="/prod.file" alt=""></div>
                <div>
                    <div class="bg-white shadow lg:drop-shadow-none mb-2 lg:mb-0">
                        <h3 class="text-tal-gray-200 text-lg">Big Jim - Toolbox - Tool Organisers - DIY - Standard - Mobile - 70cm</h3>
                        <router-link to="/product">
                            <span class="tal-link-blue text-sm">brand name</span>
                        </router-link>
                        <p class="text-sm text-tal-gray-200"><!--short desc-->
                            Keep Your Workshop And All Your Tools Neatly Organised And
                            Secured with this Hardwearing Toolbox

                            <div>
                                4.6 <span class="tal-link-blue"> <router-link to="#">25 reviews</router-link></span>
                            </div>
                        </p>
                    </div>

                    <div class="bg-white shadow lg:drop-shadow-none">
                        <div class="lg:border-y flex py-3">
                            <h4 class="font-bold mr-3">In Stock</h4> 
                            <span class="inline-block bg-tal-gray-100 rounded p-1 text-sm mr-2">JHB</span>
                            <span class="inline-block bg-tal-gray-100 rounded p-1  text-sm">CPT</span>
                        </div>
                        <div> <!--attributes list-->
                            <ul class="list-disc list-inside text-sm text-tal-gray-200 ">
                                <li>Eligible for next-day delivery or collection.</li>
                                <li>Eligible for Cash on Delivery.</li>
                                <li>Hassle-Free Exchanges & Returns for 30 Days.</li>
                                <li>6-Month Limited Warranty.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block col-span-3 bg-white p-2 shadow">
                <h3 class="font-bold text-4xl"><span>R</span> 264</h3>
            </div>
        </div>
    </div>
</template>

<script>

</script>