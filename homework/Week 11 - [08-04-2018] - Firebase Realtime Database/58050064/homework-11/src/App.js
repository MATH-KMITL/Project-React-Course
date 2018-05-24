import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyClekKclv5gzJVTMm0YM8ROaRXfQR8okEY",
      authDomain: "homework11-7ef2d.firebaseapp.com",
      databaseURL: "https://homework11-7ef2d.firebaseio.com",
      projectId: "homework11-7ef2d",
      storageBucket: "homework11-7ef2d.appspot.com",
      messagingSenderId: "1040811316037"
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
