<template> 
    <div class="main-lable shadow-lg rounded-lg mt-10 w-10/12 mx-auto">
        <div class="relative w-layer mr-auto">
            <div 
                v-for="image,index in images" :key="`layer-${image.id}`"
                class="w-layer transform abs-layer"
                :class="[ index == 0 ? 'translate-y-0' : 'translate-y-full' ]"
                :id="`layer-${image.id}`"
            >
                <img v-lazy="`https://mixcart.com.tr/storage/${image.image}`" class="object-cover w-full h-full"/>
            </div>
        </div>
        
        <div class="flex w-full justify-end thumbnail-bar">
            <div v-for="image in images" :key="`thumbnail-${image.id}`"
                class="thumbnail shadow-lg rounded-lg"
                @click="thumbnailClicked(image.id)"
            >
                <img v-lazy="`https://mixcart.com.tr/storage/${image.image}`" class="object-cover w-full h-full rounded-lg"/>
            </div>
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
    .main-lable {
        background-color: #005f99;
        overflow: hidden;
    }
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
        margin: 1rem 0 1rem 1rem;
        overflow: hidden;
        padding: 3px;
        background-color: white;
    }
    .thumbnail-bar {
        margin-top: 1px;
        border-top: 2px solid #ff9a18;
    }
</style>