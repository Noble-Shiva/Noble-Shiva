import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JAVASCRIPT', 'TYPESCRIPT', 'PYTHON', 'DART', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['REACT', 'NEXT.JS', 'ANGULAR', 'FLUTTER', 'REACT NATIVE', 'IONIC'],
  },
  {
    title: 'Backend & APIs',
    skills: ['NODE.JS', 'EXPRESS', 'FASTAPI', 'REST', 'GRAPHQL'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS', 'DOCKER', 'KUBERNETES', 'CI/CD', 'LINUX'],
  },
  {
    title: 'Databases',
    skills: ['POSTGRESQL', 'MONGODB', 'REDIS', 'FIREBASE'],
  },
  {
    title: 'UI Libraries & Tools',
    skills: ['TAILWIND', 'SHADCN UI', 'MATERIALUI', 'SCSS', 'BOOTSTRAP'],
  },
];

function Skills() {
  return (
    <section className="mb-12" id="skills">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <p className="mb-4">
        A look at all the programming languages, libraries, and tools I've
        worked with over 8+ years of building software. From frontend interfaces 
        to backend systems, mobile apps to cloud infrastructure.
      </p>
      <p className="mb-6">
        I enjoy the full spectrum of development — crafting pixel-perfect UIs, 
        designing robust APIs, and shipping products that make an impact.
      </p>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded"
              >
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
