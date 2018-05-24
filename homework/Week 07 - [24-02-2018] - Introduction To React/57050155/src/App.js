import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrap">

        <img src={require('./images/John.png')} alt="Photo of John" id="pic" />

        <div id="contact-info" class="vcard">

          <h1 class="fn">Anawat Loh</h1>

          <p>
            Tell: <span class="tel">088-225-2769</span><br />
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">ohhjohn07@gmail.com</a>
          </p>
        </div>

        <div id="objective">
          <p>
            My name is Anawat Loh. I study in applied mathematics, but I am also
        expert in computer programming. Moreover, I am a hard working,
        enthusiatic, and fast learning person. I have both an excellent analytical
        and problem solving skills.I am able to work under high pressure
        condition as well. I hope that my skills will be useful for this job.
            </p>
        </div>

        <div class="clear"></div>

        <dl>
          <dd class="clear"></dd>

          <dt>Education</dt>
          <dd>
            <h2>King Mongkut's Institute of Technology Ladkrabang</h2>
            <p><strong>Major:</strong> applied mathematics</p>
            <h2>Arunothai School Lampang</h2>
            <p>(Grade 1-12)</p>
          </dd>

          <dd class="clear"></dd>

          <dt>Technical Skills</dt>
          <dd>
            <h2>Programming skills</h2>
            <p>C++, HTML, Javascript, PHP, SQL, CSS, c#, Java</p>

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
              <li>SQL*Plus</li>
            </ul>
          </dd>

          <dd class="clear"></dd>

          <dt>Interests</dt>
          <dd>Technology and gadget, business, reading, community
                involvement, sports, music</dd>

          <dd class="clear"></dd>

          <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

      </div>
    );
  }
}

export default App;
