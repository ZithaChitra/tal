<template>
  <div class="mb-5">
    <comp-header :showRelatedProdNavBar="true"></comp-header>
  </div>
  <div  class="bg-white h-hero">
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
  <div class="mb-10">
    <products></products>
  </div>
  <app-footer></app-footer>
</template>


<script>
import Products from '../components/products/index.vue'
import AppFooter from '../components/footer/index.vue'

export default {
    components: {
        Products,
        AppFooter,
    }
}
</script>