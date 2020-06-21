import React, { Component } from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About'
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import MyNavBar from './MyNavBar';
import Footer from './Footer';
import SocialBar from './SocialBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MyNavBar></MyNavBar>
          <Intro></Intro>
          <About></About>
          <Experience></Experience>
          <Skills></Skills>
          <Hobbies></Hobbies>
          <Footer></Footer>
      </div>
    );
  }
}

export default Home;