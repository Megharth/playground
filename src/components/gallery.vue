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

export default {
  components: {
    'app-header': Header
  },
  mounted() {
    storage.ref().child('images/').getDownloadURL().then(url => {
      console.log(url);
    })
  }
}
</script>
