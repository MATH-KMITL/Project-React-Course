import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrap">

        <img src={require('./images/John.png')} alt="Photo of John" id="pic" />

        <div id="contact-info" class="vcard">

          <h1 class="fn">Yo Kantaporn</h1>

          <p>
            Tell: <span class="tel">Kantaporn Thongsopa</span><br />
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">kantaporn.tho@hotmail.com</a>
          </p>
        </div>

        <div id="objective">
          <p>
            My name is Kantaporn Thongsopa.
            BACHELOR DEGREE (3rd year student) 
            at Faculty of science, Department of Applied, Mathematics, 
            King Mongkut’s Institute of Technology Ladkrabang (GPA:3.18)
            </p>
        </div>

        <div class="clear"></div>

        <dl>
          <dd class="clear"></dd>

          <dt>Education</dt>
          <dd>
            <h2>King Mongkut's Institute of Technology Ladkrabang</h2>
            <p><strong>Major:</strong> applied mathematics</p>
             </dd>

          <dd class="clear"></dd>

          <dt>Technical Skills</dt>
          <dd>
            <h2>Programming skills</h2>
            <p> Javascript, SQL, CSS, Java</p>

          </dd>

          <dd class="clear"></dd>

          <dt>Qualification</dt>
          <dd>
            <h2>Expertise </h2>
            <ul>
              <li>Java Programming</li>
              <li>Vb</li>
              <li>Database System</li>
            </ul>

            <h2>Tool</h2>
            <ul>
              <li>MathLab</li>
              <li>Visual Basic</li>
              <li>SQL*Plus</li>
            </ul>
          </dd>

          <dd class="clear"></dd>

          <dt>Interests</dt>
          <dd>music and Act crazy</dd>

          <dd class="clear"></dd>

          <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

      </div>
    );
  }
}

export default App;
