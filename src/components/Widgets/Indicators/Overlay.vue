<template>
    <div :class="`absolute h-full w-full bg-${color} opacity-${opacity}`"></div>
</template>

<script>
export default {
  name: "Overlay",
  props:{
      color:{
          type: String,
          default: 'gray-700'
      },
      opacity:{
          type: String,
          default: '50'
      },
  }
};
</script>
