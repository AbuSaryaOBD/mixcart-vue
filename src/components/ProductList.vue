<template>
  <div class="container mx-auto">
      <div class="flex flex-wrap mb-4 relative justify-center">
        <FetchingIndicator v-if="fetching"/>
        <ProductCard
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
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import FetchingIndicator from "@/components/FetchingIndicator";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    FetchingIndicator,
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
  emits:['fetch-new'],
  methods:{
    visibilityChanged (isVisible, entry) {
      if(!isVisible) { return }
      this.$emit('fetch-new')
    }
  }
};
</script>
