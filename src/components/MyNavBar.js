import React, { Component } from "react";
import './styles/MyNavBar.css';
import { Link } from "react-scroll";


export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand">
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
          </h1>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
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
              <li className="nav-item dropdown">
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
        </nav>
      </div>
    );
  }
}
