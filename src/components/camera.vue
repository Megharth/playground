<template>
	<div>
		<app-header></app-header>
		<div>
      <video ref="video" class="container d-block mx-auto"></video>
		</div>
      <b-button @click="capture" variant="primary" class="d-block mx-auto">Capture</b-button>
      <b-button @click="flip" variant="primary" class="d-block mx-auto">Flip camera</b-button>

	</div>
</template>
<script>
import Header from './header'
import { storage } from '../service/firebase'
import { database } from '../service/firebase'
import { auth } from '../service/firebase'

export default{
		components: {
			'app-header': Header
		},
    data(){
		  return {
		    mediaStream: null,
        front: false,
        user: null
      }
    },
    methods: {
      flip() {
        this.front = !this.front;
        console.log(this.front);
        navigator.mediaDevices.getUserMedia({ video: {
          width: 1280,
          height: 720,
          facingMode: (this.front ? "user" : "environment")}}).then((mediaStream) => {
          this.mediaStream = mediaStream;
          this.$refs.video.srcObject = mediaStream;
          this.$refs.video.play();
        }).catch(error => console.error('getUserMedia() error:', error))
      },
		  capture() {
        var self = this;
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(mediaStreamTrack);
        return imageCapture.takePhoto().then(blob => {
          var imgName = 'img-' + new Date().getTime();
          storage.ref('images/').child(imgName).put(blob).then(res => {
            database.ref('images/' + imgName + '/').set({
              userName: self.user.displayName,
              img: imgName,
              imgURL: res.metadata.downloadURLs[0],
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString()
            })
          })
        })
      }
    },
		mounted () {
      auth.onAuthStateChanged(user => {
        if(user)
          this.user = user;
        else
          this.$router.push("/")
      });
      navigator.mediaDevices.getUserMedia({ video: {
        width: 1280,
        height: 720,
        facingMode: "environment"}}).then((mediaStream) => {
          this.mediaStream = mediaStream;
          this.$refs.video.srcObject = mediaStream;
          this.$refs.video.play();
        }).catch(error => console.error('getUserMedia() error:', error))
	    },
    destroyed () {
      const tracks = this.mediaStream.getTracks();
      tracks.map(track => track.stop())
    }
	}
</script>
<style scoped>
.btn{
  margin-bottom: 5px;
}
.container{
  height: 400px;
  margin-bottom: 20px;
}
</style>
