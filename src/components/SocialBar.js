import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaMediumM, FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from "react-icons";

class Social extends Component {
  render() {
    return (
      <div class="Social">
        <p id="reach-out">Get in Touch</p>
        <div class="social-sidebar" >
          <div>
          <a href="https://github.com/archiparekh">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/archi-parekh-037939169/">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaLinkedinIn />
            </IconContext.Provider>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010031809265">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a href="mailto:archiparekh23@gmail.com">
            <IconContext.Provider value={{ color: "black", size: "4em", className: "react-icons" }}>
              <MdEmail />
            </IconContext.Provider>
          </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Social;