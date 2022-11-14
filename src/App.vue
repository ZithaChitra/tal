
<template>
  <div class="mb-5">
    <comp-header></comp-header>
  </div>
  <div class="mb-10">
    <products></products>
  </div>
</template>

<script >
import Products from './components/products/index.vue'

export default {
  components:{
    Products
  }
}
</script>