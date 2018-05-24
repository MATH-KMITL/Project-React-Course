import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/resume.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="page-top">
              {/* <span class="d-block d-lg-none">My Resume</span> */}
              <span class="d-none d-lg-block">
                <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./img/11853812_925827104141038_931046431_n.jpg')} alt="" />
              </span>
            </a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
                </li>

              </ul>
            </div>
          </nav>

        </section>
        <div class="container-fluid p-0">
          <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto">
              <h1 class="mb-0">SUNISA
            <span class="text-primary">POOTIM</span>
              </h1>
              <div class="subheading mb-5">27/6 Paknam Bangkhla Chachoengsao 24110,Thailand  TEL.085-3913830.
            <a href="mailto:sunisa.ptm@gmail.com">sunisa.ptm@gmail.com</a>
              </div>
              <p class="mb-5"></p>
              <div class="list-inline list-social-icons mb-0" style={{}} >
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/ao.sunisa.1">
                    <span class="fa-stack fa-lg" style={{}} >
                      <img src={require('./img/facebook.png')} style={{height: 50,width:50}} />
                      {/* <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i> */}
                    </span>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/sunisa-pootim-b40109158/">
                    <span class="fa-stack fa-lg">
                      <img src={require('./img/linkedin.png')} style={{height: 50,width:50}} />
                      {/* <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i> */}
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://github.com/aosunisa">
                    <span class="fa-stack fa-lg">
                      <img src={require('./img/git.jpg')} style={{height: 50,width:50}} />
                      {/* <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i> */}
                    </span>
                  </a>
                </li>
              </div>
            </div>
          </section>




          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div class="my-auto">
              <h2 class="mb-5">Education</h2>

              <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Benchamaracharangsarit School</h3>
                  <div class="subheading mb-3">major of Math-Science</div>

                  <p>GPA: 3.33</p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">MAY 2011 - MARCH 2013</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">King Mongkut's Institute of Technology Ladkrabang</h3>
                  <div class="subheading mb-3">Faculty of Science : Applied Mathematics</div>
                  <p>GPA: 2.94</p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">August 2014 - Present</span>
                </div>
              </div>

            </div>
          </section>

          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div class="my-auto">
              <h2 class="mb-5">Skills</h2>

              <div class="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul class="list-inline list-icons" style={{}} >
                {/* <li class="list-inline-item"> */}
                <div> HTML 5 </div>
                  {/* <i class="devicons devicons-html5"></i> */}
                {/* </li>
                <li class="list-inline-item"> */}
               <div> CSS 3</div>
                  {/* <i class="devicons devicons-css3"></i> */}
                {/* </li>
                <li class="list-inline-item"> */}
               <div> JavaScript</div>
                  {/* <i class="devicons devicons-javascript"></i> */}
                {/* </li> */}

              </ul>



            </div>
          </section>

          <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
            <div class="my-auto">
              <h2 class="mb-5">Interests</h2>
              <p>When I learned about Computer programming,I known about new program.I excited and interested about any program which I don't Know.</p>
              <p class="mb-0">I hope I learn new technology from my job.</p>
            </div>
          </section>



        </div>

        {/* // <!-- Bootstrap core JavaScript --> */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* // <!-- Plugin JavaScript --> */}
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* // <!-- Custom scripts for this template --> */}
        <script src="js/resume.min.js"></script>

      </div>
    );
  }
}

export default App;
