<template>
    <div wire:loading class="absolute h-full w-full bg-gray-700 opacity-50 flex flex-col items-center"></div>
	<div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-28 w-28">
</div>

</template>

<script>
export default {
  name: "FetchingIndicator",
};
</script>

<style scoped>
.loader {
	border-top-color: #f3b634;
    position: fixed;
    top: 50%;
    left: 50%;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>