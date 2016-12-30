<template>
	<div>
		<array-navigation :navStructure="structure"></array-navigation>
		<hr>
		<!-- <array-navedit :navStructure="structure"></array-navedit> -->
	</div>
</template>

<script>
	/**
	 * We required it via import, but the json could also be loaded via ajax or already assigned
	 * to a variable by the backend. See dist/index.html for more information.
	 */
	import json from './structure.json';

	// For rendering
	Vue.component('array-navigation', require('./components/array-navigation-rendering/ArrayNavigation.vue'));
	// For editing
	Vue.component('array-navedit', require('./components/array-navigation-editing/ArrayNavedit.vue'));

	export default {
		data() 
		{
			return {
				'structure': json /* 'structure': window.navStructure; */
			}
		},
		created()
		{
			/**
			 * Here we might make an ajax call to the backend to fetch the navigation structure from the backend
			 */
			// this.$http.get('/backend/navigation-structure.json').then((res) => {
			// 	this.structure = res;
			// }, (res) => {
			// 	alert('Error fetching the navigation data from the server.');
			// });
		}
	}
</script>