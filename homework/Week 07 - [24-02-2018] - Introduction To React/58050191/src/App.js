import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="header">
        <div className="photo">
            <img className="img" src={require('./image/Kra.jpg')}/>
        </div>
        <div className="title">
    	    <h1>Mr. Apisit Sakamura</h1>
            <p>Bachelor Student</p>
        </div>
    </div>
    <div className="container">
        <div className="col1">
            <h2>PERSONAL PROFILE</h2>
            <p>Age: 21</p>
            <p>Birthday: 16/03/97</p>
            <p>Hobbies: listen to music,play a computer game</p>
            <p>Favorite color: blue</p>
            <p>Status: Single</p>
            <div className="row2-1">
                <h2>CONTACTS</h2>
                <p>8/188,Kittichaivilla2 Valley,Nongchok,Bangkok,10530</p>
                <p>Apisit.Sa@gmail.com</p>
                <p>081-312-6149</p>
            </div>
            <h2>EDUCATIONS</h2>
            <p>King Mongkut's Institute of Technology Ladkrabang
: 2014-Present </p>
            <p>Setthabutbamphen School: 2008 - 2014 </p>
        </div>
        <div className="col2">
    	    <h2>Qualifications</h2>
            <p>Able to write program with JAVA,HTML,</p>
            <p>VISUAL BASIC,SQL language</p>
            <h5>TOOLS</h5>       				        			                   
            <p>-EDITPLUS&nbsp;&nbsp;&nbsp;-CODECHARGE</p>
            <p>-NETBEANS&nbsp;-POWERDESIGN</p>
            <div className="row1-2">
                <h2>WORK EXPERIENCE</h2>
                <p>S.P. COMNET CO.,LTD.: 1 Month</p>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default App;
