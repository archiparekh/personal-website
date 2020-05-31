import React, { Component } from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About'
import Description from './Description';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import SocialBar from './SocialBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation></Navigation>
        <Container fluid>
          <Intro></Intro>
          <Description></Description>
          <About></About>
          <Experience></Experience>
          <Skills></Skills>
          <Hobbies></Hobbies>
        </Container>
      <footer>
      <SocialBar></SocialBar>
      </footer>
      </div>
    );
  }
}

export default Home;