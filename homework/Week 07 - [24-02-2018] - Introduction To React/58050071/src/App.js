import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import  '../css/bootstrap.css';
// import '../css/font-awesome.min.css';
// import './main.css';
import './css/main.css'

class App extends Component {
  render() {

    // var doughnutDataa = [
    //   {
    //     value: 60,
    //     color: "#1abc9c"
    //   },
    //   {
    //     value: 40,
    //     color: "#ecf0f1"
    //   }
    // ];
    // var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutDataa);
    // var doughnutDatab = [
    //   {
    //     value: 70,
    //     color: "#1abc9c"
    //   },
    //   {
    //     value: 30,
    //     color: "#ecf0f1"
    //   }
    // ];
    // var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutDatab);
    // var doughnutDatac = [
    //   {
    //     value: 80,
    //     color: "#1abc9c"
    //   },
    //   {
    //     value: 20,
    //     color: "#ecf0f1"
    //   }
    // ];
    // var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutDatac);
    // var doughnutDatad = [
    //   {
    //     value: 70,
    //     color: "#1abc9c"
    //   },
    //   {
    //     value: 30,
    //     color: "#ecf0f1"
    //   }
    // ];
    // var myDoughnut = new Chart(document.getElementById("C#").getContext("2d")).Doughnut(doughnutDatad);

    return (
      <div>
        <div id="section-topbar">
          <div id="topbar-inner">
            <div class="container">
              <div class="row">
                <div class="dropdown">
                  <ul id="nav" class="nav">
                    <li class="menu-item"><a class="smoothScroll" href="#about" title="About"><img src={require("./img/icons/icon_profile.png")}/></a></li>
                    <li class="menu-item"><a class="smoothScroll" href="#resume" title="Resume"><img src={require("./img/icons/icon_resume.png")}/></a></li>
                    {/* <li class="menu-item"><a class="smoothScroll" href="#work" title="Works"><img src={require("./img/icons/icon_works.png")}/></a></li> */}
                    <li class="menu-item"><a class="smoothScroll" href="#contact" title="Contact"><img src={require("./img/icons/icon_testimonials.png")}/></a></li>
                  </ul>
                </div>

                <div class="clear"></div>
              </div>
            </div>

            <div class="clear"></div>
          </div>
        </div>

        <div id="headerwrap" style={ { backgroundImage: `url(${require("./img/header-bg.jpg")})` } } >
          {/* <img src={'./img/header-bg.jpg'} style ={{height: 300}} /> */}
          <div class="container">
            <div class="row centered">
              <div class="col-lg-12">
                <h1>Thanapoom Punbusayakul</h1>
                <h3>thanapoom2.panbusayakul@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>


        <section id="about" name="about"></section>
        <div id="intro">
          <div class="container">
            <div class="row">

              <div class="col-lg-2 col-lg-offset-1">
                <h5>ABOUT</h5>
              </div>
              <div class="col-lg-6">
                <p> <p>Saint Louts chachoengsao </p>
                    <p>since 2000-2011</p>
                    <p>Benchamaratcharungsarit chachoengsao</p>
                    <p>since 2012-2014</p>
                    <p>King Mongkut’s Institute Of Technology ladkrabang</p>
                    <p>In progress</p></p>
              </div>
            </div>
          </div>
        </div>


        <section id="resume" name="resume"></section>

        <div class="container desc">
          <div class="row">

            <div class="col-lg-2 col-lg-offset-1">
              <h5>WORK</h5>
            </div>
            <div class="col-lg-6">
              <p><t>-</t><br />
              </p>

            </div>
          </div>
          {/* <br>
		<hr> */}
        </div>

        <div id="skillswrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-lg-offset-1">
                <h5>SKILLS</h5>
              </div>
              <div class="col-lg-3 centered">
                <canvas id="javascript" height="130" width="130"></canvas>
                <p>Javascript</p>
                {/* <br> */}
                <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '75%' }} ><span class="progress-percent"> 75%</span>
                            </div>
                </div>
              </div>
              <div class="col-lg-3 centered">
                <canvas id="photoshop" height="130" width="130"></canvas>
                <p>gamemer</p>
                {/* <br> */}
                <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: '99%' }} ><span class="progress-percent"> 99%</span>
                </div>
              </div>
              </div>

              <div class="col-lg-3 col-lg-offset-3 centered">
                <canvas id="html" height="130" width="130"></canvas>
                <p>HTML/CSS</p>
                {/* <br> */}
                <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: '75%' }} ><span class="progress-percent"> 75%</span>
                </div>
                </div>
              </div>
              <div class="col-lg-3 centered">
                <canvas id="C#" height="130" width="130"></canvas>
                <p>C#</p>
                {/* <br> */}
                <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: '75%' }} ><span class="progress-percent"> 75%</span>
                </div>
               </div>
              </div>
            </div>
            {/* <br> */}
          </div>
        </div>


        <section id="contact" name="contact"></section>
        <div id="footwrap">
          <div class="container">
            <div class="row">

              <div class="col-lg-2 col-lg-offset-1">
                <h5>CONTACT</h5>
              </div>
              <div class="col-lg-6">
                <p><t>Email</t><br />
                thanapoom2.panbusayakul@gmail.com <br />
                </p>
                <p><t>Adress</t><br />
                <li>Address: 9 Rd.chompon</li>
                <li>Tambon : Namuang Amphur : Muang  Province : Chachoengsao  24000</li>
                <li>date of Birth : 19 January 1997</li>
                <li>Age : 21</li>
                <li>Nationality : Thai</li>
                <li>Marital status : Single</li> 
                </p>
                <p><t>Phone</t><br />
                  091-4063780 <br />
                </p>
              </div>
              <div class="col-lg-3">
                <p><sm>SOCIAL LINKS</sm></p>
                <p>


                  <a href="https://www.facebook.com/mick.aungkharuengrattana"><img src={require("./img/icons/icon_facebook.png")}/></a>
                  {/* </br> */}
                  <p>Mickey Punbusayakul</p>
                  {/* </br> */} 



                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="c">
          <div class="container">
            <p>Created by <a href="http://www.blacktie.co">BLACKTIE.CO</a></p>

          </div>
        </div>

        <script src="assets/js/bootstrap.js"></script>
      </div>
    );
  }
}

export default App;
