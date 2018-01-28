<template>
	<div>
		<app-header></app-header>
		<h1>Welcome {{ currentUser.email }}</h1>
	</div>
</template>
<script>
import Header from './header'
	export default{
		components: {
			'app-header': Header
		},
		computed: {
			currentUser: function(){
	        return this.$store.getters.currentUser;
	      }
		},
		mounted() {
			if(!localStorage.email)
				this.$router.push("/");
		}
	}
</script>