<style></style>

<template>
	<footer>
		&copy; Thank you for using <b>{{foottext}}</b>.
	</footer>
</template>

<script>
	module.exports = {
		props: ['foottext'],
	  	data: function () {
	      return {
	      	 foottext: ''
	    	}
	  	},
	    methods: {

	    }
  	}
</script>