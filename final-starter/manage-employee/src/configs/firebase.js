import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBi5AFlCx7mfWH3ShfYWXrxWTABcVZB-AE",
  authDomain: "message-app-20f73.firebaseapp.com",
  databaseURL: "https://message-app-20f73.firebaseio.com",
  projectId: "message-app-20f73",
  storageBucket: "message-app-20f73.appspot.com",
  messagingSenderId: "593516665955"
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};