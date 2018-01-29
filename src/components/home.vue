<template>
	<div>
		<app-header></app-header>
		<div class="container">
      <h1>Welcome {{ user.displayName }}</h1>
    </div>
	</div>
</template>
<script>
import Header from './header'
import { auth } from '../service/firebase'
	export default{
		components: {
			'app-header': Header
		},
    data() {
		  return {
        user: null
      }
    },
    mounted() {
      auth.onAuthStateChanged(user => {
        if(user)
          this.user = user;
        else
          this.$router.push("/")
      })
    }
	}
</script>
