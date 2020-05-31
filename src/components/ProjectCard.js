import React, { Component } from 'react';
import './ProjectCard.css';
import Card from 'react-bootstrap/Card';
class ProjectCard extends Component {
  getProjectRoute = (title) => {
    let route = title.toLowerCase().replace(/\s/g, '');
    return route;
  };

  render() {
    return (
      <div className="ProjectCard">
        <Card style={{ width: '18rem' }}  text="white" bg="primary">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle className="mb-2" text="white">{this.props.subtitle}</Card.Subtitle>
            <Card.Text>{this.props.text}</Card.Text>
            <Card.Link href={this.getProjectRoute(this.props.title)}>Learn more→</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;