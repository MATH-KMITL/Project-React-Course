import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArbQwVuEANBrX2MqUxwQ-ABzjqnm9Lh-U",
  authDomain: "my-project-d8788.firebaseapp.com",
  databaseURL: "https://my-project-d8788.firebaseio.com",
  projectId: "my-project-d8788",
  storageBucket: "my-project-d8788.appspot.com",
  messagingSenderId: "711366739476"
};

const firebaseConfig = firebase.initializeApp(config);
export const database = firebaseConfig.database();

export default firebaseConfig;
// export {
//   database,
// };