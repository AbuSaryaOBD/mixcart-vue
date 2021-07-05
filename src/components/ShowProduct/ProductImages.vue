<template>
    <div v-for="image in images" :key="image.id">
        {{ image.image }}
    </div>
</template>

<script>
export default {
    name: 'ProductImages',
    props:{
        images: {
            type: Array,
            required: true
        }
    }
}
</script>