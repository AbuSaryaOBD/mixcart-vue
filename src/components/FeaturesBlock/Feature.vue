<template>
    <div class="flex flex-col items-center overflow-hidden" :id="`feature-${index}`">
        <h3 class="text-center font-bold mb-auto px-3">{{ title }}</h3>
        <div class="w-full" :class="{ 'border-r-2': hasBorder }">
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
        index: Number,
    },
    data() {
        return {
            hasBorder: false,
        }
    },
    mounted(){
        if (this.index > 0) {
            const myTop = this.$el.getBoundingClientRect().top
            const sibling = document.getElementById(`feature-${this.index - 1}`)
            const prevTop = sibling.getBoundingClientRect().top
            this.hasBorder = myTop === prevTop
        }
    }
}
</script>