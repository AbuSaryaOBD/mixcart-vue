<template>
    <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-10 w-10/12 mx-auto text-center">
        <h1>{{ meta.name }}</h1>
        <br>
        <h1>{{ meta.price.toFixed(2) }}</h1>
        <br>
        <div>{{ meta.summary }}</div>
    </div>
</template>

<script>
export default {
    name: 'ProductMeta',
    props:{
        meta: Object
    }
}
</script>