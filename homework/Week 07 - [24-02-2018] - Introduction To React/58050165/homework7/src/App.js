import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="content-profile-page">
        <div class="profile-user-page card">
        <div class="img-user-profile">
        <img class="profile-bgHome" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/31295219_1438857212885876_8968911734796713484_n.jpg?_nc_cat=0&oh=0ae40876998db2c9e99ae7762b681b46&oe=5B877A05" />
        <img class="avatar" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/14993461_977132685725000_7509819167961257763_n.jpg?_nc_cat=0&oh=82ac2b7da20eac486d372dfdee34c994&oe=5B7C8B93" alt="kookSawasdee"/>
           </div>
          <button>Hello</button>
          <div class="user-profile-data">
            <h1>Sawasdee Klambu</h1>
            <p>APPLIED MATHEMATICS</p><p> KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG</p>
          </div> 
          
          <div class="description-profile"><strong>CONTACT : </strong>|  Address:  657  Soi  Chalongkrung  LatKrabang  Bangkok  10520  | Email: sawasdee.kl@gmail.com | Tel: 096-121-7427 | Facebook:<a href="https://www.facebook.com/kook.sawasdee" title="facebook"><strong>@Eedsawas Ubmalk</strong></a></div>
          <hr/>
          <div class="description-profile"><strong>EDUCATION :</strong> |  KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG, 2015 Bachelor  | U-THONG SCHOOL, 2009 HighSchool </div>
          <ul class="data-user">
        <li><a><strong>80%</strong><span>Java</span></a></li>
        <li><a><strong>80%</strong><span>HTML</span></a></li>
        <li><a><strong>50%</strong><span>JavaScript</span></a></li>
       </ul>
        </div>
        </div>
      <footer>
        <h4>Thank for visit by <a href="https://www.facebook.com/kook.sawasdee" target="_blank" title="kook">kook</a></h4>
        </footer>
      </div>
    );
  }
}

export default App;
