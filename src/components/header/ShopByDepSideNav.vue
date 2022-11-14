<template>
    <div class="grid grid-cols-deps border shadow ">
        <div class="w-[180px] bg-tal-gray-100 pl-2 pt-2">
            <h4 class="text-tal-blue-200">
                {{ title }}
            </h4>
            <ul>
                <li v-for="(subDep, index) in subDeps" :key="index">{{subDep}}</li>
            </ul>
        </div>
        <div class="w-[180px] bg-white pl-2 pt-2">
            <h4>Featured Stores</h4>
            <ul>
                <li v-for="(fstore, index) in featuredStores" :key="index">{{fstore}}</li>
            </ul>
        </div>
        <div class="w-[180px] "><img src="/shop_by_dep.webp" alt="" srcset=""></div>
    </div>
</template>


<script>
    export default {
        props: ['title', 'meta', 'subDeps', 'featuredStores']
    }
</script>