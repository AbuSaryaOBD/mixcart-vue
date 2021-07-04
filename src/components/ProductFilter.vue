<template>
  <div class="text-center mt-2">
    <FilterButton text="All" @me-clicked="allProducts" :active="active['all']" />
    <FilterButton
      text="Feature"
      @me-clicked="featureProducts"
      :active="active['feature']"
    />
    <FilterButton
      text="Offer"
      @me-clicked="offersProducts"
      :active="active['offer']"
    />
    <FilterButton
      text="Most Sell"
      @me-clicked="mostSellProducts"
      :active="active['sell']"
    />
    <ProductSearch @search-term="searchProducts"/>
  </div>
</template>

<script>
import FilterButton from "@/components/FilterButton.vue";
import ProductSearch from "@/components/ProductSearch.vue";

export default {
  name: "ProductFilter",
  components: {
    FilterButton,
    ProductSearch,
  },
  emits: ["product-fetched", "product-fetching"],
  data() {
    return {
      active: {
        all: true,
        feature: false,
        offer: false,
        sell: false,
      },
    };
  },
  methods: {
    allProducts() {
      this.setActive("all");
      this.fetchProducts();
    },
    featureProducts() {
      this.setActive("feature");
      this.fetchProducts("is_featured=true");
    },
    offersProducts() {
      this.setActive("offer");
      this.fetchProducts("offersOnly=true");
    },
    mostSellProducts() {
      this.setActive("sell");
      this.fetchProducts("order_by_sell_count=true");
    },
    searchProducts(term) {
      this.setActive("all");
      console.log(term)
      if(term != '')
        this.fetchProducts(`name=%${term}%`);
      else
        this.fetchProducts();
    },
    setActive(key) {
      Object.keys(this.active).forEach((v) => (this.active[v] = false));
      this.active[key] = true;
    },
    async fetchProducts(qryParams) {
      this.$emit("product-fetching");
      let url = "https://mixcart.com.tr/api/material";
      if (qryParams != null) url += `?${qryParams}`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      this.$emit("product-fetched", data["data"]);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
