import React, { Component } from "react";
import logo from "../logo.svg";
import './MyNavBar.css';
import About from './About';
import Hobbies from './Hobbies';
import { Row, Container, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


export default class MyNavbar extends Component {
  render() {
    return (
      <div className="MyNavBar">
        <Container fluid >
          <Row>
            <Col className="text-left">
              <p className="nav-brand">
              <Link
                      activeClass="active"
                      to="Intro"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                    😀 Archi Parekh
                    </Link>
                </p>
            </Col>
            <Col className="text-right">
              <div className="nav-content">
                <ul className="nav-items">
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="Experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="Hobbies"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Hobbies
                    </Link>
                  </li>

                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
