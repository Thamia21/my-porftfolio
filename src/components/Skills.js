import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: 'devicon-react-original colored', level: 75 },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 70 },
        { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 95 },
        { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 90 },
        { name: 'Python', icon: 'devicon-python-plain colored', level: 80 },
      ]
    },
    {
      category: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 70 },
        { name: 'Python', icon: 'devicon-python-plain colored', level: 80 },
        { name: 'Express', icon: 'devicon-express-original', level: 60 },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 80 },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored', level: 80 },
        { name: 'Django', icon: 'devicon-django-plain colored', level: 70 }
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter', icon: 'devicon-flutter-original-wordmark colored', level: 75 },
        { name: 'Dart', icon: 'devicon-dart-plain colored', level: 70 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored', level: 70 },
        { name: 'GitHub', icon: 'devicon-github-original', level: 70 },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored', level: 95 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-icon-wrapper">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
