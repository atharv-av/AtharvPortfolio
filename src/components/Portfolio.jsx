import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "TheInvoicer",
    description:
      "Developed a full-stack Invoice Platform enabling efficient creation, editing, and management of invoices with custom PDF generation and email delivery.Implemented secure authentication with Magic Link authentication and server-side validation. Designed a responsive dashboard and landing page, featuring animated charts and optimized performance",
    links: {
      site: "https://the-invoicer.vercel.app/",
      github: "https://github.com/atharv-av/TheInvoicer",
    },
  },
  {
    img: project2,
    title: "Webwunder",
    description: "Built a scalable project management platform with admin and user roles, multilingual support (German/English), and ticketing systems. Integrated Stripe for recurring payments, ImprovMX for email forwarding, and Awork for workflow management. Deployed on Vercel with CI/CD, using Cloudflare for DNS; achieved 250+ active subscribers and 7000+ visits.",
    links: {
      site: "https://www.webwunder.de/",
      github: "https://github.com/atharv-av/webwunder",
    },
  },
  {
    img: project3,
    title: "PrimeBid",
    description: "Developed a fully functional auction platform with responsive design and real-time bid management. Implemented features like user authentication, RBAC, payment verification, and admin dashboard. Automated email notifications for bid winning and task handling to enhance user experience and platform efficiency.",
    links: {
      site: "https://hilarious-tapioca-d5f5d6.netlify.app/",
      github: "https://github.com/atharv-av/PrimeBid",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
