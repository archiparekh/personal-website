import React, { Component } from 'react';
import './Intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical'
import MyPic from '../me2.jpg';
import { FaMediumM, FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from "react-icons";
import { GrDocument } from "react-icons/gr";
import Resume from '../Archi-Parekh-Resume.pdf';



class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <Container>
        <br></br>
        <br></br>
        <br></br>
        <p id="hi">Hi there! I'm </p>
        <h1 id="name">Archi Parekh.</h1>
        <h2 id="description">A student developer interested in the intersection of tech and sustainability.</h2>
        <div class="socials" >
          <p id="divider">________________</p>
          <div>
          <a href="https://github.com/archiparekh" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/archi-parekh-037939169/" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaLinkedinIn />
            </IconContext.Provider>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010031809265" target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a href="mailto:archiparekh23@gmail.com">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <MdEmail />
            </IconContext.Provider>
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <GrDocument />
            </IconContext.Provider>
          </a>
          </div>
        </div>
        </Container>
      </div>
    );
  }
}

export default Intro;