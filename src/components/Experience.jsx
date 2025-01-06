import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'R3S Technologies',
    role: 'Jr Software Engineer',
    period: 'December 2024 - Current',
    location: 'Pune, India',
    tech: 'Next.js, TypeScript, Tailwind CSS, Shadcn/ui',
    description: [
      'Created a business and promotional website from scratch for a SaaS product.',
      'Worked on DatumDeckAI SaaS which allows efficient data management.',
      'Designed and integrated REST APIs for static and dynamic content as well as payment gateway.'
    ]
  },
  {
    company: 'House of Couton',
    role: 'Web Developer Intern',
    period: 'October 2024 - December 2024',
    location: 'Lucknow, India',
    tech: 'Next.js, TypeScript, Tailwind CSS, PostgresSQL, Shadcn/ui',
    description: [
      'Worked on an AI hiring app which allows companies to hire candidates with AI based interviews.',
      'Developed the frontend from scratch while also designing a clean and futuristic UI, improving performance by 50%.',
      'Created and implemented REST APIs for user management, AI based voice interviews and payment gateway.'
    ]
  },
  {
    company: 'RunOn Pvt Ltd',
    role: 'Frontend Developer Intern',
    period: 'April 2024 - May 2024',
    location: 'New Delhi, India',
    tech: 'Next.js, TypeScript, Tailwind CSS',
    description: [
      'Developed a versatile quiz maker app supporting various question types for flexible quiz creation and management.',
      'Created a drag-and-drop website builder allowing intuitive layout design and customization for users.',
      'Utilized Next.js, TypeScript, and Tailwind CSS for development, improving user engagement by 25%.'
    ]
  },
  {
    company: 'Amrutam Ayurveda',
    role: 'MERN Stack Intern',
    period: 'November 2023 - March 2024',
    location: 'Gwalior, India',
    tech: 'React.js, React Native, Express.js, REST APIs',
    description: [
      'Worked on mobile and web development using the MERN stack, integrating features across platforms.',
      'Utilized React.js and React Native for doctor consultations and e-commerce, enhancing UX and functionality.',
      'Created and optimized REST APIs for a patient-doctor website, ensuring smooth data exchange and interaction'
    ]
  }
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[800px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md
                hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {experience.company}
                </h2>
                <span className="text-gray-300">{experience.period}</span>
              </div>
              <div className="flex justify-between items-center flex-wrap gap-2 mt-1">
                <p className="text-gray-300">{experience.role}</p>
                <span className="text-gray-400">{experience.location}</span>
              </div>
              <p className="text-purple-400 mt-2 text-sm">
                <span className="font-semibold">Tech Stack:</span> {experience.tech}
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;