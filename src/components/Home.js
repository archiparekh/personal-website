import React from 'react';
import './Home.css';
import InfoBlock from './InfoBlock.js';
import Interests from './Interests.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Me from '../me2.jpg';


export function Home() {
  return (
    <div className="Home">
      <div id="person">
        <div id="headshot-place">
          <img  id="headshot" src={Me} alt="Me"/> 
        </div>
        <div id="hi">
          <h1 >Hi there!</h1>
          <h1 >I'm Archi.</h1>
        </div>
      </div>

      <div className="Intro">
        <br></br>
        <h2>Programmer. Student. Feminist. Baker.</h2>
        <p>Passionate programmer interested in the intersection of technology and sustainability.</p>
      </div>


      <div id = "about-me">
      <InfoBlock 
        title="About Me"
        content="Hi! I'm a sophomore at Rutgers University-New Brunswick majoring in computer science with minors in economics and Hindi. I'm interested in telling stories through the massive amount of data generated in the tech economy every day. ">
        </InfoBlock>
        </div>

      <div id="work">
      <InfoBlock
        title="Work"
        content="As part of my high school Electrical and Computer Engineering Technologies senior capstone project, I designed MeCovery, a wearable physical therapy assistant. Currently, I'm a Quality Assurance intern at Cognition IP. "
        link="/work"
        >
        </InfoBlock>
        </div>

        <div id="skills">
        <Skills></Skills>
        </div>

        <div id="interests">
        <Interests></Interests>     
        </div> 
      <div id="footer-div">
      <footer>
          <p>Contact me! </p>
          <Contact></Contact>
        
      </footer>
      </div> 

    </div>
  );
}

export default Home;
