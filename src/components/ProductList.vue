<template>
    <div 
        class="flex flex-wrap -mb-4"
        v-if="!fetching"
    >
        <ProductCard 
            v-for="product in products" :key="product.id"
            :product="product"
        />
    </div>
    <div v-else>
        <FetchingIndicator />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import FetchingIndicator from '@/components/FetchingIndicator'

export default {
    name: 'ProductList',
    components:{
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
}
</script>