import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyC37KlQzL2UOW3_DLz1AO-cRcVKok3fFS8",
      authDomain: "reactclass-ffa88.firebaseapp.com",
      databaseURL: "https://reactclass-ffa88.firebaseio.com",
      projectId: "reactclass-ffa88",
      storageBucket: "reactclass-ffa88.appspot.com",
      messagingSenderId: "1049450018462"
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
