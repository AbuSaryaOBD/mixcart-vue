<template>
    <div class="bg-white shadow-lg rounded-lgw-1/2 msg-conatiner">
        <img src="@/assets/sad_face.png" class="sad-face">
        <h2 class="msg-text text-center" v-html="htmlText"></h2>
    </div>
</template>

<script>
export default {
    name: 'EmptyList',
    data(){
        return {
            htmlText: ''
        }
    },
    methods:{
        writeText(){
            let text = 'لا يوجد عناصر مطابقة'
            for (var i = 0, l = text.length; i < l; i++) {
                setTimeout(function(i) {
                    this.htmlText = text.substring(0, i + 1);
                }.bind(this, i), i * 75);
            }
        }
    },
    created(){
        this.writeText()
    }
}
</script>

<style scoped>
    .msg-conatiner {
        position: relative;
        margin: 4rem auto 1rem auto;
        width: 400px;
        height: 300px;
    }

    .sad-face {
        height: 150px;
        width: 150px;
        position: absolute;
        left: calc(50% - 75px);
        top: -75px;
        padding: 1rem;
        background-color: white;
        border-radius: 50%;
    }

    .msg-text {
        font-size: 3rem;
        font-weight: bolder;
        color: #005f99;
        position: absolute;
        top: 100px;
        width: 400px;
    }
</style>