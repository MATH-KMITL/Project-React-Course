import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyB9Z_YoN7i4V04OciXRs80uhcybXFVnuv0",
      authDomain: "mick-e183d.firebaseapp.com",
      databaseURL: "https://mick-e183d.firebaseio.com",
      projectId: "mick-e183d",
      storageBucket: "",
      messagingSenderId: "888862246149"
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
