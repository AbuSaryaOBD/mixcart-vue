<template>
    <div class="fixed-bottom-bar flex justify-center p-4">
        <FetchingIndicator :size="2"/>
    </div>
</template>

<script>
import FetchingIndicator from './FetchingIndicator.vue'

export default {
    name: 'BottomIndicator',
    components: { FetchingIndicator },
}
</script>

<style scoped>
.fixed-bottom-bar {
    position: fixed;
    bottom: 0;
    background-color: white;
    width: 100%;
}
</style>