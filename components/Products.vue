<template>
  <div>
    <h1>Products</h1>
    <products-table/>
    <router-view/>
  </div>
</template>
<script>
import ProductsTable from './ProductsTable.vue'

export default {
  components: { ProductsTable },
}
</script>