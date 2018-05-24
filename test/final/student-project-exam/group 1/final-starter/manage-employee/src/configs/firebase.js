import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8TVZdugQRXnLA1th4aoJVdQSWWQOd0PI",
  authDomain: "manage-c358d.firebaseapp.com",
  databaseURL: "https://manage-c358d.firebaseio.com",
  projectId: "manage-c358d",
  storageBucket: "",
  messagingSenderId: "999874921397"
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};
