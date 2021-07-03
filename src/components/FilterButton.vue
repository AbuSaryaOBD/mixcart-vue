<template>
  <button
    @click="meClicked"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
  {{ text }}
</button>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
      text: {
      type: String,
      required: true
    },
  },
  methods:{
      meClicked(){
          this.$emit('me-clicked')
      }
  }
};
</script>
