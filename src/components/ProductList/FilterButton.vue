<template>
  <button
    class="
      bg-transparent hover:bg-blue-500
      font-semibold hover:text-white
      py-2 px-4 m-1
      rounded
    "
    :class="{ 'bg-blue-500 text-white': active, 'text-blue-700': !active }"
    @click="activeMe"
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
  emits: ["active-me"],
  methods: {
    activeMe() {
      if (!this.active) this.$emit("active-me");
    },
  },
};
</script>
