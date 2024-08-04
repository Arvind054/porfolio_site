import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './skill.css'

function AnimatedProgressBar({ value }) {
  const props = useSpring({ width: `${value}%`, from: { width: '0%' } });

  return (
    <div className="progress-bar">
      <animated.div className="progress" style={props}>
      {props.width.to((val) => `${(value)}`)}
      </animated.div>
    </div>
  );
}

export default AnimatedProgressBar;
