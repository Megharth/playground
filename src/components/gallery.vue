<template>
  <div>
    <app-header></app-header>
    <div class="container">

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
  mounted() {
    database.ref('images/').once('value').then(snapshot => {
      console.log(snapshot.val());
    })
  }
}
</script>
