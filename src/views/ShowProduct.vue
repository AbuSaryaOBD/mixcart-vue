<template>
  <div class="container mx-auto">
    <FetchingIndicator v-if="!product" />
    <div v-else>
      <ProductImages :images="product.images" />
      <br>
      <ProductMeta :meta="product"  />
      <br>
      <SimilarProducts :similarProducts="product.likeMaterials" />
    </div>
  </div>
</template>

<script>
import ProductImages from '@/components/ShowProduct/ProductImages'
import ProductMeta from '@/components/ShowProduct/ProductMeta'
import SimilarProducts from '@/components/ShowProduct/SimilarProducts'
import FetchingIndicator from '@/components/Widgets/FetchingIndicator'

export default {
  name: "ShowProduct",
  components:{
    ProductImages,
    ProductMeta,
    SimilarProducts,
    FetchingIndicator,
  },
  data(){
      return {
          id: this.$route.params.id,
          product: null,
      }
  },
  methods:{
    fetchProduct(id){
      axios.get(`/material/${id}`)
        .then(res => {
          this.product = res.data.data
        })
    }
  },
  watch: {
    $route(to, from) {
      if(to.params.id){
        this.product = null
        this.fetchProduct(to.params.id)
      }
    }
  },
  created(){
    this.fetchProduct(this.id)
  },
};
</script>
