import React, { Component } from 'react';
import './styles/Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center">
              <p id="footer-text">Thanks for stopping by! Feel free to reach out to chat. I'm always open to new opportunities, connections, and conversations.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;