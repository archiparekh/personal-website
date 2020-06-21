import React, { Component } from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPic from '../me2.jpg';


class About extends Component {
  render() {
    return (
      <div className="About">
          <Container>
            <Row className="justify-content-md-left">
              <Col>
                <h1 class="title">🙋🏽 About Me</h1>
                <br></br>
                <p id="content" class="text-left ">I'm a rising sophomore at {' '}
                  <a href="https://newbrunswick.rutgers.edu/">Rutgers University-New Brunswick</a>
                  {' '} majoring in computer science with minors in Economics and Hindi. I enjoy creating and engineering, whether I'm exploring web development, baking vegan cakes, or analyzing data . Passionate about the CS community, I serve as Community Director of Rutgers USACS, encouraging a supportive, safe, and educational community for CS students at Rutgers. I aspire to leverage technology to drive sustainability initiatives.</p>
              </Col>
              <Col className="text-center">
                <img src={MyPic} alt="Archi :)))"></img>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default About;