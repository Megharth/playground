<template>
	<div>
		<app-header></app-header>
		<div>
			<gmap-map :center="position" :zoom="15" style="max-width: 800px; height: 500px; margin:0 auto">
				<gmap-marker :position="position" :clickable="true" :draggable="true"></gmap-marker>
			</gmap-map>
		</div>
	</div>
</template>
<script>
import Header from './header'
	export default{
		components: {
			'app-header': Header
		},
		data() {
			return {
				position: {
					lat: 0,
					lng: 0
				},
        user: null
			}
		},
		mounted() {
			if(navigator.geolocation){
				var self = this;
				navigator.geolocation.getCurrentPosition(function(position){
					self.position.lat = position.coords.latitude;
					self.position.lng = position.coords.longitude;
				})
			}
      auth.onAuthStateChanged(user => {
        if(user)
          this.user = user;
        else
          this.$router.push("/")
      });
		}
	}
</script>
<style scoped>

</style>
