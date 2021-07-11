<template>
    <div class="flex flex-wrap justify-center w-10/12 mx-auto">
        <feature v-for="feature, index in features" :key="feature.id"
            class="xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-5 seperator"
            :index="index"
            :title="feature.title"
            :path="imagePath(feature.image)"
            :desc="feature.desc"
        />
    </div>
</template>

<script>
import Feature from './Feature'

export default {
    components: {
        Feature,
    },
    data() {
        return {
            features: [
                {id: '1', title: 'عوائد سهلة', image: 'currency.png', desc: 'لم تكن إعادة المنتج الذي اشتريته اسهل من أي وقت مضى'},
                {id: '2', title: 'المحمول في جيبك', image: 'currency.png', desc: 'لم تكن إعادة المنتج الذي اشتريته اسهل من أي وقت مضى'},
                {id: '3', title: 'التسوق الآمن بنظرة واحدة', image: 'currency.png', desc: 'لم تكن إعادة المنتج الذي اشتريته اسهل من أي وقت مضى'},
                {id: '4', title: 'التسليم اليوم', image: 'currency.png', desc: 'لم تكن إعادة المنتج الذي اشتريته اسهل من أي وقت مضى'},
            ]
        }
    },
    methods:{
        imagePath(image){
            let src = require('@/assets/'+ image +'');
            return src
        }
    }
}
</script>