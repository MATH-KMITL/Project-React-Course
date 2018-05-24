import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import firebase from 'firebase';
import MessageBox from '../src/component/MessageBox';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyDMWmuuIOv5VT_IxWPYKP4tL32uTH3ZDBc",
      authDomain: "test-b4412.firebaseapp.com",
      databaseURL: "https://test-b4412.firebaseio.com",
      projectId: "test-b4412",
      storageBucket: "test-b4412.appspot.com",
      messagingSenderId: "450409292178"
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