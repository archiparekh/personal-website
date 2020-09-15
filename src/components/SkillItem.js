import React, { Component } from 'react';
import './styles/SkillItem.css';
import { Line } from 'rc-progress';


class SkillItem extends Component {
  render() {
    return (
      <div>

      <div className="skill-pill">
        <h2>{this.props.skill}</h2>
      </div>
      </div>
    );
  }
}

export default SkillItem;