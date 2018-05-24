import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyDtgEylz9HurYadmhCkEDu5z3Sdq5xbEfY",
      authDomain: "labreactfirebase.firebaseapp.com",
      databaseURL: "https://labreactfirebase.firebaseio.com",
      projectId: "labreactfirebase",
      storageBucket: "labreactfirebase.appspot.com",
      messagingSenderId: "1070079544932"
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
