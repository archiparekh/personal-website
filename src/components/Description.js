import React, { Component } from 'react';
import './styles/Description.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Description extends Component {
  render() {
    return (
      <div className="Description">
        <Container p-3 my-3 bg-dark text-white>
          <Row className="align-items-center">
              <br></br>
              <div class="divider"></div>
              <p id="description" class="text-center ">Avid programmer interested in the intersection of tech and sustainability.</p>
          </Row>
        </Container>
        <br></br>
      </div>
    );
  }
}

export default Description;