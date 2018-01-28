<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <b-card v-for="img in images">
        <img :src="img.imgURL" class="imgIco d-block mx-auto">
      </b-card>
    </div>
  </div>
</template>

<script>
import Header from './header'
import { storage } from '../service/firebase'
import { database} from '../service/firebase'

export default {
  components: {
    'app-header': Header
  },
  data() {
    return {
      images: null
    }
  },
  mounted: function () {
    database.ref('images/').once('value').then(snapshot => {
      this.images = snapshot.val();
    })
  }
}
</script>
<style scoped>
.card {
  width: 200px;
  display: inline-block;
  padding: 0;
  border: hidden;
}
.card-body{
  padding: 0;
  width: 200px;
}
.imgIco{
  height: 200px;
  max-width: 250px;
  padding: 0;
  margin: 0;
}
</style>
