import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';
import './App.css';
import firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyCAvSQ9TRxbhBEKg6Jn6pIwVQMQp58izPU",
      authDomain: "kook-54d4e.firebaseapp.com",
      databaseURL: "https://kook-54d4e.firebaseio.com",
      projectId: "kook-54d4e",
      storageBucket: "kook-54d4e.appspot.com",
      messagingSenderId: "404469792291"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div>
          
          <div>
            <MessageBox db={firebase} />
          </div>
        </div>
        <div>
         
          <div className="body div ">
            <MessageList db={firebase} />
    
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
