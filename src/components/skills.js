import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section" id='skills'>
      <div className="container">
        <div className="skills-container">
          <h1>Services</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
