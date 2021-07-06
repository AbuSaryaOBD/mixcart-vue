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
        feature:{ id: 'feature', text: 'مميز', param: 'is_featured=true'},
        offer:{ id: 'offer', text: 'العروض', param: 'offersOnly=true'},
        sell:{ id: 'sell', text: 'الأكثر مبيعاً', param: 'order_by_sell_count=true'},
      },
      filterParam: '',
    };
  },
  methods: {
    activeButton(key, param){
      this.active = key
      this.filterParam = param
      this.fetchProducts(this.filterParam)
    },
    searchProducts(term) {
      if(term != '')
        this.fetchProducts(`${this.filterParam}&name=%${term}%`);
      else
        this.fetchProducts(this.filterParam);
    },
    async fetchProducts(qryParams) {
      this.$emit("product-fetching");
      let url = process.env.VUE_APP_API_URL;
      if (qryParams != null) url += `?${qryParams}`;
      console.log(url);
      axios.get(url)
        .then(res => {
          this.$emit("product-fetched", res.data.data)
        })
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
