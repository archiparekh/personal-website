import React, { Component } from 'react';
import './Experience.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1>👩🏽‍💻 Experience</h1>
            </Col>
            <Col>
              <br></br>
              <p id="work-description" class="text-left ">As part of {' '}
                <a href="https://www.mcvts.net/edison">Middlesex County Academy for SMET's Electrical Engineering Program</a>, 
                I've explored circuit analysis, microcontrollers, and more. Some fun projects I've worked on include a propellor clock. For my capstone project, I designed {' '}
                <a href="https://github.com/archiparekh/mecovery-band">Mecovery</a>, a wearable physical therapy assistant. Currently, I am a Quality Assurance Intern at {' '}
                <a href="https://www.cognitionip.com/">CognitionIP.</a>
              </p>
              <br></br>
            </Col>
          </Row>
          <Row>
          <Col className="text-right">
            <Link to="/work">
              <Button variant="outline-info">Check out my projects!</Button>
            </Link>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Experience;