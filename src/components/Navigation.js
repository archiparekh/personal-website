import React, { Component } from 'react';
import './Navigation.css';

import Resume from '../Archi-Parekh-Resume.pdf';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Experience from './Experience';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
 
class Navigation extends Component {
  render() {
    return(
      <div className="Navigation">
        <Navbar bg="light" variant="light" sticky="top">
          <Navbar.Brand href="/">😀 Archi Parekh</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="experience">Work</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
 
export default Navigation;