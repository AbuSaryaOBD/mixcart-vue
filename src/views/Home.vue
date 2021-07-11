<template>
  <!-- <ProductFilter @new-params="setParams" />
  <ProductList :params="params" /> -->
  <features-block />
</template>

<script>
// @ is an alias to /src
// import ProductFilter from "@/components/ProductList/ProductFilter.vue";
// import ProductList from "@/components/ProductList/ProductList.vue";
import FeaturesBlock from "@/components/FeaturesBlock/FeaturesBlock.vue";

export default {
  name: "Home",
  components: {
    // ProductFilter,
    // ProductList,
    FeaturesBlock
  },
  data() {
    return {
      // params: {
      //   filter: '',
      //   term: '',
      // },
    };
  },
  methods: {
    // setParams(params){
    //   this.params = params
    // }
  },
};
</script>
