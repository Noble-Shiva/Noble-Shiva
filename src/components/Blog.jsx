import React from 'react';
import { FaPen, FaRobot, FaCode, FaLightbulb } from 'react-icons/fa';

const blogPosts = [
  // Add your blog posts here
  // {
  //   title: 'Getting Started with OpenClaw',
  //   description: 'How I set up my AI assistant to help with development workflows',
  //   date: '2026-02-10',
  //   tags: ['AI', 'OpenClaw', 'Productivity'],
  //   link: '/blog/openclaw-getting-started',
  //   icon: FaRobot,
  // },
];

const upcomingTopics = [
  { title: 'OpenClaw Setup & Configuration', icon: FaRobot },
  { title: 'Building AI-Powered Workflows', icon: FaLightbulb },
  { title: 'Full-Stack Development Tips', icon: FaCode },
];

function Blog() {
  return (
    <section className="mb-12" id="blog">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      <p className="text-gray-300 mb-6">
        Thoughts, tutorials, and learnings from my journey in software development, 
        AI tools, and building products.
      </p>

      {blogPosts.length > 0 ? (
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="block bg-gray-800 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-green-500 text-xl mt-1">
                  <post.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{post.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <div className="flex gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-700 text-xs text-gray-300 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 bg-opacity-30 rounded-lg p-6 border border-gray-700 border-dashed">
          <div className="flex items-center gap-3 mb-4">
            <FaPen className="text-green-500" />
            <span className="text-gray-400">Coming Soon</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            I'm working on some articles. Here's what's in the pipeline:
          </p>
          <ul className="space-y-2">
            {upcomingTopics.map((topic, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <topic.icon className="text-gray-500 text-sm" />
                <span className="text-sm">{topic.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Blog;
