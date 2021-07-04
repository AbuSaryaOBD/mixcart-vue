<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-2">
    <img
      class="w-full"
      :src="`https://mixcart.com.tr/storage/${product.images[0].image}`"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
      <div class="text-lg mb-1">{{ product.price.toFixed(2) }}</div>
      <StarRating 
        :rating="product.average_rate"
        :read-only="true" :show-rating="false"
        :star-size="30"
      />
      <div class="text-lg mb-1 overflow-hidden h-8">{{ product.summary }}</div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: "ProductCard",
  components:{
    StarRating
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
