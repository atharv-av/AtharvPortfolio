import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am full stack web developer specialized in MERN Stack and
                Next.js, along with devops concepts/technologies including AWS,
                Docker, Kubernetes and so on. I have worked at 4 startups as an
                intern in the same tech stack gaining experience in live
                projects. I am currently looking for full time opportunities.
              </p>
            </div>
          </div>

          <div className="p-5 md:p-12 w-full">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let's Connect!
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors p-3 rounded-lg hover:bg-gray-800/40"
              >
                <FiMail className="text-2xl" />
                <span className="text-lg">atharv.av.codes@gmail.com</span>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors p-3 rounded-lg hover:bg-gray-800/40"
              >
                <FiPhone className="text-2xl" />
                <span className="text-lg">+91 7049394520</span>
              </a>

              <a
                href="https://wa.me/+917049394520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors p-3 rounded-lg hover:bg-gray-800/40"
              >
                <BsWhatsapp className="text-2xl" />
                <span className="text-lg">WhatsApp</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/atharv-vibhute-189320227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <AiFillLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://github.com/atharv-av"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <AiFillGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
