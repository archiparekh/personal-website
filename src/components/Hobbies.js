import React, { Component } from 'react';
import './styles/Hobbies.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical';


class Hobbies extends Component {
  render() {
    return (
      <div className="Hobbies">
      <Container>
      <h1 className="title">🚗 Hobbies</h1>
        
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
      </Container>

    </div>
    );
  }
}

export default Hobbies;