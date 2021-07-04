<template>
  <ProductFilter
    @product-fetched="refreshList"
    @product-fetching="setFetching"
  />
  <ProductList :products="products" :fetching="fetching" @fetch-new="fetchNew"/>
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
  data() {
    return {
      products: [],
      fetching: false,
      fetchStart: 0,
    };
  },
  methods: {
    refreshList(productsList) {
      this.fetching = false;
      if(this.fetchStart === 0)
        this.products = productsList;
      else
        this.products.push(productsList)
    },
    setFetching() {
      this.fetching = true;
    },
    fetchNew(){
      // this.fetchStart += 10
    },
  },
};
</script>
