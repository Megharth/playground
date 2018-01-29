<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <b-card header="SignIn">
        <div class="form mx-auto">
          <b-form-group label="Email address">
            <b-form-input type="email" v-model="user.email" placeholder="Enter Email"></b-form-input>
          </b-form-group>
          <b-form-group label="Username">
            <b-form-input type="text" v-model="user.name" placeholder="Enter Username"></b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input type="password" v-model="user.password" placeholder="Enter Password"></b-form-input>
          </b-form-group>
          <b-button class="mx-auto d-block" @click="signUp">Submit</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Header from './header'
import { auth } from '../service/firebase'
import { database } from '../service/firebase'

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
    signUp() {
      var self = this;
      auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(user => {
        user.updateProfile({displayName: self.user.name});
        database.ref('users/' + user.uid).set({
          email: self.user.email,
          name: self.user.name,
        }).then(function() {
          self.$router.push("home");
        })
      }).catch(error => {
        console.log(error);
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
