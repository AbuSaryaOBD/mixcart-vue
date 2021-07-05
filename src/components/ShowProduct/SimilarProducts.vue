<template>
    <Carousel :options="carouselOps">
        <div v-for="similar in similarProducts" :key="similar.id" class="slide" >
            <router-link :to="{ name: 'ShowProduct', params: { id: similar.id }}">
                <div class="w-48 rounded overflow-hidden shadow-md hover:shadow-xl cursor-pointer m-2">
                    <img
                        class="w-full h-28 bg-gray-400"
                        :src="`https://mixcart.com.tr/storage/${similar.first_image.image}`"
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-lg mb-2 overflow-hidden h-7">{{ similar.name }}</div>
                        <StarRating 
                            :rating="similar.average_rate"
                            :read-only="true" :show-rating="false"
                            :star-size="20"
                        />
                    </div>
                </div>
            </router-link>
        </div>
    </Carousel>
</template>

<script>
import StarRating from 'vue-star-rating'
import { VueAgile } from 'vue-agile'

export default {
    name: 'SimilarProducts',
    components:{
        StarRating,
        Carousel: VueAgile,
    },
    props:{
        similarProducts: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            carouselOps:{
                rtl: true,
                slidesToShow: 5,
                autoplay: true,
                dots: false,
                infinite: true,
                navButtons: false,
            }
        }
    }
}
</script>