<template>
  <div class="app-header">
    <b-navbar toggleable="sm" variant="info" type="dark">
      <b-navbar-brand to="/home">Navbar</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto" v-if="!user">
          <b-nav-item to="/signup">Sign Up</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="user" >
          <b-nav-item to="/camera">Camera</b-nav-item>
          <b-nav-item to="/gallery">Gallery</b-nav-item>
          <b-nav-item to="/location">Your Location</b-nav-item>
          <b-nav-item @click="signOut">sign out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import { auth } from '../service/firebase'

  export default{
    data() {
      return {
        user: null
      }
    },
    methods: {
      signOut: function(){
        auth.signOut();
        this.$router.push('/');
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
<style scoped>
  .app-header{
    margin-bottom: 50px;
  }
</style>
