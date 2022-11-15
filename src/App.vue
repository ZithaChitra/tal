
<template>
  <div class="mb-5">
    <comp-header></comp-header>
  </div>
  <div class="mb-10">
    <products></products>
  </div>
  <app-footer></app-footer>
</template>

<script >
import Products from './components/products/index.vue'
import AppFooter from './components/footer/index.vue'

export default {
  components:{
    Products,
    AppFooter
  }
}
</script>