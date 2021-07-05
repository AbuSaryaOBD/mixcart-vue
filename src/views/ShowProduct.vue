<template>
  <div class="container mx-auto">
    <ProductImages v-if="product?.images" :images="product.images" />
    <br>
    <ProductMeta v-if="product" :meta="product"  />
    <br>
    <SimilarProducts v-if="product?.likeMaterials" :similarProducts="product.likeMaterials" />
  </div>
</template>

<script>
import ProductImages from '@/components/ShowProduct/ProductImages'
import ProductMeta from '@/components/ShowProduct/ProductMeta'
import SimilarProducts from '@/components/ShowProduct/SimilarProducts'

export default {
  name: "ShowProduct",
  components:{
    ProductImages,
    ProductMeta,
    SimilarProducts,
  },
  data(){
      return {
          id: this.$route.params.id,
          product: null,
      }
  },
  created(){
    let url = process.env.VUE_APP_API_URL + '/' + this.id
    axios.get(url)
      .then(res => {
        this.product = res.data.data
      })
  }
};
</script>
