import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDsA93oQ22B000qAoLORi75KP9egCdfCfI",
  authDomain: "group2-349ca.firebaseapp.com",
  databaseURL: "https://group2-349ca.firebaseio.com",
  projectId: "group2-349ca",
  storageBucket: "",
  messagingSenderId: "239635156767"
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};