<template>
  <div id="app">
    <router-view @signIn="signIn($event)"></router-view>
  </div>
</template>

<script>
import { auth } from './service/firebase'
import { persistence }  from './service/firebase'

export default {
  name: 'app',
  data() {
    return {
     user: null
    }
  },
  methods: {

  },
  created() {
    auth.onAuthStateChanged(user => {
      if(user){
        console.log(user);
      }
      else
        console.log("logged out");
    })
  }
}
</script>
