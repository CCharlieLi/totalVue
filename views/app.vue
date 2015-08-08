<sryle></sryle>

<template>
	<component is="{{main_view}}"
		username="{{username}}"
		foottext="{{@ foottext}}"
		keep-alive
		v-transition
		transition-mode="out-in">
	</component>
	<component is="{{footer_view}}"
		foottext="{{@ foottext}}"
		keep-alive
		v-transition
		transition-mode="out-in">
	</component>
</template>


<script>
	module.exports = {
		el: '#MainBody',
	    data: {
	        main_view: 'main_view',
	        footer_view: 'footer_view',
	        username: 'CCharlieLi',
	        foottext: 'totalVue'
	    },
	    methods: {

	    },
	    components: {
		    'main_view': require('./components/main_view.vue'),
		    'footer_view': require('./components/footer_view.vue')
		}
  	}
</script>