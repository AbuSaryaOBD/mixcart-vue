<template>
  <div class="flex flex-wrap relative justify-center w-11/12 mx-auto">
    <Overlay v-if="fetching"/>
    <FetchingIndicator v-if="fetching"/>
    
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <!-- <div 
    v-if="products.length" 
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 300,
    }"
  ></div> -->
</template>

<script>
import ProductCard from "@/components/ProductList/ProductCard";
import FetchingIndicator from "@/components/Widgets/FetchingIndicator";
import Overlay from "@/components/Widgets/Overlay";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    FetchingIndicator,
    Overlay
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    fetching: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
