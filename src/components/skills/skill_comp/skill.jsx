import React from 'react';
import AnimatedProgressBar from './AnimatedProgressBar';
import './skill.css'
function Skill({ name, level }) {
  return (
    <div className="skill">
      <h4>{name}</h4>
      <AnimatedProgressBar value={level} />
    </div>
  );
}

export default Skill;
