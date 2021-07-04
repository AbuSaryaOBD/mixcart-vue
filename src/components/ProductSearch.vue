<template>
    <div class="p-8">
        <div class="bg-white flex items-center rounded-full w-2/4 shadow-xl mx-auto overflow-hidden">
            <input 
                class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                id="search"
                type="text"
                v-model="term"
                placeholder="البحث"
            />
            <div class="p-4">
                <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
    name: 'ProductSearch',
    data(){
        return {
            term: ''
        }
    },
    emits: ['search-term'],
    watch:{
        term: {
            deep: true,
            handler: throttle(function() {
                this.$emit('search-term', this.term)
            }, 1000),
        },
    }
}
</script>