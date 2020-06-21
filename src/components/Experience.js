import React, { Component } from 'react';
import './styles/Experience.css';
import Container from 'react-bootstrap/Container';
import WorkAccordion from './WorkAccordion';


class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <Container>

        <h1 className="title">👩🏽‍💻 Experience</h1>
        <br></br>
        <p id="content" class="text-left ">As part of {' '}
          <a href="https://www.mcvts.net/edison">Middlesex County Academy for SMET's Electrical Engineering Program</a>,
                I've explored circuit analysis, microcontrollers, and more. Some fun projects I've worked on include a propellor clock. For my capstone project, I designed {' '}
          <a href="https://github.com/archiparekh/mecovery-band">Mecovery</a>, a wearable physical therapy assistant. Currently, I am a Quality Assurance Intern at {' '}
          <a href="https://www.cognitionip.com/">CognitionIP.</a>
        </p>
        
        </Container>
        <WorkAccordion></WorkAccordion>

      </div>
    );
  }
}

export default Experience;