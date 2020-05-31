import React, { Component } from 'react';
import './Hobbies.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class Hobbies extends Component {
  render() {
    return (
      <div className="Hobbies">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>🚗 Hobbies</h1>
          </Col>
          <Col className="align-items-right"></Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <p id="hobbies">In my free time, you'd find me...</p>
            <h3>
            <Typical
                steps={[
                  'baking eggless desserts', 1000, 
                  'making earrings', 1000, 
                  'star gazing', 1000, 
                  'tutoring kids', 1000, 
                  'writing blogs and poetry', 1000, 
                  'watching Marvel movies', 1000, 
                ]}
                loop={Infinity}
                wrapper="h3"
              />
              </h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Link to="/interests">
              <Button variant="outline-info">Check out my creations!</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Hobbies;