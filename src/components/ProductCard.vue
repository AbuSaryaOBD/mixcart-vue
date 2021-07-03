<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-2">
    <img
      class="w-full"
      :src="`https://mixcart.com.tr/storage/${product.images[0].image}`"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
