import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './css/bootstrap.min.css'; 
// import './css/font-awesome.min.css'; 
import './css/style.css';


class App extends Component {
  state = {
    preloader: true
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ preloader: false })
    }, 500)
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div id="main-wrapper">
          {/* <!-- Page Preloader --> */}
          {
            this.state.preloader &&
            (
              <div id="preloader">
                <div id="status">
                  <div class="status-mes"></div>
                </div>
              </div>
            )
          }

          <div class="columns-block">
            <div class="left-col-block blocks">
              <header class="header">
                <div class="content text-center">
                  <h1>Thanisorn Carpholdee</h1>

                  <p class="lead">KMITL</p>
                  <ul class="social-icon">
                    <li><a href="https://www.facebook.com/thanisorn.carpholdee"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/?lang=th"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://th.linkedin.com/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-slack" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div class="profile-img"><img class="sw" src="https://raw.githubusercontent.com/rosebless/Resume/master/img/po.jpg" height="100%" /></div>
              </header>
              {/* <!-- .header--> */}
            </div>


            <div class="right-col-block blocks">
              <section class="intro section-wrapper">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="section-title">
                        <h2>What I am all about.</h2>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <p>
                        My name is Thanisorn Carpholdee. I study in applied mathematics, but I am also
                        expert in computer programming and data analysis. Moreover, I am a hard working,
                        enthusiatic, and fast learning person. I have both an excellent analytical
                        and problem solving skills.I am able to work under high pressure
                        condition as well. I hope that my skills will be useful for this job.
                </p>
                    </div>
                  </div>
                </div>
              </section>


              <section class="expertise-wrapper section-wrapper gray-bg">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="section-title">
                        <h2>Expertise</h2>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .row --> */}

                  <div class="row">
                    <div class="col-md-6">
                      <div class="expertise-item">
                        <h3>Mobile Application</h3>
                        <p>
                          I can use Xamarin framwork and React Native to create mobile application for both platform ( Android and iOS).
                    </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="expertise-item">
                        <h3>Computer Application</h3>
                        <p>
                          I can use Java or C# language to create application for computer.
                    </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .row --> */}
                  <div class="row">
                    <div class="col-md-6">
                      <div class="expertise-item">
                        <h3>Data Analysis</h3>
                      </div>
                      <p>
                        I can use Excel or R language to analys a data.
                </p>
                    </div>

                    <div class="col-md-6">
                      <div class="expertise-item">

                      </div>
                    </div>
                  </div>
                  {/* <!-- .row --> */}
                </div>
                {/* <!--.container-fluid--> */}
              </section>
              {/* <!-- .expertise-wrapper --> */}

              <section class="section-wrapper skills-wrapper"  >
                <div class="container-fluid" >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="section-title">
                        <h2>Skills</h2>
                      </div>
                    </div>
                  </div>
                  {/* <!--.row--> */}
                  <div class="row">
                    <div class="col-md-12">
                      <div class="progress-wrapper" >

                        <div class="progress-item" >
                          <span class="progress-title" >Learning</span>

                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '92%' }} ><span class="progress-percent"> 92%</span>
                            </div>
                          </div>
                          {/* <!-- .progress --> */}
                        </div>
                        {/* <!-- .skill-progress --> */}


                        <div class="progress-item">
                          <span class="progress-title">Programming</span>

                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '75%' }} ><span class="progress-percent"> 75%</span>
                            </div>
                          </div>
                          {/* <!-- /.progress --> */}
                        </div>
                        {/* <!-- /.skill-progress --> */}


                        <div class="progress-item">
                          <span class="progress-title">Data Analysis</span>

                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="81" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '81%' }} ><span class="progress-percent"> 81%</span>
                            </div>
                          </div>
                          {/* <!-- /.progress --> */}
                        </div>
                        {/* <!-- /.skill-progress --> */}

                        <div class="progress-item">
                          <span class="progress-title">Leader</span>

                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="46" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '57%' }} ><span class="progress-percent"> 57%</span>
                            </div>
                          </div>
                          {/* <!-- /.progress --> */}
                        </div>
                        {/* <!-- /.skill-progress --> */}
                        <div class="progress-item">
                          <span class="progress-title">Business Logic</span>

                          <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="63" aria-valuemin="0"
                              aria-valuemax="100" style={{ width: '63%' }}><span class="progress-percent"> 63%</span>
                            </div>
                          </div>
                          {/* <!-- .progress --> */}
                        </div>
                        {/* <!-- .skill-progress --> */}

                      </div>
                      {/* <!-- /.progress-wrapper --> */}
                    </div>
                  </div>
                  {/* <!--.row --> */}
                </div>
                {/* <!-- .container-fluid --> */}
              </section>
              {/* <!-- .skills-wrapper --> */}

              <section class="section-wrapper section-education">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="section-title"><h2>Education</h2></div>
                    </div>
                  </div>
                  {/* <!--.row--> */}
                  <div class="row">
                    <div class="col-md-12">
                      <div class="content-item">
                        <small>2014 - 2018</small>
                        <h3>Bachelor of Science Mathematics</h3>
                        <h4>King Mongkut's Institute of Technology Ladkrabang</h4>

                        <p>Bangkok, Thailand</p>
                      </div>
                    </div>
                  </div>
                  {/* <!--.row--> */}
                </div>
                {/* <!-- .container-fluid --> */}

              </section>
              {/* <!-- .section-education --> */}

              <section class="section-contact section-wrapper gray-bg">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="section-title">
                        <h2>Contact</h2>
                      </div>
                    </div>
                  </div>
                  {/* <!--.row--> */}
                  <div class="row">
                    <div class="col-md-12">
                      <address>
                        <strong>Address</strong>
                        <p>
                          10, Ramkhamhaeng 117 Huamark Bangkapi Bangkok, 10240 Thailand
                    </p>
                      </address>

                      <address>
                        <strong>Mobile Number</strong>
                        <p>
                          +66 80 451 5666
                    </p>
                      </address>
                      <address>
                        <strong>Email</strong>
                        <p>
                          <a href="mailto:#">thanisorn.ca@gmail.com</a>
                        </p>
                      </address>
                    </div>
                  </div>
                </div>
                {/* <!--.container-fluid--> */}
              </section>
              {/* <!--.section-contact--> */}

            </div>
            {/* <!-- .right-col-block --> */}
          </div>
          {/* <!-- .columns-block --> */}
        </div>
        {/* <!-- #main-wrapper --> */}

        {/* <!-- jquery --> */}
        <script src="js/jquery-2.1.4.min.js"></script>

        {/* <!-- Bootstrap --> */}
        <script src="js/bootstrap.min.js"></script>
        <script src="js/scripts.js"></script>
      </div>
    );
  }
}

export default App;
