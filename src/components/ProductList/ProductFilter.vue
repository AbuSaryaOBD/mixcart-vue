<template>
  <div class="text-center mt-2">
    <FilterButton
      v-for="button in buttons" :key="button.id"
      :text="button.text"
      :active="active == button.id" 
      @active-me="activeButton(button.id,button.param)" 
    />
    
    <ProductSearch @search-term="searchProducts"/>
  </div>
</template>

<script>
import FilterButton from "@/components/ProductList/FilterButton.vue";
import ProductSearch from "@/components/ProductList/ProductSearch.vue";

export default {
  name: "ProductFilter",
  components: {
    FilterButton,
    ProductSearch,
  },
  emits: ["product-fetched", "product-fetching"],
  data() {
    return {
      active: 'all',
      buttons:{
        all:{ id: 'all', text: 'الكل', param: ''},
        feature:{ id: 'feature', text: 'مميز', param: 'is_featured'},
        offer:{ id: 'offer', text: 'العروض', param: 'offersOnly'},
        sell:{ id: 'sell', text: 'الأكثر مبيعاً', param: 'order_by_sell_count'},
      },
      filterParam: {},
    };
  },
  methods: {
    activeButton(key, param){
      this.active = key
      this.filterParam = { [param]: 'ture'}
      this.fetchProducts(this.filterParam)
    },
    searchProducts(term) {
      this.filterParam['name'] = term
      this.fetchProducts(this.filterParam);
    },
    async fetchProducts(qryParams) {
      this.$emit("product-fetching");
      // let url = process.env.VUE_APP_API_URL;
      axios.get('/material', { params: qryParams })
        .then(res => {
          this.$emit("product-fetched", res.data.data)
        })
    },
  },
  mounted() {
    this.fetchProducts({});
  },
};
</script>
