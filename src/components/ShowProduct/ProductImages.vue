<template> 
    <div class="relative w-layer">
        <div 
            v-for="image,index in images" :key="`layer-${image.id}`"
            class="w-layer transform abs-layer"
            :class="[ index == 0 ? 'translate-y-0' : 'translate-y-full' ]"
            :id="`layer-${image.id}`"
        >
            <img v-lazy="`https://mixcart.com.tr/storage/${image.image}`" class="object-cover w-full h-full"/>
        </div>
    </div>
    
    <div class="flex w-full justify-center">
        <div v-for="image in images" :key="`thumbnail-${image.id}`"
            class="thumbnail"
            @click="thumbnailClicked(image.id)"
        >
            <img v-lazy="`https://mixcart.com.tr/storage/${image.image}`" class="object-cover w-full h-full"/>
        </div>
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
    },
    data() {
        return{
        }
    },
    methods:{
        thumbnailClicked(id){
            let newLayer = document.querySelector(`#layer-${id}`);
            let CurLayer = document.querySelector('div.abs-layer.translate-y-0');
            
            CurLayer.classList.remove('translate-y-0');
            CurLayer.classList.add('translate-y-full');
            
            newLayer.classList.remove('translate-y-full');
            newLayer.classList.add('translate-y-0');
        }
    }
}
</script>

<style scoped>
    .w-layer {
        width: 25rem;
        height: 25rem;
        overflow: hidden;
    }
    .abs-layer {
        position: absolute;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 1000ms;
    }
    .thumbnail {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
    }
</style>