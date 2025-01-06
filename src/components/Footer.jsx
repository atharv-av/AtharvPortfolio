import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Atharv Vibhute</h3>
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

        <p className='text-gray-400'>@2024 Atharv Vibhute</p>
        
    </div>
  )
}

export default Footer