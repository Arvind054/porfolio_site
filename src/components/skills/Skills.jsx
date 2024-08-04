import React from 'react'
import './skills.css'
import Skill from './skill_comp/skill'
function Skills() {
  return (
    <div id='skills' className='skills'>

       <div className="skills-title">
        <h1>Skills</h1>
      </div>
        <div className="about-skills">
  
            <Skill name="HTML&CSS" level={90}/>
            <Skill name="JavaScript" level={85}/>
            <Skill name="Reactjs" level={90}/>
            <Skill name="NodeJS & EJS" level={85}/>
            <Skill name="MongoDB & SQL" level={90}/>
            <Skill name="RestFul Api's" level={80}/>
        </div> 
        <div className="about-achievements">
         <div className="about-achievement">
          <h1>3+</h1>
          <p>Hackthone participated</p>
         </div>
         <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
         </div>
         <hr />
         <div className="about-achievement">
          <h1>3+</h1>
          <p>Group projects </p>
         </div>
      </div>
    </div>
  )
}

export default Skills
