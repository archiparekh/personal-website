import React, { Component } from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class About extends Component {
  render() {
    return (
      <div className="About">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1>🙋🏽 About Me</h1>
            </Col>
            <Col>
              <br></br>
              <p id="about-me" class="text-left ">I'm Archi, a rising sophomore at {' '}
              <a href="https://newbrunswick.rutgers.edu/">Rutgers University-New Brunswick</a>
               {' '} majoring in computer science with minors in Economics and Hindi. I enjoy creating and engineering, whether I'm exploring web development, baking vegan cakes, or analyzing data . Passionate about the CS community both on campus and in the industry, I aspire to leverage technology to drive sustainability initiatives. Currently, I'm learning about the industry through internships, projects, and peers. </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;