import React from "react";
import { DiCode } from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frameworks/Libraries",
    technologies: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Redux" },
      { name: "Recoil" },
      { name: "Zustand" },
      { name: "GraphQL" },
      { name: "TanStack Query" },
    ],
  },
  {
    category: "Database Tools",
    technologies: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Mongoose" },
      { name: "Prisma" },
      { name: "Drizzle" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    category: "DevOps",
    technologies: [
      { name: "AWS" },
      { name: "Kubernetes" },
      { name: "Docker" },
      { name: "Kafka" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Pub/Sub" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I've worked on various frontend and fullstack projects. Check them out in my{" "}
              <a href="#projects" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                portfolio
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-purple-500"
              >
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
                  {skill.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg transition-colors group"
                    >
                      <DiCode className="text-2xl text-purple-400 transform group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;