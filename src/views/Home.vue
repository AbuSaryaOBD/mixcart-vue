<template>
  <ProductFilter
    @product-fetched="refreshList"
    @product-fetching="setFetching"
    :offset="newOffset"
  />
  <ProductList 
    :products="products" :fetching="fetching" 
    @get-new-products="getNewProduct"
  />
</template>

<script>
// @ is an alias to /src
import ProductFilter from "@/components/ProductList/ProductFilter.vue";
import ProductList from "@/components/ProductList/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductFilter,
    ProductList,
  },
  data() {
    return {
      products: [],
      fetching: 'filter',
      newOffset: 0,
    };
  },
  methods: {
    refreshList(productsList) {
      this.fetching = '';
      if (this.newOffset > 0) {
        this.products.push(...productsList);
        this.newOffset = 0;
      } else {
        this.products = productsList;
      }
    },
    setFetching() {
      if (this.newOffset > 0) {
        this.fetching = 'new';
      } else {
        this.fetching = 'filter';
      }
    },
    getNewProduct(){
      if(this.products.length > this.newOffset)
        this.newOffset = this.products.length
    }
  },
};
</script>
