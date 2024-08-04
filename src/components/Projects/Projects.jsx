import React from "react";
import theme_pattern from '../..//assets/theme_pattern.svg'
import "./projects.css";
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
const Projects = () => {
  return <div className="MyWork" id="projects">
          <div className="myWork-title">
            <h1>Projects</h1>
            
          </div>
          <div className="myWork-container">
                {mywork_data.map((work, index)=>{
                       return (
                        <img ket={index} src={work.w_img} alt="" />
                       )
                })}
            
          </div>
          <div className="myWork-showMore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
          </div>
  </div>;
};

export default Projects;
