import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyChtzbgbQ-WQZfQGyRrYoaZRKQJxREf3Jg",
  authDomain: "group-3-react.firebaseapp.com",
  databaseURL: "https://group-3-react.firebaseio.com",
  projectId: "group-3-react",
  storageBucket: "group-3-react.appspot.com",
  messagingSenderId: "1004850011491"
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};