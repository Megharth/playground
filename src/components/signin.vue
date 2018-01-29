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
import { auth } from '../service/firebase'
import { persistence } from '../service/firebase'

	export default{
		components: {
			'app-header': Header
		},
		data() {
			return {
				user: {
					email: '',
					password: '',
          name: ''
				}
			}
		},
		methods: {
      signIn: function() {
        var self = this;
        auth.setPersistence(persistence).then(function() {
          auth.signInWithEmailAndPassword(self.user.email, self.user.password).then(function() {
            var user = auth.currentUser;
            self.user.name = user.displayName;
            self.$store.commit("login", self.user);
            self.$router.push("home");
          })
        })
      }
		}
	}
</script>
<style scoped>
	.form{
		max-width: 600px
	}
</style>
