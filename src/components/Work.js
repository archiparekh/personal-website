import React, { Component } from 'react';
import Navigation from './Navigation';
import ProjectCard from './ProjectCard';
import './Work.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
class Work extends Component {
  render() {
    return (
      <div className="Work">
        <Navigation></Navigation>
        <Container>
          <Row>
            <Col>
            <br></br>
            <h1 id="title">Projects</h1>
            <h2 id="subtitle">Here are a few of my projects.</h2>
            <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard
                title="MeCovery"
                subtitle="@MCA"
                text="A wearable physical therapy assistant which alerts patients when they are overexerting their joints. "
              ></ProjectCard>
            </Col>
            <Col>
              <ProjectCard
                title="Quality Assurance Intern"
                subtitle="@CognitionIP"
                text="Testing codebase"
                ></ProjectCard>
            </Col>
            <Col>
            <ProjectCard
              title="Portfolio"
              subtitle="@SideProject"
              text="Learning React.js and UI/UX design by developing multiple iterations of my portfolio."
            ></ProjectCard>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work;