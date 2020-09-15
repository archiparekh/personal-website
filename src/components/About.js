import React, { Component } from 'react';
import './styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPic from '../me2.jpg';


class About extends Component {
  render() {
    return (
      <div className="About">
        <Container>
          <h1 class="title">🙋🏽 About Me</h1>

          <div className="mobile-view">
            <Row className="justify-content-md-left">
              <Col id="my-pic-mobile" className="text-center">
                <img src={MyPic} alt="Archi :)))"></img>
              </Col>
            </Row>
            <Row className="justify-content-md-left">
              <Col>
              <br></br>
              <p id="content" class="text-left ">Hi! I'm Archi (she/her) and I'm a sophomore majoring in computer science at {' '}
                  <a href="https://newbrunswick.rutgers.edu/">Rutgers University-New Brunswick</a>
                  {'. '}I'm part of the School of Arts and Sciences Honors Program and am minoring in Economics and Hindi. I enjoy creating and engineering, whether I'm exploring web development, baking vegan cakes, or analyzing data. Currently, I'm a Software QA Intern at Cognition IP, Political Tech Fellow at Bluebonnet Data, and Community Director at USACS. Over quarantine, I've started making jewelry and cooking in my free time.</p>
              </Col>
            </Row>
            <div className="lists">
            <Row className="passionate">
                <p>I'm passionate about</p>
                <ul>
                  <li><strong>Sustainability</strong> and using tech to mitigate climate change</li>
                  <li><strong>Building communities</strong> to support students in STEM and provide safe spaces for minorities</li>
                  <li><strong>Entrepreneurship</strong> for social good</li>
                </ul>
            </Row>
              <Row className="currently-learning">
              <p>Currently I'm learning</p>
                <ul>
                  <li>web dev by building side projects</li>
                  <li>how to run a small business</li>
                  <li>how to drive</li>
                </ul>
              </Row>
              <Row className="find-me">
                <p>Find me</p>
                <ul>
                  <li>Interning at a startup</li>
                  <li>Developing strategy for democratic campaigns</li>
                  <li>Creating jewelry for my business</li>
                  <li>Organizing events for Rutgers CS community</li>
                  <li>On Zoom Uni</li>
                </ul>
              </Row>
              </div>
          </div>
          
          <div className="desktop-view">
            <Row className="justify-content-md-left">
              <Col>
              <br></br>
              <p id="content" class="text-left ">Hi! I'm Archi (she/her) and I'm a sophomore majoring in computer science at {' '}
                  <a href="https://newbrunswick.rutgers.edu/">Rutgers University-New Brunswick</a>
                  {'. '}I'm part of the School of Arts and Sciences Honors Program and am minoring in Economics and Hindi. I enjoy creating and engineering, whether I'm exploring web development, baking vegan cakes, or analyzing data. Currently, I'm a Software QA Intern at Cognition IP, Political Tech Fellow at Bluebonnet Data, and Community Director at USACS. Over quarantine, I've started making jewelry and cooking in my free time.</p>
              </Col>
              <Col id="my-pic" className="text-center">
                <img src={MyPic} alt="Archi :)))"></img>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col className="passionate">
                <p>I'm passionate about</p>
                <ul>
                  <li><strong>Sustainability</strong> and using tech to mitigate climate change</li>
                  <li><strong>Building communities</strong> to support students in STEM and provide safe spaces for minorities</li>
                  <li><strong>Entrepreneurship</strong> and using it for social good</li>
                </ul>
              </Col>
              <Col className="currently-learning">
              <p>Currently I'm learning</p>
                <ul>
                  <li>web dev by building side projects</li>
                  <li>how to run a small business</li>
                  <li>how to drive</li>
                </ul>
              </Col>
              <Col className="find-me">
                <p>Find me</p>
                <ul>
                  <li>Interning at a startup</li>
                  <li>Developing strategy for democratic campaigns</li>
                  <li>Creating jewelry for my business</li>
                  <li>Organizing events for Rutgers CS community</li>
                  <li>On Zoom Uni</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;