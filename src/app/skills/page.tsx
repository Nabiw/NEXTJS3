import React from "react";

const skillsData = [
  { name: "JavaScript", level: 70, icon: "fab fa-js-square" },
  { name: "TypeScript", level: 80, icon: "fab fa-js-square" },
  { name: "React", level: 83, icon: "fab fa-react" },
  { name: "Next.js", level: 90, icon: "fab fa-react" },
  { name: "Node.js", level: 85, icon: "fab fa-node-js" },
  { name: "Tailwind CSS", level: 70, icon: "fab fa-css3-alt" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            My Skills
          </h2>
          <p className="skills-subtitle">
            
          </p>
        </div>

        <div className="skills-list">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-info">
                <div className="flex">
                  <i className={`${skill.icon}`}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
