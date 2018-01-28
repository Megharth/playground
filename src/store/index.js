import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		user: {
			email: '',
			password: '',
			login: false
		},
	},
	getters: {
		currentUser: function(state){
			return {
				email: state.user.email,
				password: state.user.password,
				login: state.user.login
			}
		}
	},
	mutations: {
		login: function(state, payload){
			state.user.email = payload.email;
			state.user.password = payload.password;
			state.user.login = true;
		},
		logout: function(state){
			state.user.email = '';
			state.user.password = '';
			state.user.login = false;
		}
	}
})