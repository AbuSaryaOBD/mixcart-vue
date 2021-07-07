<template>
	<div
		:class="`loader ease-linear rounded-full border-gray-200 
			border-${sizes[size-1].thickness} border-t-${sizes[size-1].thickness} 
			h-${sizes[size-1].dimension} w-${sizes[size-1].dimension}`"
	>
	</div>
</template>

<script>
export default {
  name: "FetchingIndicator",
  props:{
	  size:{
		  type: Number,
		  default: 3,
	  }
  },
  data(){
	  return{
		sizes:[
			{'thickness' : '2', 'dimension': '10'},
			{'thickness' : '4', 'dimension': '16'},
			{'thickness' : '8', 'dimension': '24'},
		]
	  }
  },
};
</script>

<style scoped>
.loader {
	border-top-color: #f3b634;
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