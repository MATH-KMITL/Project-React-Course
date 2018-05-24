import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDGICA6YnJMrvshBwT8HjA52t32vPv-M_E",
  authDomain: "project-23b64.firebaseapp.com",
  databaseURL: "https://project-23b64.firebaseio.com",
  projectId: "project-23b64",
  storageBucket: "",
  messagingSenderId: "1053329774375"
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};