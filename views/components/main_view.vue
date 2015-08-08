<style></style>

<template>
	<div class="container-background">
		<div class="container">
			<div class="center"><a href="/"><img src="/img/logo.png" alt="total.js - web application framework for node.js" border="0" /><img height="90px" src="/img/Vue_logo.png" alt="Vue.js" border="0" /></a></div>
			<br />
			
			<hr />
			<br />
			<p class="center">
				The node.js framework that combine total.js and Vue.js, nothing new. --{{username}}<br />
				<b>Create something awesome. ;)</b>
			</p>
			<div class="center">
				<input type="text" v-model="foottext">
			</div>
			<br />
			<br />
			<div class="center"><a href="http://docs.totaljs.com" class="linkbutton">DOCUMENTATION of total.js</a></div>
			<div class="center"><a href="http://vuejs.org/guide/" class="linkbutton">DOCUMENTATION of Vue.js</a></div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ['foottext','username'],
	  	data: function () {
	      return {
	      	 foottext: '',
	     	 username: ''
	    	}
	  	},
	    methods: {

	    }
  	}
</script>