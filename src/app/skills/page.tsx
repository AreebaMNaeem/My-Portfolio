// page.tsx

import React from 'react';

interface Skill {
  name: string;
  imgSrc: string;
}

const skills: Skill[] = [
    { name: "TailwindCSS", imgSrc: "/assets/skills/TailwindCSS.png" },
        { name: "ReactJS", imgSrc: "/assets/skills/icons8-react-100.png" },
        { name: "Figma", imgSrc: "/assets/skills/figma.png" },
        { name: "HTML5", imgSrc: "/assets/skills/icons8-html-96.png" },
        { name: "JavaScript", imgSrc: "/assets/skills/javascript.png" },
        { name: "Meta", imgSrc: "/assets/skills/meta.png" },
        { name: "Bootstrap", imgSrc: "/assets/skills/bootstrap.png" },
        { name: "Python", imgSrc: "/assets/skills/python.png" },
        { name: "GitHub", imgSrc: "/assets/skills/github.png" },
        { name: "Firebase", imgSrc: "/assets/skills/firebase.png" },
        { name: "NodeJS", imgSrc: "/assets/skills/nodejs.png" },
        { name: "Canva", imgSrc: "/assets/skills/canva.png" },
        { name: "SQL", imgSrc: "/assets/skills/sql.png" },
        { name: "MongoDB", imgSrc: "/assets/skills/mongodb.png" },
        { name: "PHP", imgSrc: "/assets/skills/php.png" },
        { name: "C++", imgSrc: "/assets/skills/C++.png" },
        { name: "C", imgSrc: "/assets/skills/C.png" },
        { name: "CSS", imgSrc: "/assets/skills/css.png" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code mr-2"></i> Skills & <span className="text-blue-600">Abilities</span>
      </h2>

      <div className="container mx-auto flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.name} className="bar m-4 flex flex-col items-center">
            <div className="info flex flex-col items-center">
              <img src={skill.imgSrc} alt={skill.name} className="h-12 w-12 mb-2" />
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
