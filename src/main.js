// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuefire from 'vuefire'
import firebase from './service/firebase'

Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAKf8NdsmlRbym9aw3rgM1nE0nvZBVf-kQ',
		libraries: 'places'
	}
})
Vue.use(Vuefire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
