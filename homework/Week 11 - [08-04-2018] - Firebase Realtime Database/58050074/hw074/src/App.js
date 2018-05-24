import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyD4JhWaDlSFo6k8HxP23CEOesSV09hw20k",
      authDomain: "what-f6a3a.firebaseapp.com",
      databaseURL: "https://what-f6a3a.firebaseio.com",
      projectId: "what-f6a3a",
      storageBucket: "what-f6a3a.appspot.com",
      messagingSenderId: "547270200438"
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

