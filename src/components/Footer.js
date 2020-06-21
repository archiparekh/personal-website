import React, { Component } from 'react';
import './Footer.css';
import SkillItem from './SkillItem.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Line, Circle } from 'rc-progress';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center">
              <p id="footer-text">Thanks for stopping by! Feel free to reach out! I'm always open to new opportunities, connections, and conversations.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;