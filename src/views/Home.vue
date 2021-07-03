<template>
  <ProductFilter @product-fetched="refreshList" @product-fetching="setFetching"/>
  <ProductList :products="products" :fetching="fetching"/>
</template>

<script>
// @ is an alias to /src
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductFilter,
    ProductList,
  },
  data(){
    return {
      products:[],
      fetching: false,
    }
  },
  methods:{
    refreshList(productsList){
      this.fetching = false
      this.products = productsList
    },
    setFetching(){
      this.fetching = true
    }
  },
};
</script>
