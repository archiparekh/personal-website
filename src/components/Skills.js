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
          <h1 className="title">💯 Skills</h1>
          <div class="desktop-view">
            <p>Languages</p>
            <div className="skills-wrapper">
              <SkillItem skill="Java" level="100"></SkillItem>
              <SkillItem skill="Typescript" level="60"></SkillItem>
              <SkillItem skill="Javascript" level="60"></SkillItem>
              <SkillItem skill="HTML" level="60"></SkillItem>
              <SkillItem skill="CSS" level="40"></SkillItem>
              <SkillItem skill="C" level="80"></SkillItem>
              <SkillItem skill="C++" level="80"></SkillItem>
            </div>
            <br></br>

            <p>Technologies</p>
            <div className="skills-wrapper">
              <SkillItem skill="Angular" level="100"></SkillItem>
              <SkillItem skill="Express" level="80"></SkillItem>
              <SkillItem skill="MongoDB" level="80"></SkillItem>
              <SkillItem skill="Node.js" level="80"></SkillItem>
              <SkillItem skill="Git" level="60"></SkillItem>
              <SkillItem skill="Cypress" level="60"></SkillItem>
              <SkillItem skill="Mocha/Chai" level="60"></SkillItem>
              <SkillItem skill="React" level="40"></SkillItem>
              <SkillItem skill="Power BI" level="20"></SkillItem>
            </div>
          </div>

          <div class="mobile-view">
            <p>Languages</p>
            <div className="skills-wrapper">
              <SkillItem skill="Java" level="100"></SkillItem>
              <SkillItem skill="Typescript" level="60"></SkillItem>
              <SkillItem skill="Javascript" level="60"></SkillItem>
              <SkillItem skill="HTML" level="60"></SkillItem>
              <SkillItem skill="CSS" level="40"></SkillItem>
            </div>
            <div className="skills-wrapper">
              <SkillItem skill="C" level="80"></SkillItem>
              <SkillItem skill="C++" level="80"></SkillItem>
            </div>
            <br></br>

            <p>Technologies</p>
            <div className="skills-wrapper">
              <SkillItem skill="Angular" level="100"></SkillItem>
              <SkillItem skill="Express" level="80"></SkillItem>
              <SkillItem skill="MongoDB" level="80"></SkillItem>
              <SkillItem skill="Node.js" level="80"></SkillItem>
              <SkillItem skill="Git" level="60"></SkillItem>
            </div>
            <div className="skills-wrapper">
              <SkillItem skill="Cypress" level="60"></SkillItem>
              <SkillItem skill="Mocha/Chai" level="60"></SkillItem>
              <SkillItem skill="React" level="40"></SkillItem>
              <SkillItem skill="Power BI" level="20"></SkillItem>
            </div>
            <div className="skills-wrapper">
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Skills;