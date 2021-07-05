<template>
    <h1>{{ meta.name }}</h1>
    <br>
    <h1>{{ meta.price.toFixed(2) }}</h1>
    <br>
    <div>{{ meta.summary }}</div>
</template>

<script>
export default {
    name: 'ProductMeta',
    props:{
        meta: Object
    }
}
</script>