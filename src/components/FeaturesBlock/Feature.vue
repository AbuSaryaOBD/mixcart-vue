<template>
    <div class="flex flex-col items-center overflow-hidden">
        <h3 class="text-center font-bold mb-auto px-3">{{ title }}</h3>
        <div class="w-full">
            <img :src="path" class="w-24 h-24 object-cover mt-5 mx-auto">
        </div>
        <p class="text-gray-600 text-center mt-3 px-3">{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        path: String,
        desc: String,
    },
}
</script>