import React from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"]
  },
  {
    title: "Frameworks and libraries",
    skills: ["JQUERY", "ANGULAR", "REACT", "NEXT.JS", "IONIC", "ELECTRON.JS"]
  },
  {
    title: "JavaScript libraries",
    skills: ["REDUX", "TANSTACK QUERY", "ZUSTAND", "FORMIK", "JEST", "STORYBOOK"]
  },
  {
    title: "Preprocessors, css style, component and motion libraries",
    skills: ["PUG", "SCSS", "SASS", "LESS", "BOOTSTRAP", "TAILWIND", "CHAKRAUI", "MATERIALUI", "NEXTUI", "FRAMER MOTION"]
  }
];

function Skills() {
  return (
    <section className="mb-12" id="skills">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <p className="mb-4">
        A look at all the programming languages, libraries, and tools I've worked with. I started programming
        about +4 years ago. I have tried a few programming languages and technology stack, both Backend
        and Frontend.
      </p>
      <p className="mb-6">
        Even though the scope of web development is wide, I was very interested and focused on Frontend
        development.
      </p>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;