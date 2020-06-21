import React, { Component } from 'react';
import './SkillItem.css';
import { Line } from 'rc-progress';


class SkillItem extends Component {
  render() {
    return (
      <div className="SkillItem">
        <Line percent={this.props.level} strokeWidth="1" strokeColor="#2B50AA" trailColor="#4EA5D9"/>
        <p id="skill-title" class="text-left">{this.props.skill}</p>
      </div>
    );
  }
}

export default SkillItem;