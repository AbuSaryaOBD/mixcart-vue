<template>
  <div>Show Product {{ id }}</div>
</template>

<script>

export default {
  name: "ShowProduct",
  data(){
      return {
          id: this.$route.params.id
      }
  },
};
</script>
