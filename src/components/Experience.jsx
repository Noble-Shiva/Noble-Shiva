import React from 'react';

const experiences = [
  {
    company: 'I-Exceed technologies',
    period: 'Sept. 2021 - Current',
    description:
      'Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, Pug, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand, Jest and using microfrontends and Storybook to facilitate the use of reusable components.',
  },
  {
    company: 'Happiest Minds',
    period: 'Feb. 2019 - Sept. 2021',
    description:
      'Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.',
  },
  // {
  //   company: 'Wipro Technologies',
  //   period: 'Jun. 2014 - Feb. 2019',
  //   description:
  //     'Web designer and responsive web designer on projects using Figma, HTML, CSS, Bootstrap, JavaScript, pixel perfect and clean code.',
  // },
];

function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 border-l border-gray-700"
          >
            <div
              className={`absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full ${
                experiences.length - 1 === index
                  ? 'bg-gray-500'
                  : 'bg-green-500'
              }`}
            ></div>
            <h3 className="text-xl font-semibold mb-1">
              {exp.company} | {exp.period}
            </h3>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
