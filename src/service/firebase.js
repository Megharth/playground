import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBb9PNecozWYpYdNfsoY1Ri454yvyS29VM",
  authDomain: "playground-5cc38.firebaseapp.com",
  databaseURL: "https://playground-5cc38.firebaseio.com",
  projectId: "playground-5cc38",
  storageBucket: "playground-5cc38.appspot.com",
  messagingSenderId: "380390646561"
};
firebase.initializeApp(config);

const database =  firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();
const persistence = firebase.auth.Auth.Persistence.LOCAL;
export {
  database,
  storage,
  auth,
  persistence
}
