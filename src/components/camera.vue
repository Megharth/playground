<template>
	<div>
		<app-header></app-header>
		<div>
      <video ref="video" class="container d-block mx-auto"></video>
		</div>
    <b-button @click="capture" variant="primary" class="d-block mx-auto">Capture</b-button>
	</div>
</template>
<script>
import Header from './header'
import { storage } from '../service/firebase'

export default{
		components: {
			'app-header': Header
		},
    data(){
		  return {
		    mediaStream: null
      }
    },
    methods: {
		  capture() {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(mediaStreamTrack);
        return imageCapture.takePhoto().then(blob => {
          storage.ref().child('images/img-' + new Date().getTime()).put(blob).then(res => {
            console.log(res)
          })
        })
      }
    },
		mounted () {
	      navigator.mediaDevices.getUserMedia({ video: true })
	        .then((mediaStream) => {
            this.mediaStream = mediaStream;
            this.$refs.video.srcObject = mediaStream;
            this.$refs.video.play();
	        })
	        .catch(error => console.error('getUserMedia() error:', error))
	    },
    destroyed () {
      const tracks = this.mediaStream.getTracks();
      tracks.map(track => track.stop())
    }
	}
</script>
<style scoped>
.container{
  height: 400px;
  margin-bottom: 20px;
}
</style>
