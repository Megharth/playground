<template>
	<div>
		<app-header></app-header>
		<div class="camera">
			<video ref="video"/>
		</div>
	</div>
</template>
<script>
import Header from './header'
	export default{
		components: {
			'app-header': Header
		},
		mounted () {
	      navigator.mediaDevices.getUserMedia({ video: true })
	        .then(mediaStream => {
	          this.$refs.video.srcObject = mediaStream
	          this.$refs.video.play()
	        })
	        .catch(error => console.error('getUserMedia() error:', error))
	    }
	}
</script>
<style scoped>
	.camera{
		max-width: 800px;
	}
</style>