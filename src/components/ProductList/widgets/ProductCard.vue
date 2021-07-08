<template>
  <router-link :to="{ name: 'ShowProduct', params: { id: product.id }}">
    <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl cursor-pointer m-2 bg-white">
      <img
        class="w-full h-60 bg-gray-400 object-cover"
        :class="animatePulse"
        v-lazy="{src: lazyOptions.src, lifecycle: lazyOptions.lifecycle(disAnimate)}"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 overflow-hidden h-8">{{ product.name }}</div>
        <div class="text-lg mb-1">{{ product.price.toFixed(2) }}</div>
        <StarRating 
          :rating="product.average_rate"
          :read-only="true" :show-rating="false"
          :star-size="30"
        />
        <div class="text-lg mb-1 overflow-hidden h-7">{{ product.summary }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
import StarRating from 'vue-star-rating'
import { reactive } from 'vue'

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
  data(){
    return{
      animatePulse: 'animate-pulse'
    }
  },
  methods:{
    disAnimate(){
      this.animatePulse = ''
    }
  },
  setup(props) {
    const lazyOptions = reactive({
      src: `https://mixcart.com.tr/storage/${props.product.images[0].image}`,
      lifecycle:(animation) => {
        return {
          loaded: () => {
            animation()
          }
        }
      }
    })
    return {
      lazyOptions,
    }
  }
};
</script>

<style>
.sr-only {
  display: none;
}
</style>