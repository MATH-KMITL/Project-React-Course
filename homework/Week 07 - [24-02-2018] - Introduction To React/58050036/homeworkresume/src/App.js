import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrap">

        <img src={require('./images/John.png')} alt="Photo of John" id="pic" />

        <div id="contact-info" class="vcard">

          <h1 class="fn">numfah chanakan</h1>

          <p>
            Tell: <span class="tel">0972712539</span><br />
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">Chanakan.chang@gmail.com</a>
          </p>
        </div>

        <div id="objective">
          <p>
            My name is Chanakan Changwong. 
            BACHELOR DEGREE (3rd year student) 
            at Faculty of science, Department of Applied, Mathematics, 
            King Mongkut’s Institute of Technology Ladkrabang (GPA: 2.83)
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
            <p>Microsoft excel, Oracle, Math Lab, Vb, java</p>

          </dd>

          <dd class="clear"></dd>

          <dt>Qualification</dt>
          <dd>
            <h2>Expertise </h2>
            <ul>
              <li>Java Programming</li>
              <li>Database System</li>
            </ul>

            <h2>Tool</h2>
            <ul>
              <li>MathLab</li>
              <li>Visual Basic</li>
              
            </ul>
          </dd>

          <dd class="clear"></dd>

          <dt>Interests</dt>
          <dd>sports, music</dd>

          <dd class="clear"></dd>

          <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

      </div>
    );
  }
}

export default App;
