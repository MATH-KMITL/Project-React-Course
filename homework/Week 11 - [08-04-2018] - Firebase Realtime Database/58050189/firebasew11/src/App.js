import React, { Component } from 'react';
import Header from '../src/component/Header';
import MessageList from '../src/component/MessageList';
import MessageBox from '../src/component/MessageBox';

import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyD7vcw2jSYJjQ0FWmEr_fS6uNFIc9xSwfM",
      authDomain: "hww11-9ff64.firebaseapp.com",
      databaseURL: "https://hww11-9ff64.firebaseio.com",
      projectId: "hww11-9ff64",
      storageBucket: "hww11-9ff64.appspot.com",
      messagingSenderId: "273775905223"
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
