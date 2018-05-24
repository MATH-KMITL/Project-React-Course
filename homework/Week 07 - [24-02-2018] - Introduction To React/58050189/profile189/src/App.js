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
                <img src="https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/14212780_1160979357296084_6783723684663381606_n.jpg?_nc_fx=fbkk1-1&_nc_cat=0&oh=0c035afc6b50a7665764d441f561ceeb&oe=5B7EB18D" id="w"/>

                  <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h4 >Apisada Chaitamol</h4>
                  </div>
                </div>
                <div className="w3-container">
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Bangkok, Thailand</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>Apisada.cha@gmail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>0823386638</p>
                  <br />

                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                  <p>Adobe Photoshop</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="a" >80%</div>
                  </div>
                  <p>Java Language</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id ="d">70%</div>
                  </div>
                  <p>Visual Basic</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="f">65%</div>
                  </div>
                  <p>HTML&CSS</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="h">60%</div>
                  </div>
                  <p>Database ORACLE</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="h">60%</div>
                  </div>

                  <p className="w3-large"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                  <p>Thai</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id="l" ></div>
                  </div>
                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" id ="ll"></div>
                  </div><br/>
                </div>
              </div>


            </div>


            <div className="w3-twothird">

              <div className="w3-container w3-card w3-white w3-margin-bottom">
              

                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b> King Mongkut's Institute of Technology Ladkrabang</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                    <p>Faculty of Science in Applied Mathematics. GPA : 3.07</p>
                    <hr/>

                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Saipanya School Under the Royal Patronage of her Majesty the Queen</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2008-2014 </h6>
                    <p>Graduated high school with GPA : 3.02</p>
                    <hr/>

                  </div>
                  <div class="w3-container w3-card w3-white">
                    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
 
                  <div class="w3-container">
                     <h5 class="w3-opacity"><b>TUTOR</b></h5>
                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2016 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                    <p>Teaching mathematics,Thai and English for primary students</p><br/>
                  </div>
                  </div>
                  <div class="w3-container w3-card w3-white">
                     <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-bookmark fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Objective</h2>

                  <div class="w3-container">
                    <p>By obtaining a new challenging experience and be in the part
                        of organization, which offers a professional working
                        environment, help me to achieve my goals as well as  organizational goals.</p><br/>
                  </div>
                  </div>
                </div>


              </div>


            </div>


          </div>

          <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on social media.</p>
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-github w3-hover-opacity"></i>
            <p>Apisada C.</p>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
