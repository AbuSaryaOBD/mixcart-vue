<template>
  <div class="w-11/12 mx-auto relative">
    <OverlayFetching v-if="status == 'loading'" />
    <BottomIndicator v-if="status == 'loading-more'" />
    <EmptyList v-if="products.length == 0 && status == 'loaded'"/>

    <div v-if="products.length > 0"  class="flex flex-wrap justify-center">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <div 
        v-if="products.length" 
        v-observe-visibility="loadMore"
      ></div>
    </div>
    <EndOfList v-if="completed && products.length > 0" />
  </div>
</template>

<script>
import OverlayFetching from "@/components/Widgets/Indicators/OverlayFetching";
import BottomIndicator from "@/components/Widgets/Indicators/BottomIndicator";
import EmptyList from "./widgets/EmptyList"
import ProductCard from "./widgets/ProductCard"
import EndOfList from "./widgets/EndOfList"
import methodMixin from "./mixins/ProductListMethod"

export default {
  name: "ProductList",
  components: {
    OverlayFetching,
    BottomIndicator,
    EmptyList,
    ProductCard,
    EndOfList,
  },
  props: {
    params:{
      type: Object,
      required: true
    }
  },
  data(){
    return {
      products: [],
      status: 'loading',
      completed: false,
    }
  },
  mixins: [methodMixin],
  created(){
    this.fetchProducts(false)
  },
  watch:{
    params: {
      deep: true,
      handler: function () {
        this.completed = false
        this.fetchProducts(false)
      }
    }
  }
};
</script>
