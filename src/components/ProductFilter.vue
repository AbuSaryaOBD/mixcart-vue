<template>
  <FilterButton text="All" @me-clicked="allProducts" :active="active['all']"/>
  <FilterButton text="Feature" @me-clicked="featureProducts" :active="active['feature']"/>
  <FilterButton text="Offer" @me-clicked="offersProducts" :active="active['offer']"/>
  <FilterButton text="Most Sell" @me-clicked="mostSellProducts" :active="active['sell']"/>
</template>

<script>
import FilterButton from "@/components/FilterButton.vue";

export default {
  name: "ProductFilter",
  components: {
    FilterButton,
  },
  data() {
    return {
      products: [],
      active:{
        'all': true,
        'feature': false,
        'offer': false,
        'sell': false,
      },
    };
  },
  methods: {
    allProducts() {
      this.setActive('all')
      this.fetchProducts();
    },
    featureProducts() {
      this.setActive('feature')
      this.fetchProducts("is_featured=true");
    },
    offersProducts() {
      this.setActive('offer')
      this.fetchProducts("offersOnly=true");
    },
    mostSellProducts() {
      this.setActive('sell')
      this.fetchProducts("order_by_sell_count=true");
    },
    setActive(key){
      Object.keys(this.active).forEach(v => this.active[v] = false)
      this.active[key] = true
    },
    async fetchProducts(qryParams) {
      let url = "https://mixcart.com.tr/api/material";
      if (qryParams != null) url += `?${qryParams}`;
      const res = await fetch(url);
      const data = await res.json();
      this.products = data["data"];
      console.log(this.products.length);
    },
  },
};
</script>
