import React, { Component } from 'react';
import Navigation from './Navigation';
import ProjectCard from './ProjectCard';
import './Interests.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <Navigation></Navigation>
        <Container>
          <Row>
            <Col>
            <br></br>
            <h1 id="title">Just for fun 😄</h1>
            <h2 id="subtitle">Check out my creations!</h2>
            <br></br>
            </Col>
          </Row>            
        </Container>
      </div>
    );
  }
}

export default Interests;