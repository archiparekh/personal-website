import React, { Component } from 'react';
import './SkillItem.css';
import { Line } from 'rc-progress';


class SkillItem extends Component {
  render() {
    return (
      <div className="SkillItem">
        <Line percent={this.props.level} strokeWidth="1" strokeColor="#4093a4" trailColor="#e0fffb"/>
        <p id="skill-title" class="text-left">{this.props.skill}</p>
        <br></br>
      </div>
    );
  }
}

export default SkillItem;