import React, { Component } from 'react';
import './Intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical'
import MyPic from '../me2.jpg';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <br></br>
        <br></br>
        <Container>
          <Row className="align-items-center">
            <Col>
              <img src={MyPic} alt='Archi' />
            </Col>
            <Col>
              <p id="intro-typing-effect">
              <Typical
                steps={['Hi there! \nI\'m Archi.', 1000]}
                loop={Infinity}
                wrapper="p"
              />
              </p>
              <br></br>

            </Col>
          </Row>
        </Container>
        <hr></hr>
      </div>
    );
  }
}

export default Intro;