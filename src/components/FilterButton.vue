<template>
  <button
    class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 rounded m-1"
    :class="{'bg-blue-500 text-white': active, 'text-blue-700': !active}"
    @click="meClicked"
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
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['me-clicked'],
  methods: {
    meClicked() {
        if(!this.active)
        this.$emit("me-clicked");
    },
  },
};
</script>
