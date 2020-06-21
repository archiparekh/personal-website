import React, { Component } from 'react';
import './Button.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';


class MyButton extends Component {
  render() {
    return (
      <div className="Button">
        <p className="button-text">{this.props.title}</p>
      </div>
    );
  }
}

export default MyButton;