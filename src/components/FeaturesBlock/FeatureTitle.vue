<template>
    <div class="flex flex-col items-center overflow-hidden">
        <h3 class="text-center font-bold my-2">{{ title }}</h3>
        <img :src="path" class="w-24 h-24 object-cover my-2">
        <p class="text-gray-600 text-center my-2">{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        path: String,
        desc: String,
    }
}
</script>