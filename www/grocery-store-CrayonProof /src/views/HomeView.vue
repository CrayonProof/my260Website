<template>
<div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home-view',
  components: {
    ProductList
  },
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  },
}
</script>
