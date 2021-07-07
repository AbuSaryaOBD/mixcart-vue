<template>
  <div class="flex flex-wrap relative justify-center w-11/12 mx-auto">
    <OverlayFetching v-if="fetching=='filter'" />
    <BottomIndicator v-if="fetching=='new'" />
    
    <EmptyList v-if="products.length == 0 && !fetching" />
    <ProductCard
      v-else
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div 
    v-if="products.length" 
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 300,
    }"
  ></div>
</template>

<script>
import ProductCard from "@/components/ProductList/ProductCard";
import EmptyList from "@/components/ProductList/EmptyList";
import OverlayFetching from "@/components/Widgets/Indicators/OverlayFetching";
import BottomIndicator from "@/components/Widgets/Indicators/BottomIndicator";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    EmptyList,
    OverlayFetching,
    BottomIndicator,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    fetching: {
      type: String,
      required: true,
    },
  },
  emits: ['get-new-products'],
  methods:{
    visibilityChanged(isVisible){
      if(!isVisible) { return }
      if(this.products.length < 10) { return }
      this.$emit('get-new-products')
    }
  }
};
</script>
