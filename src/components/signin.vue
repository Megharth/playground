<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<b-card header="SignIn">
				<div class="form mx-auto">
					<b-form-group label="Email address">
						<b-form-input type="email" v-model="user.email" placeholder="Enter Email"></b-form-input>
					</b-form-group>
					<b-form-group label="Password">
						<b-form-input type="password" v-model="user.password" placeholder="Enter Password"></b-form-input>
					</b-form-group>
					<b-button class="mx-auto d-block" @click="signIn">Submit</b-button>
				</div>
			</b-card>
		</div>
	</div>
</template>
<script>
import Header from './header'
	export default{
		components: {
			'app-header': Header
		},
		data() {
			return {
				user: {
					email: '',
					password: '',
				}
			}
		},
		methods: {
			signIn: function() {
				this.$store.commit("login", this.user);
				localStorage.email = this.user.email;
				localStorage.password = this.user.password;
				this.$router.push("home");
			}
		},
		mounted() {
			if(localStorage.email && localStorage.password){
				this.$store.commit("login", {
					email: localStorage.email,
					password: localStorage.password
				});
				this.$router.push('home');
			}
		}
	}
</script>
<style scoped>
	.form{
		max-width: 600px 
	}
</style>