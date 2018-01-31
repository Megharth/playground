<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <b-card v-for="img in images" :img-src="img.imgURL" img-bottom class="mx-auto">
        <b-row>
          <b-col><span>{{ img.userName }}</span></b-col>
          <b-col><span class="date">{{ img.date }} at {{ img.time }}</span></b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
  import Header from './header'
  import { storage } from '../service/firebase'
  import { database} from '../service/firebase'
  import { auth } from '../service/firebase'

  export default {
    components: {
      'app-header': Header
    },
    data() {
      return {
        images: null,
        user: null
      }
    },
    mounted: function () {
      database.ref('images/').once('value').then(snapshot => {
        this.images = snapshot.val();
      });
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
  .card {
    max-width: 500px;
    margin-bottom: 20px;

    box-shadow: 0 0 2px 2px #cccccc;
  }

</style>
