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
        <p id="content" class="text-left ">Check out some of the projects I've worked on!
        </p>
        
        </Container>
        <WorkAccordion></WorkAccordion>

      </div>
    );
  }
}

export default Experience;