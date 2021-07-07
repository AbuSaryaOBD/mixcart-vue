<template>
  <div class="text-center mt-2">
    <FilterButton
      v-for="button in buttons" :key="button.id"
      :text="button.text"
      :active="active == button.id" 
      @active-me="activeButton(button.id, button.filter)" 
    />
    
    <SearchField @search-term="searchTerm"/>
  </div>
</template>

<script>
import _ from 'lodash'
import FilterButton from "./widgets/FilterButton.vue";
import SearchField from "./widgets/SearchField.vue";

export default {
  name: "ProductFilter",
  components: {
    FilterButton,
    SearchField,
  },
  emits: ["new-params"],
  data() {
    return {
      buttons:{
        all:{ id: 'all', text: 'الكل', filter: ''},
        feature:{ id: 'feature', text: 'مميز', filter: 'is_featured'},
        offer:{ id: 'offer', text: 'العروض', filter: 'offersOnly'},
        sell:{ id: 'sell', text: 'الأكثر مبيعاً', filter: 'order_by_sell_count'},
      },
      active: 'all',
      params: {
        filter: '',
        term: '',
      },
    };
  },
  methods: {
    activeButton: _.throttle(function(key, filter) {
      this.active = key
      this.params.filter = filter
      this.newParams()
    }, 1000),
    searchTerm(term) {
      this.params.term = term
      this.newParams()
    },
    newParams(){
      this.$emit('new-params', this.params)
    }
  },
};
</script>
