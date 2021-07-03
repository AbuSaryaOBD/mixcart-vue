<template>
  <FilterButton text="All" @me-clicked="allProducts"/>
  <FilterButton text="Feature" @me-clicked="featureProducts"/>
  <FilterButton text="Offer" @me-clicked="offersProducts"/>
  <FilterButton text="Most Sell" @me-clicked="mostSellProducts"/>
</template>

<script>
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "ProductFilter",
  components:{
    FilterButton,
  },
  data(){
    return {
      products: []
    }
  },
  methods:{
    allProducts(){
      this.fetchProducts()
    },
    featureProducts(){
      this.fetchProducts('is_featured=true')
    },
    offersProducts(){
      this.fetchProducts('offersOnly=true')
    },
    mostSellProducts(){
      this.fetchProducts('order_by_sell_count=true')
    },
    async fetchProducts(qryParams){
      let url = 'https://mixcart.com.tr/api/material'
      if(qryParams != null) url += `?${qryParams}`
      const res = await fetch(url)
      const data = await res.json()
      this.products = data['data']
      console.log(this.products.length)
    },
  }
};
</script>
