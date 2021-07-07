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
  props:{
    offset:{
      type: Number,
      required: true,
    }
  },
  emits: ["product-fetched", "product-fetching"],
  data() {
    return {
      buttons:{
        all:{ id: 'all', text: 'الكل', param: ''},
        feature:{ id: 'feature', text: 'مميز', param: 'is_featured'},
        offer:{ id: 'offer', text: 'العروض', param: 'offersOnly'},
        sell:{ id: 'sell', text: 'الأكثر مبيعاً', param: 'order_by_sell_count'},
      },
      active: 'all',
      filter: '',
      name: '',
    };
  },
  methods: {
    activeButton(key, param){
      this.active = key
      this.filter = param
      this.fetchProducts()
    },
    searchProducts(term) {
      this.name = term
      this.fetchProducts();
    },
    async fetchProducts() {
      this.$emit("product-fetching");
      let qryParams = {
        'offset': this.offset,
        'name': this.name,
      }
      if(this.filter) qryParams[this.filter] = true
      axios.get('/material', { params: qryParams })
        .then(res => {
          let data = res.data.data
          this.$emit("product-fetched", data)
        })
    },
  },
  created() {
    this.fetchProducts({});
  },
  watch:{
    offset(newVal, oldVal){
      if(newVal > oldVal)
        this.fetchProducts()
    }
  },
};
</script>
