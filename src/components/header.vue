<template>
  <div class="app-header">
    <b-navbar toggleable="sm" variant="info" type="dark">
      <b-navbar-brand to="/">Navbar</b-navbar-brand>
      <b-navbar-toggle v-if="currentUser.login"  target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto" v-if="currentUser.login" >
          <b-nav-item to="/camera">Camera</b-nav-item>
          <b-nav-item to="/location">Your Location</b-nav-item>
          <b-nav-item @click="signOut">sign out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default{
    data() {
      return {

      }
    },
    methods: {
      signOut: function(){
        this.$store.commit("logout");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        this.$router.push('/');
      }
    },
    computed: {
      currentUser: function(){
        return this.$store.getters.currentUser;
      }
    }
  }
</script>
<style scoped>
  .app-header{
    margin-bottom: 50px;
  }
</style>