import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from '../src/components/MessageList';
import firebase from 'firebase';
import MessageBox from '../src/components/MessageBox';

class App extends Component {
constructor(prop){
  super()
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBi5AFlCx7mfWH3ShfYWXrxWTABcVZB-AE",
    authDomain: "message-app-20f73.firebaseapp.com",
    databaseURL: "https://message-app-20f73.firebaseio.com",
    projectId: "message-app-20f73",
    storageBucket: "",
    messagingSenderId: "593516665955"
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <div className="contianer"> 
        <Header title="Simple Firebase App"/>
        <div className="columns">
          <div className="column is-3"></div>
            <div className="column is-6">
              <MessageList db={firebase} />
              
            </div>
          </div>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
            <MessageBox db={firebase}/>
            </div>
          </div>         
       </div>
    );
  }
}
export default App;
