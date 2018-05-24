import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrap">

        <img src={require('./images/IMG_0693.JPG')} alt="Photo of John" id="pic" />

        <div id="contact-info" class="vcard">

          <h1 class="fn">Tanate Prapawattanapol</h1>

          <p>
            Tell: <span class="tel">0960467199</span><br />
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">tanate.pr@gmail.com</a>
          </p>
        </div>

        <div id="objective">
          <p>
            My name is Lamai. I study in applied mathematics, but I am also
        expert in music.My motto is  not to be the future of the nation but
         to be the present time of the nation.
            </p>
        </div>

        <div class="clear"></div>

        <dl>
          <dd class="clear"></dd>

          <dt>Education</dt>
          <dd>
            <h2>King Mongkut's Institute of Technology Ladkrabang</h2>
            <p><strong>Major:</strong> applied mathematics</p>
            <h2>Sriwiachai School</h2>
            <p>(Grade 9-12)</p>
          </dd>

          <dd class="clear"></dd>

          <dt>Technical Skills</dt>
          <dd>
            <h2>Programming skills</h2>
            <p>C++, HTML, Javascript, SQL, CSS, Java</p>

          </dd>

          <dd class="clear"></dd>

          <dt>Qualification</dt>
          <dd>
            <h2>Expertise </h2>
            <ul>
              <li>Java Programming</li>
              <li>Java Web Programming</li>
              <li>Database System</li>
            </ul>

            <h2>Tool</h2>
            <ul>
              <li>NetBeans</li>
              <li>MathLab</li>
              <li>Visual Basic</li>
            </ul>
          </dd>

          <dd class="clear"></dd>

          <dt>Interests</dt>
          <dd>Technology and gadget, sports, music</dd>

          <dd class="clear"></dd>

          <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

      </div>
    );
  }
}

export default App;
