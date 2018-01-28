import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import SignIn from '../components/signin'
import Location from '../components/location'
import Camera from '../components/camera'
import Gallery from '../components/gallery'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		component: SignIn
  	},
    {
    	path: '/home',
    	component: Home
    },
    {
    	path: '/location',
    	component: Location
    },
    {
      path: '/camera',
      component: Camera
    },
    {
      path: '/gallery',
      component: Gallery
    }
  ]
})
