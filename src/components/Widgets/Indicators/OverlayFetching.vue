<template>
    <Overlay />
    <FetchingIndicator class="fixed-center"/>
</template>

<script>
import Overlay from './Overlay'
import FetchingIndicator from './FetchingIndicator'

export default {
    name: 'OverlayFetching',
    components:{
        Overlay,
        FetchingIndicator,
    }
}
</script>

<style scoped>
.fixed-center {
    position: fixed;
    top: 50%;
    left: 50%;
}
</style>