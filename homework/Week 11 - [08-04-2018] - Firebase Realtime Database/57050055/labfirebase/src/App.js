import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  
  var config = {
    apiKey: "AIzaSyAB0ImDtuG1vjf7yUzCQ1sJ3gexIhhyGUA",
    authDomain: "message-app-1c8a7.firebaseapp.com",
    databaseURL: "https://message-app-1c8a7.firebaseio.com",
    projectId: "message-app-1c8a7",
    storageBucket: "message-app-1c8a7.appspot.com",
    messagingSenderId: "1015623326288"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;