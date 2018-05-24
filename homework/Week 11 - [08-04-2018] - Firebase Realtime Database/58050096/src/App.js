import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    const config =  {
      apiKey: "AIzaSyBfolEOQ6WVgVfCED1j-ftjFRQOtZpS_sc",
      authDomain: "homework11-69836.firebaseapp.com",
      databaseURL: "https://homework11-69836.firebaseio.com",
      projectId: "homework11-69836",
      storageBucket: "homework11-69836.appspot.com",
      messagingSenderId: "1049620638982"
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
