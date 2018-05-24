import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';
import Img from 'react-image'

class App extends Component {
  render() {

    return (
      <div className="w3-light-grey">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto/' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </MetaTags>
        <div className="w3-content w3-margin-top" id="q">
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/16174406_1808071659438566_989443995210224240_n.jpg?_nc_cat=0&_nc_eui2=AeFN4WALeeYxsepdAgsEEorK9LNbvt2sPEW0b9FcHVr3vH5M90KGAlVDDyW-oAFvqGxFZzDmcz_3chc0bi0G-8KwwJ0Eniu7O8bq1NavyFDU3Q&oh=7f5c6029f5e1267c96076d8a247fa204&oe=5B955833" id="w"/>

                  <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h4 >Aphisit Thesngamthuan</h4>
                  </div>
                </div>
                <div className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Student</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>53 Sukumvit 49/18 Lane,
        Khlong Tan Nuea Sub-district,
        Wattana District , Bangkok,
10110</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>aphisitthn@gmail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>0917766804</p>
                  <br />

                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                  <p>Adobe Photoshop</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="a" >50%</div>
                  </div>
                  <p>Java Language</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id ="aa">60%

                    </div>
                  </div>
                  <p>Visual Basic</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="d">70%</div>
                  </div>
                  <p>Database-ORACLE</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="f">65%</div>
                  </div>
                  <p>HTML</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="h">60%</div>
                  </div>
                </div>
              </div>


            </div>


            <div className="w3-twothird">

              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>About me</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>My name is Aphisit Thesngamthuan
        I study in applied mathematics.I am
        seeking a company where  I can use
        my experience and education to help
        the company meet and surpass its
goals.</b></h5>




                </div>

                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b> Bachelor of Arts</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2015-Present</h6>
                    <p>King Mongkut's Institute of Technology Ladkrabang</p>

                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>High School</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2008-2014 </h6>
                    <p>Nongchokpitayanusornmattayom School</p>

                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b> Elemantary School</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2002-2007</h6>
                    <p>Minprasatwitaya School</p>
                  </div>
                </div>


              </div>


            </div>


          </div>

          <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on social media.</p>
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>

            <p>Powered by <a>Ka-Hnun Thn</a></p>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
