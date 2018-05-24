// App.js

import React, { Component } from 'react';
import MessageList from '../src/components/MessageList';
import MessageBox from '../src/components/MessageBox';
import Header from '../src/components/Header';

import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyB1vZTaFB2pVfKzxwrioTw0CtGv5VxqTbM",
    authDomain: "message-app-c2cc5.firebaseapp.com",
    databaseURL: "https://message-app-c2cc5.firebaseio.com",
    projectId: "message-app-c2cc5",
    storageBucket: "message-app-c2cc5.appspot.com",
    messagingSenderId: "395451828691"
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