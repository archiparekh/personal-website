import React, { Component } from 'react';
import './styles/Skills.css';
import SkillItem from './SkillItem.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="title">💯 Skills</h1>
            </Col>
            <Col className="align-items-right">
              <br></br>
            </Col>
          </Row>
          <Row className="align-items-right">
            <Col>
              <SkillItem skill="Java" level="100"></SkillItem>
              <SkillItem skill="C" level="80"></SkillItem>
              <SkillItem skill="C++" level="80"></SkillItem>
              <SkillItem skill="Power BI" level="80"></SkillItem>
              <SkillItem skill="Typescript" level="60"></SkillItem>
            </Col>
            <Col className="align-items-right">
              <SkillItem skill="Javascript" level="60"></SkillItem>
              <SkillItem skill="HTML" level="60"></SkillItem>
              <SkillItem skill="CSS" level="40"></SkillItem>
              <SkillItem skill="React" level="20"></SkillItem>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;